# Vue乱七八糟整理

## $mount

在实例初始化时，没有接收到`el`选项，还处于**未挂载**阶段，`$mount`可以手动挂载

```js
const app = new Vue({
    ...
}).$mount('#app')
```

## $router和$route的区别

| $router                              | $route                 |
| ------------------------------------ | ---------------------- |
| 是`VueRouter`实例对象                | 存放的是当前路径的信息 |
| vm.$router.currentRoute == vm.$route |                        |

## watch和computed区别

| watch  | computed |
| ------ | -------- |
| 无缓存 | 有缓存   |
|        |          |
|        |          |

