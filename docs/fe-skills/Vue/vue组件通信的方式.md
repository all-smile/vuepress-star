# vue组件通信的方式
## 1，props
```javascript
// 数组:不建议使用
props:[]

// 对象
props:{
 inpVal:{
  type:Number, //传入值限定类型
  // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
  // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
  required: true, //是否必传
  default:200,  //默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=>[]
  validator:(value) {
    // 这个值必须匹配下列字符串中的一个
    return ['success', 'warning', 'danger'].indexOf(value) !== -1
  }
 }
}
```
## 2.$emit
```javascript
// 父组件
<home @title="title">
// 子组件
this.$emit('title',[{title:'这是title'}])
```
## 3.vuex 状态管理器
**state**:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
**getter**:获取 store 值,可认为是 store 的计算属性,可通过this.$store.getter 或
       mapGetters访问
**mutation**:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
         vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
**action**:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
       访问
**modules**:模块,如果状态过多,可以拆分成模块,最后在入口通过...解构引入
## 4 attrs和listeners

1. **attrs场景**:如果父传子有很多值,那么在子组件需要定义多个props解决:attrs 场景:如果父传子有很多值,那么在子组件需要定义多个 props 解决:attrs场景:如果父传子有很多值,那么在子组件需要定义多个props解决:attrs获取子传父中未在 props 定义的值
```javascript
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},
// 相对应的如果子组件定义了 props,打印的值就是剔除定义的属性
props: {
  width: {
    type: String,
    default: ''
  }
},
mounted() {
  console.log(this.$attrs) //{title: "这是标题", height: "80", imgUrl: "imgUrl"}
},
```
_**listeners**_**场景**:子组件需要调用父组件的方法解决:父组件的方法可以通过_v_−_on_="listeners" 传入内部组件——在创建更高层次的组件时非常有用
```javascript
// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}
// 如果是孙组件要访问父组件的属性和调用方法,直接一级一级传下去就可以
inheritAttrs
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},
```

inheritAttrs默认值为true，true的意思是将父组件中除了props外的属性添加到子组件的根节点上(说明，即使设置为true，子组件仍然可以通过$attr获取到props意外的属性)
将inheritAttrs:false后,属性就不会显示在根节点上了
## 5.provide和inject
```javascript
//父组件:
provide: { //provide 是一个对象,提供一个属性或方法
  foo: '这是 foo',
  fooMethod:()=>{
    console.log('父组件 fooMethod 被调用')
  }
},

// 子或者孙子组件
inject: ['foo','fooMethod'], //数组或者对象,注入到子组件
mounted() {
  this.fooMethod()
  console.log(this.foo)
}
//在父组件下面所有的子组件都可以利用inject
```

provide 和 inject 绑定并不是可响应的。这是官方刻意为之的。 然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的,对象是因为是引用类型
```javascript
//父组件:
provide: {
  foo: '这是 foo'
},
mounted(){
  this.foo='这是新的 foo'
}

// 子或者孙子组件
inject: ['foo'],
mounted() {
  console.log(this.foo) //子组件打印的还是'这是 foo'
}
// 父组件
provide() {
    return {
      staticValue: this.staticValue, // 直接返回值，不可响应
      staticObject: this.staticObject, // 返回一个对象，可响应
      getReactiveValue: () => this.staticValue // 返回一个对象的函数，可响应
    }
  },

// 子组件
inject: ["staticValue", "getReactiveValue", "staticObject"],
computed: {
    reactiveValue() {
      return this.getReactiveValue(); // 返回注入的对象函数，通过计算属性来监听值的变化
    },
  },
```
所以provide返回一个对象或者函数是可以响应的， 因为对象和函数是引用类型， 实际上改变也不是vue做的，而是JS的引用类型特性
## 6.parent和children
## 7.$refs
```javascript
// 父组件
<home ref="home"/>

mounted(){
  console.log(this.$refs.home) //即可拿到子组件的实例,就可以直接操作 data 和 methods
}
```
## 8 $root
## 9 sync
```javascript
// 父组件
<home :title.sync="title" />
//编译时会被扩展为
<home :title="title"  @update:title="val => title = val"/>

// 子组件
// 所以子组件可以通过$emit 触发 update 方法改变
mounted(){
  this.$emit("update:title", '这是新的title')
}
```
## 10.v-slot
2.6.0 新增 1.slot,slot-cope,scope 在 2.6.0 中都被废弃,但未被移除 2.作用就是将父组件的 template 传入子组件 3.插槽分类: A.**匿名插槽**(也叫默认插槽): 没有命名,有且只有一个;
```javascript
// 父组件
<todo-list>
    <template v-slot:default>
       任意内容
       <p>我是匿名插槽 </p>
    </template>
</todo-list>

// 子组件
<slot>我是默认值</slot>
//v-slot:default写上感觉和具名写法比较统一,容易理解,也可以不用写
```
B.**具名插槽:** 相对匿名插槽组件slot标签带name命名的;
```javascript
// 父组件
<todo-list>
    <template v-slot:todo>
       任意内容
       <p>我是匿名插槽 </p>
    </template>
</todo-list>

//子组件
<slot name="todo">我是默认值</slot>
```
C.**作用域插槽**: 子组件内数据可以被父页面拿到(解决了数据只能从父页面传递给子组件)
```javascript
// 父组件
<todo-list>
 <template v-slot:todo="slotProps" >
   {{slotProps.user.firstName}}
 </template>
</todo-list>
//slotProps 可以随意命名
//slotProps 接取的是子组件标签slot上属性数据的集合所有v-bind:user="user"

// 子组件
<slot name="todo" :user="user" :test="test">
    {{ user.lastName }}
 </slot>
data() {
    return {
      user:{
        lastName:"Zhang",
        firstName:"yue"
      },
      test:[1,2,3,4]
    }
  },
// {{ user.lastName }}是默认数据  v-slot:todo 当父页面没有(="slotProps")
```
## 11 EventBus
1.就是声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上; 2.类似于 Vuex。但这种方式只适用于极小的项目 3.原理就是利用on和_on_和emit 并实例化一个全局 vue 实现数据共享
```javascript
// 在 main.js
Vue.prototype.$eventBus=new Vue()

// 传值组件
this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')

// 接收组件
this.$eventBus.$on("eventTarget",v=>{
  console.log('eventTarget',v);//这是eventTarget传过来的值
})
```
可以实现平级,嵌套组件传值,但是对应的事件名eventTarget必须是全局唯一的
## 12 broadcast和dispatch
vue 1.x 有这两个方法,事件广播和派发,但是 vue 2.x 删除了 下面是对两个方法进行的封装
```javascript
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
}
```
## 13 路由传参
a：
```javascript
// 路由定义
{
  path: '/describe/:id',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  path: `/describe/${id}`,
})
// 页面获取
this.$route.params.id
```
b：
```javascript
// 路由定义
{
  path: '/describe',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  name: 'Describe',
  params: {
    id: id
  }
})
// 页面获取
this.$route.params.id
```
c：
```javascript
// 路由定义
{
  path: '/describe',
  name: 'Describe',
  component: Describe
}
// 页面传参
this.$router.push({
  path: '/describe',
    query: {
      id: id
  }
)
// 页面获取
this.$route.query.id
```
三种方案对比 方案二参数不会拼接在路由后面,页面刷新参数会丢失 方案一和三参数拼接在后面,丑,而且暴露了信息
## 14 Vue.observable

