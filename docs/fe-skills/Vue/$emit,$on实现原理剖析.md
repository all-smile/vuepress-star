# $emit,$on实现原理剖析

## 源码

```javascript
// $on 的实现逻辑
Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
    const vm: Component = this
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn)
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn)
    }
    return vm
  }

// $emit 的实现逻辑
Vue.prototype.$emit = function (event: string): Component {
    const vm: Component = this
    let cbs = vm._events[event]
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs
      const args = toArray(arguments, 1)
      const info = `event handler for "${event}"`
      for (let i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info)
      }
    }
    return vm
  }

// invokeWithErrorHandling 的实现逻辑
export function invokeWithErrorHandling (
  handler: Function,
  context: any,
  args: null | any[],
  vm: any,
  info: string
) {
  let res
  try {
    res = args ? handler.apply(context, args) : handler.call(context)
  } catch (e) {
    handleError(e, vm, info)
  }
  return res
}

```
## 分析

1. 首先我们都了解vue的数据相应是依赖于“**观察-订阅**”模式，$on、$emit也不例外;
2. $on用来收集所有的事件依赖，他会将传入的参数event和fn作为key和value的形式存到vm._events这个事件集合里，就像这样vm._events[event]=[fn];
3. 而$emit是用来触发事件的，他会根据传入的event在vm_events中找到对应的事件并执行invokeWithErrorHandling(cbs[i], vm, args, vm, info)
4. 最后我们看invokeWithErrorHandling方法可以发现，他是通过handler.apply(context, args)和handler.call(context)的形式执行对应的方法

接着就可以根据 $on、$emit的实现方式来写一个eventBus。
