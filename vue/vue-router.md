# vue-router

[TOC]



## 基本使用

### 创建一个路由对象

```js
let routerObj = new VueRouter({
    routes:[{
        path: '/login',
        component: login
    },{
        path: '/register',
        component: register
    }]
});
```

### 注册到Vue实例上

```js
let vm = new Vue({
    el: '#app',
    router: routerObj
});
```

### 页面上显示

路由匹配到的组件将渲染到`router-view`中

```html
<div id='app'>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>	
</div>
```

## 动态路由匹配

使用：`/url/:id`

含义：路由匹配到`/url`并且后面跟有其他路径，在`$route`中可以通过`params`来获取到有关的对象，那么键值`name`对应的内容即`url`的实际参数

例如：`/login/123`，那么可以通过`Vue Devtools`可以看到