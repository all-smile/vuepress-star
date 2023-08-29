# keep-alive实现原理探究

原文： [https://juejin.cn/post/6930915968655261703](https://juejin.cn/post/6930915968655261703)

原文有删改

## Vue2.X 源码(keep-alive)：
缓存的是整个 **VNode**
```javascript
/* @flow */

import { isRegExp, remove } from 'shared/util'
import { getFirstComponentChild } from 'core/vdom/helpers/index'

type CacheEntry = {
  name: ?string;
  tag: ?string;
  componentInstance: Component;
};

type CacheEntryMap = { [key: string]: ?CacheEntry };

function getComponentName (opts: ?VNodeComponentOptions): ?string {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern: string | RegExp | Array<string>, name: string): boolean {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance: any, filter: Function) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const entry: ?CacheEntry = cache[key]
    if (entry) {
      const name: ?string = entry.name
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}

function pruneCacheEntry (
  cache: CacheEntryMap,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const entry: ?CacheEntry = cache[key]
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}

const patternTypes: Array<Function> = [String, RegExp, Array]

export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode() {
      const { cache, keys, vnodeToCache, keyToCache } = this
      if (vnodeToCache) {
        const { tag, componentInstance, componentOptions } = vnodeToCache
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag,
          componentInstance,
        }
        keys.push(keyToCache)
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
        this.vnodeToCache = null
      }
    }
  },

  created () {
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    this.cacheVNode()
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  updated () {
    this.cacheVNode()
  },

  render () {
    const slot = this.$slots.default
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode
        this.keyToCache = key
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}

```
## 关于 keep-alive
keep-alive 是一个抽象组件，不会和子组件建立父子关系，也不会作为节点渲染到页面上。

关于**抽象组件** Vue 的文档没有提这个概念，它有一个属性 abstract 为 true，在抽象组件的生命周期过程中，我们可以对包裹的子组件监听的事件进行拦截，也可以对子组件进行 Dom 操作，从而可以对我们需要的功能进行封装，而不需要关心子组件的具体实现。除了kepp-alive还有`<transition><transition-group>`等。

### 作用

- 能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。
- 避免反复渲染影响页面性能，同时也可以很大程度上减少接口请求，减小服务器压力。
- 能够进行路由缓存和组件缓存。
### Activated
keep-alive 的模式下多了 activated 这个生命周期函数, keep-alive 的声明周期执行:

- 页面第一次进入，钩子的触发顺序

created-> mounted-> activated，退出时触发 deactivated 当再次进入（前进或者后退）时，只触发 activated。

- 事件挂载的方法等，只执行一次的放在 mounted 中；组件每次进去执行的方法放在 activated 中。
## keep-alive解析
**源码文件位置**： `source-code\vue\src\core\components\keep-alive.js`
### 渲染
keep-alive 是由 render 函数决定渲染结果,在开头会获取插槽内的子元素，调用 **getFirstComponentChild **获取到第一个子元素的 VNode。
```javascript
const slot = this.$slots.default
const vnode: VNode = getFirstComponentChild(slot)
```
接着判断当前组件**是否符合缓存条件**，组件名与 include 不匹配或与 exclude 匹配都会直接退出并返回 VNode，不走缓存机制。
```javascript
// check pattern
const name: ?string = getComponentName(componentOptions)
const { include, exclude } = this
if (
// not included
(include && (!name || !matches(include, name))) ||
// excluded
(exclude && name && matches(exclude, name))
) {
  return vnode
}
```
匹配条件通过会进入缓存机制的逻辑，如果命中缓存，从 cache 中获取缓存的实例设置到当前的组件上，并调整 key 的位置将其放到最后(**LRU 策略**)。 如果没命中缓存，将当前 VNode 缓存起来，并加入当前组件的 key。如果缓存组件的数量超出 max 的值，即缓存空间不足，则调用 **pruneCacheEntry **将最旧的组件从缓存中删除，即 keys[0] 的组件。之后将组件的 keepAlive 标记为 true，表示它是被缓存的组件。
> LRU 缓存策略：从内存中找出最久未使用的数据置换新的数据。
> 算法根据数据的历史访问记录来进行淘汰数据，其核心思想是：如果数据最近被访问过，那么将来被访问的几率也更高。

```javascript
const { cache, keys } = this
const key: ?string = vnode.key == null
// same constructor may get registered as different local components
// so cid alone is not enough (#3269)
  ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
: vnode.key
if (cache[key]) {
  vnode.componentInstance = cache[key].componentInstance
  // make current key freshest
  remove(keys, key)
  keys.push(key)
} else {
  cache[key] = vnode
  keys.push(key)
  // prune oldest entry
  if (this.max && keys.length > parseInt(this.max)) {
    pruneCacheEntry(cache, keys[0], keys, this._vnode)
  }
}
```
pruneCacheEntry 负责将组件从缓存中删除，它会调用组件 $destroy 方法销毁组件实例，缓存组件置空，并移除对应的 key。
```javascript
function pruneCacheEntry (
  cache: CacheEntryMap,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const entry: ?CacheEntry = cache[key]
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}

export default {
  name: 'keep-alive',
  abstract: true,
  // ...
  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },
  render(){}
}
```
## 👉渲染总结

1. 通过 getFirstComponentChild 获取第一个子组件，获取该组件的 name；
2. 通过 include 与 exclude 属性进行匹配，判断当前组件是否要被缓存，如果匹配成功；
3. 命中缓存则直接获取，同时更新 key 的位置；
4. 不命中缓存则设置进缓存，同时检查缓存的实例数量是否超过 max， 超过则根据 LRU 策略删除最近最久未使用；
5. 如果在中途有对 include 和 exclude 进行修改，通过 watch 来监听 include 和 exclude，在其改变时调用 pruneCache 以修改 cache 缓存中的缓存数据。

---

## 基于 keep-alive 缓存实现方案
### 方案一：整个页面缓存
一般采用在 router 的 meta 属性里增加一个 keepAlive 字段，然后在父组件或者根组件中，根据 keepAlive 字段的状态使用 keep-alive 标签，实现对路由的缓存：
```html
<keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
</keep-alive>
<router-view v-if="!$route.meta.keepAlive" />
```
### 方案二：动态组件缓存
使用 vuex 配合 exclude 和 include，通过 include 和 exclude 决定那些组件进行缓存。注意这里说的是组件，并且 cachedView 数组存放的是组件的名字，如下：
```html
<keep-alive :include="$store.state.keepAlive.cachedView">
    <router-view></router-view>
</keep-alive>
```
## 场景分析
在 SPA 应用中用户希望在 Tab 多个页面来回切换的时候，不要丢失查询的结果，关闭后清除缓存。

如下图： ![](~@public/fe-skills/0020.png)

期望是用户在切换 Tab 时 页面时缓存的，当用户关闭 Tab ，重新从左侧菜单打开时是不缓存。
### 路由缓存方案
这样是持久缓存了整个页面，问题也就出现当用户通过 Tab 关闭页面然后从左侧打开菜单时是缓存的页面，这个不符合日常使用习惯，所以为了解决数据新鲜度的问题可以在 activated 触发查询请求就能保证数据的新鲜度。
```javascript
activated(){
 this.getData()
}
```
但是使用后发现由于你切换 Tab 时每次都会请求数据，但是如果项目的数据量有很大频繁请求会给后端造成很大压力 。
### 动态组件缓存方案
版本一需要频繁拉去数据导致此方案已不合适只能动态缓存组件方案。
```html
<keep-alive :include="cachedViews">
  <router-view :key="key"></router-view>
</keep-alive>
```
其中 cachedViews 是通过监听路由动态增加删除维护要缓存的组件名称（所以组件名称不要重复）数组：
```javascript
const state = {
  cachedViews: [],
}
const mutations = {
  ADD_VIEWS: (state, view) => {
    if (state.cachedViews.includes(view.name)) return
    state.cachedViews.push(view.name)
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
  },
}
const actions = {
  addCachedView({ commit }, view) {
    commit('ADD_VIEWS', view)
  },
  deleteCachedView({ commit }, view) {
    commit('DEL_CACHED_VIEW', view)
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
```
通过监听路由变化：
```javascript
watch: {
    '$route'(newRoute) {
      const { name } = newRoute
      const cacheRout = this.ISCACHE_MAP[name] || []
      cacheRout.map((item) => {
        store.dispatch('cached/addCachedView', { name: item })
      })
    },
  },
// 当通过 Tab 关闭页面时清除组件名称：
closeTag(newRoute) {
   const { name } = newRoute
   const cacheRout = this.ISCACHE_MAP[name] || []
   cacheRout.map((item) => {
     store.dispatch('cached/deleteCachedView', { name: item })
   })
 }
```
但是在遇到嵌套路由时在层级不同的 router-view 中切换 Tab 会出现缓存数据失效的问题，无法缓存组件，嵌套路由如下： ![](~@public/fe-skills/0021.png)
### 如何解决？

- 方案一：菜单嵌套，路由不嵌套

通过维护两套数据，一套嵌套给左侧菜单，一套扁平化后注册路由，改造后的路由： ![](~@public/fe-skills/0022.png)

- 方案二：修改 keep-alive 把 catch 对象到全局

通过上面 keep-alive 解析可以知道，keep-alive就是把通过 include 匹配的组件的 vnode，放到 keep-alive 组件的一个 cache 对象中，下次渲染时，如果能在这里面找到，就直接渲染vnode。所以把这个 cache 对象，放到全局去（全局变量或者 vuex），这样我就可以不用缓存 ParnetView 也能缓存其指定的子组件了。
```javascript
import Vue from 'vue'
const cache = {}
const keys = []
export const removeCacheByName = (name) => {/* 省略移除代码 */}
export default Object.assign({}, Vue.options.components.KeepAlive, {
  name: 'NewKeepAlive',
  created() {
    this.cache = cache
    this.keys = keys
  },
  destroyed() {},
})
```

- 方案三：修改 keep-alive 根据路由 name 缓存

从上文可以知道 keep-alive 是从 cache 中获取缓存的实例设置到当前的组件上，key 是组件的名称，可以通过改造 getComponentName 方法，组件名称获取更改为路由名称使其缓存的映射关系只与 route name 值有关系。
```javascript
function getComponentName(opts) {
  return this.$route.name
}
```
cache 缓存 key 也更改为路由名称。

