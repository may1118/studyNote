# vuex

vue框架中状态管理。在main.js引入store，注入。

```js
import store from './store'

new Vue({
    el:'#app',
    store
})
```

## vuex有哪几种属性

- state：基本数据
- getter：从基本数据派生的数据
- mutation：同步提交数据
- action：异步提交数据，包裹mutations
- module：模块Vuex

## 优点

- 可读性强
- 解耦
- 组件化

### 使用vuex-persistedstate防止vuex数据刷新丢失

[解决vuex刷新数据丢失](https://juejin.im/post/5d01fa7e6fb9a07ebb052df3)