# Vuex文档记录

[TOC]

## 一些基本概念

`Vuex`使用单一状态树，一个对象包含了**全部应用层级状态**。所以每个应用仅仅包含一个`store`实例。

从`store`实例中读取状态再**计算属性computed**中返回某个状态

当数据发生变化的时候，都会重新求去计算属性，并且触发更新相关联的DOM。

这种模式需要依赖全局状态单例。可以从根组件**注入**到每一个子组件中

```js
//store.js
Vue.use(Vuex)
export default new Vue.Store({
    state,
    actions,
    mutations,
    getters
})
// main.js
import store from './store';
const vm = new Vue({
    el: "#app",
    store,
    ....
})
```

### Vue.use()

用来**注册插件**，注册插件之后就可以在所有Vue文件中使用，例如：Vuex、vue-router

## state

`state`中主要存放一些**初始数据**

**获取**：如果已经全局注册了插件，可以通过：

（如果使用了`modules`，则再加一层即可

```js
this.$store.state.xxx
this.$store.modelA.xxx
```

### mapState辅助函数

如果一个组件需要获取多个状态，这个状态都如上去获取会比较麻烦，我们可以使用**mapState**将需要的数据注入到**computed**属性中

```vue
<script>
	import { mapState } from 'vuex'
    export default {
        computed:{
            // 使用module之后的引入，如果没有，去掉第一个参数，第二个参数变为一个对象即可，相当于一种解构赋值（个人理解）
            ...mapState("moduleName",['getA','getB']),
            // other computed属性
        },
    }
</script>
```

## Getter

**作用**：获得state的数据

`getter`也是用来获取state的数据的，不过它可以**按要求返回数据**，及调用相关函数了过滤掉不需要的返回信息。大致用法和`state`一样，也是注入到`computed`中。

### 访问getter

- 属性访问

`Getter`会暴露为**store.getters**对象，我们可以通过属性的形式直接访问这些值。

```js
getters:{
    // 两个参数非别代表的信息如命名所示
    getInfo(state,getters){
        return state.info;
    }
}
```



```js
this.$store.getters.getInfo // 适用于以从根组件注入到子组件中
store.getters.getInfo
```

**注意**：通过属性访问时是作为 Vue 的响应式系统的一部分**缓存其中的。**

- 方法访问

可以让`getter`返回一个函数，来实现给getter传参

```js
getters:{
    getInfo: (state) => id => {
        return state.allInfo.id;
    }
}
// 调用
store.getters.getInfo(2)
```

**注意**：getter在通过方法访问时，每次都会进行调用，**而不会缓存结果**

### mapGetters

将store中的getter映射到局部**计算属性**中

```js
computed:{
    ...mapGetters("moduleName",[
        newInfoName: 'infoA'
    ])
}
```

## Mutation

**作用**：修改state中的数据

**接收的参数**：

- state：含义如命名所示
- payload：可以在调用Mutation函数的时候，自己传入相关信息

```js
// 定义
mutations:{
    add(state,n){
        state.count += n;
    }
}
// 调用
this.$store.commit('add',1);
```

因为只可以传入一个参数，所以一般为了传入更多的内容，会将参数**定义为一个对象**。而且只能通过`commit`调用相关函数。

也可以使用对象方式提交

```js
//定义
mutations:{
    add(state,payload){
        state.count += payload.count;
    }
}
// 调用
this.$store.commit({
    type: 'add',
    count: 1
})
```

### 需要注意点

- 需要**提前初始化**好所需要的属性

- 如果需要向state中添加新属性

  - Vue.set(state.obj,'keyName',keyVal)
  - state.obj = {...state.obj,keyName:keyVal}

- 使用常量代替`Mutation`事件类型

  - ```js
    import { SOME_MUTAION } from './mutation-type'
    mutations:{
        [SOME_MUTAION](state){
            // ....
        }
    }
    ```

  - 可以方便我们进行管理，而且可以防止一些恶意的篡改

- Mutation必须时同步函数

  - 因为函数本来就没有监听异步操作，如果使用异步会造成数据紊乱
  - 程序也会变得很难调试

### **mapMutaions**

方便使用Mutation，可以映射到**methods**中，方便调用

```js
methods:{
    ...mapMutaions("moduleA",[
        'methodA',
        'methodB'
    ])
}
```

## Action

**作用**：修改state中的数据，支持**异步**

其实，如果需要更改数据，Action是提交Mutation进行修改的

```js
actions:{
    // 通过解构赋值简化代码参数，不过这个参数不是store里面的，为了保证异步准确，相当于是一份赋值
    addAsync({commit,context,dispatch}){
        setTimeout(()=>{
            commit('add',1);
        },1000);
    }
}
```

这样就能实现在触发1s后，提交给mutation去修改数据，而mutation只能是同步的。

在组件中触发

```js
this.$store.dispatch('addAsync',1);
// 可传入多个值
this.$store.dispatch('addAsync',{
    count: 1
});
// 以对象的方式分发
this.$store.dispatch({
    type:'addAsync',
    amount: 1
})
```

### mapActions

```js
methods:{
    ...mapActions('moduelName',[
        'addAsync'
    ])
}
```

## Module

如果我们将所有数据放到`state`中，那么管理会很麻烦，而且命名也是，所以我们可以使用**Module**将store分割成模块。每个模块都有自己的state\getter\mutation\action

```js
const modulesA = {
    namespaced: true,
    state:{},
    getters:{},
    ....
}
const store = new Vuex.Store({
    modules:{
        modulesA
    }
})
```

