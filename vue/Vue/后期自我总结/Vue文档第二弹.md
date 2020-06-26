# Vue文档第二弹

[TOC]

## 组件基础

组件是可复用的Vue实例，所以他们在`new Vue`接收相同的选项，例如：**data\computed\watch\methods以及生命周期钩子等**，仅有的例外像**el**这样根实例持有的选项。

### data必须是一个函数

因为组件是可以复用的，因为每个实例需要维护一份**被返回的独立的拷贝**。

### prop和emit父子组件传值

### 动态组件

## 组件注册

### 组件名

可以使用短横线、驼峰法，但是使用的话只有短横线法有效

（组件名不能包含大写字母（**只能首字母大写**），如果需要也要改成小写）

### prop传值

- 传入一个对象

  - ```vue
    <Father v-bind="obj"></Father>
    // 等同于
    <Father :name="obj.name" :age="obj.age"></Father>
    obj:{
    	name: "mzy",
    	age: 20
    }
    ```

    

#### 单向数据流

所有的prop都使得其父子prop之间形成了一个**单向下行绑定**：父级prop的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外海边父级组件的状态，从而导致你的应用的数据流向难以理解。

- prop用来传递一个初始值：这个子组件用一个本地数据来接收使用。
- 以一种原始值传入且需要进行转换

#### prop验证

```js
props:{
    propsA:Number,
    propsB:{
        type: [String,Number],
        required: true,
        default: 10 //也可以接收一个函数
    }
}
```

## 自定义事件

## 动态&异步组件

### 动态组件上使用keep-alive

```vue
<keep-alive>
	<component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

如果对于缓存的组件有要求，可以使用**include**或者**exclude**

### 异步组件

## 过渡&动画

将需要过渡的内容使用**transition**标签进行包裹

- v-if
- v-show
- 动态组件
- 组件根节点

### 过渡的类名

- v-enter
- v-enter-active
- v-enter-to
- v-leave
- v-leave-active
- v-leave-to

这是在**transition**没有定义name的情况下，默认的钩子函数，如果使用了**name**属性，那么可以将v ---> name

使用**name = "fade-enter"**定义的过渡

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

### 动画

```css
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
/* 定义的动画 */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```

### 列表渲染

**transition-group**

```vue
  <transition-group name="flip-list" tag="ul">
    <li v-for="item in items" v-bind:key="item">
      {{ item }}
    </li>
  </transition-group>
```

