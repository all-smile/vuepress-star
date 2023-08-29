# vue扩展插件，自定义原型方法挂载
vue引入的**插件**，如 element , 都需要提供 install 方法，因为 Vue.use() 方法会调用插件里的 install 方法
```javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)
```

类似的
**全局组件**也是同样的做法，在 install 方法里面 进行 组件 注册
```javascript
import ColorIconComponents from './iconColor.vue'

const ColorIcon = {
    install: function (Vue) {
        Vue.component('ColorIcon', ColorIconComponents)
    }
}

export default ColorIcon
```

**数组对象等绑定自定义方法**
```javascript
export default {
  install(Vue) {
    // 数组对象排序 asc-升序 des-降序
    Array.prototype.sortListObjByKey = function (key, order = 'asc') {
      const that = this
      const comparefn = (obj1, obj2) => {
        if (order === 'asc') {
          return obj1[key] - obj2[key]
        } else {
          return obj2[key] - obj1[key]
        }
      }
      return that.sort(comparefn)
    }
  }
}
```
```javascript
import customFn from "./libs/customFn";

Vue.use(customFn)
```

