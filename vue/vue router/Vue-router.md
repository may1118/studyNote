# Vue-router

**含义**:Vue-router是Vue的路由插件

**包含**:router-link  router-view

## active-class

设置链接激活的时候,使用的`CSS`类名,默认值可以通过`linkActiveClass`来配置

## 动态路由

在配置的时候,可以使用**/:id**进行动态路由的配置

获取:**this.$route.params**,就能拿到配置的动态路由参数

- 从后台拿路由表
  - 拦截路由 --> 后台获取 --> 保存到localstorage

## $route和$router的区别

- `$route`是当前正在转跳的路由对象,是Vue实例中的信息
- `$router`是`VueRouter`的实例属性,相当于一个全局的路由对象,里面包含很多属性的子对象.

## vue-router响应路由参数的变化

```js
const User = {
    template: ``,
    watch:{
        '$route' (to,from){
            // ...对路由变化做出响应
        }
    }
}
// 或者调用导航守卫相关函数
const User = {
    template:``,
    beforeRouteUpdate(to,from,next){
        // ...
    }
}
```

## vue-router传参

```js
this.$router.push({
    path:'/xxx',
    query:{
        id:id
    }
})
// 接收
this.$route.query.id
```

或者使用params

```js
this.$router.push({
    name:'xxx',
    params:{
        id: id
    }
})
this.$route.params.id
```

**注意**:一个是**$router**,Vue-router的属性进行push

获取是通过Vue实例的**$route**获取

### 两者的区别

- query相当于GET请求,可以在地址栏看到请求参数
- params相当于POST请求,参数不会在地址栏中显示,刷新会消失

## vue-router的两种模式

- hash模式(默认的模式),路由中含有#
- history模式,配置的话需要前后端的配合,但是可以去掉路由中的#

## 动态路由懒加载

```js
// 方法1:
const Recommend = () => import('./components/commend/commend');

//方法2：
const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}
```

## vue-router重定向

配置:redirect属性

## 配置404页面

```js
export default new Router({
    mode: 'hash',
    routes:[{
        name:'404',
        path:'/404',
        component: ()=>import('@/views/notFound.vue')
    },{
        // 一定要在最后面
        path:'*',
        redirect: '/404'
    }]
})
```

## vue转跳路由 滚动到固定位置

```js
export default new Router({
    scrollBehavior(to,from,savePosition){
        if(savePosition){
            return savePosition
        }
        // 设置回到顶部
        return {
            x: 0,
            y: 0
        }
    }
})
```

