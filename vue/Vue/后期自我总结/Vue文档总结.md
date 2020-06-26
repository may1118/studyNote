# Vue文档总结

[TOC]

## MVVM

- Model
- View
- ViewModel

View的变化会自动体现到ViewModel中，反之亦然（双向绑定原理那一部分吧）

## 响应式系统

类似于MVVM中View、ViewModel的思想，如果数据发生了变化，会**自动反映**到视图中，反之亦然。

响应式数据需要满足：实例被创建时，已经存在于`data`中的属性才是**响应式**的，如果添加了一个新的属性

```js
vm.b = 'new one';
```

那么在页面中改变`b`的时候，将不会反映到实例中，在实例中改变的时候，也不会反映到视图中。

## 生命周期

具体的图片可以查看保存的文件中

- beforeCreate
- created
  - 判断时模板（template）还是el
  - 如果没有el，调用vm.$mount(el)
  - 有template编译到render函数中
- beforeMount
- mounted
- 当data被修改时，beforeUpdate
- 虚拟DOM重新渲染，并应用更新：updated
- beforeDestroy
- destoryed

### created

可以用来发送请求，因为data、methods已经在beforeCreate中完成了初始化，但是无法更新DOM节点，如果需要的话，可以调用nextTick

### mounted

已经将元素挂载到了DOM上，可以修改DOM

### beforeDestory

- 接触绑定
- 销毁子组件
- 事件监听器

## 父子组件之间的生命周期

首先父元素先到达beforeMount()，然后子组件开始构建直到mounted，然后父元素再mounted()

父组件先beforeDestory()，然后子组件开始销毁，最后面父组件destroy()

![](I:\myFuture\桌面资料\面试\学习图片\Vue父子组件中的生命周期.png)

## 指令

### v-for和v-if的优先级

v-for的优先级高，建议将条件渲染的数组、对象换成**computed**计算之后的属性

> 官方不推荐v-for和v-if一起使用

### v-on条件绑定事件

```vue
<div @[event]="handle"></div>
```

## 计算属性和侦听器和methods

### 计算属性 VS methods

计算属性：基于他们的**响应式依赖进行缓存的**

计算属性默认只有一个：**getter**，但是你也可以加入**setter**

### 计算属性VS侦听器

即：computed VS watch

- watch正常情况下，无法监听一个对象的具体属性、内容的变化
  - （深度监测）可以watch传入一个对象，设置**deep:true**，回调函数为hander
  - 检测对象的某一个属性（比较麻烦）
  - 使用computed()，监听某个属性

## class与style绑定

绑定`class`和`style`是使用**v-bind**，而且Vue对这两个属性进行了增强。

他们可以接收一个对象、数组，而且对象、数组定义的位置可以是data也可以是computed

## 条件渲染

### v-if

和**v-if**可以一起使用的是**v-else**和**v-else-if**

### v-show

也是条件渲染，不过是惰性的

### v-if VS v-show

- **v-if**是真正的条件渲染，因为它会保证再切换过程中条件内的事件监听器和子组件适当地**销毁和重建**。
- **v-if**也是惰性的，如果再初始渲染时条件为假，则什么都不做，一直到条件第一次变为真时，才会开始渲染条件块
- **v-show**不管初始条件时什么，元素总会被渲染，并且知识简单的基于CSS进行切换
- **v-if**有更高的切换开销，而**v-show**有更高的初始渲染开销。因此，如果需要分成频繁地切换，则使用**v-show**较好，如果在运行时条件很少改变，则使用**v-if**较好。

## 渲染列表

**v-for**：

```vue
<div v-for="(item,index) in/for arr/obj"></div>
```

如果是对象，会按Object.keys()的结果遍历

如果是数组，则按照下标遍历

### 维护状态

当`Vue`正在更新使用**v-for**渲染的元素列表时，它默认使用“**就地更新**”的策略。如果数据项的顺序改变，Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素，并且确保他们在每个索引位置正确渲染。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时DOM状态的列表渲染输出。**

为了给Vue一个提示，以便他能跟踪每个节点的身份，从而重用和重新排序现有元素，需要为每项提供一个唯一的**key**属性。

### 数组更新检测

#### 变异方法

使用了如下方法，更改了数组，他们将会触发视图更新

- push\pop
- shift\unshift
- sort\reverse
- splice

#### 替换数组（非变异方法）

使用了如下方法（虽然没有更改数组）**替换数组**，会触发视图的更新。

- filter、concat、slice

```js
example.items = example.items.filter(item=>{
    return item > 2;
})
```

**说明：**Vue使得DOM元素得到大范围的重用而实现了一些只能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是**非常高效的操作**。

### 注意数组更新事项

以下方法变动数组，`Vue`**不会检测到**：

- 利用索引直接设置一个数组项

  - ```js
    vm.items[indexOfItem] = newVal;
    ```

- 直接修改数组的长度

  - ```js
    vm.items.length = newLength;
    ```

虽然不会检测得到，但是我们可以换一种方法，就可以检测到了

- **第一类**：直接替换

  - ```js
    Vue.set(vm.items,indexOfItem,newVal);
    vm.items.splice(indexOfItem,1,newVal);
    ```

- **第二类**：修改数组长度

  - ```js
    vm.items.splice(newLength);
    ```

### 注意对象更新事项

由于JavaScript限制，**Vue不能检测对象属性的添加和删除**

```js
var vm = new Vue({
    data(){
        return {
            a: 1 // 是响应的
        }
    }
})
vm.b = 2 //不是响应的
```

**解决**：

```js
Vue.set(Obj,propertyName,value);
vm.$set(Obj,propertyName,value); //实例上面
```

如果需要添加多个对象，并且需要响应式的话，需要如下方法

```js
vm.newObj = Object.assign({},vm.newObj,{
    name: 'mzy',
    age: 20
})
```

**注意：不能使用：**

因为这样赋值的化，和`vm.b = 2`的本质是一样的。

```js
vm.newObj = Object.assign(vm.newObj,{
    name: 'mzy',
    age: 20
})
```

# 一直不懂这个重新赋值和修改有有什么？？？

## 事件处理

使用`v-on`绑定事件

```vue
<div v-on:click="handleClick('msg',$event)"></div>
```

### 事件修饰符

可以**链式调用**

- .stop：阻止事件继续传播

  - ```html
    <a v-on:click.stop="doThis"></a>
    ```

- .prevent：提交事件不再重载页面

  - ```vue
    <form v-on:submit.prtvent.stop="onSubmit"></form>
    ```

- .capture：添加事件监听器时使用事件捕获模式，即内部元素触发的事件先在此处理，然后才交给内部元素进行处理

  - ```vue
    <div v-on:click.captrue="doThis">...</div>
    ```

- .self：只有当event.target是自身时触发处理函数

- .once：只会触发一次

- .passive：和prevent相反，会告诉浏览器你不想阻止默认行为

  - 如果一起使用，.prevent会被忽略

### 按键盘修饰符

只有在`key`是`enter`是，会调用`submit`函数

```vue
<input v-on:keyup.enter="submit"></input>
```

- .enter
- .tab
- .delete
- .esc
- .space
- ....

### 系统修饰键

- .ctrl
- .alt
- .shift
- .meta（window）

可以和键盘修饰符合用

`alt+C`

```vue
<input @keyup.alt.67="clear"></input>
```

- .exact：精确的案件才会触发

#### 鼠标修饰符

- .left
- .right
- .middle

### 为什么在HTML中监听事件

- 查看HTML代码能轻松**定位**JavaScript代码里对应的方法
- 无需再JavaScript中手动绑定事件，**ViewModel代码可以是非常纯粹的逻辑**，和DOM完全解耦，更易于测试
- 当一个ViewModel销毁的时候，所有事件处理器会**自动删除**，无需担心如何清理他们。

## 表单输入绑定

使用`v-model`绑定表单元素，双向数据绑定

- `<input>`
- `<textarea>`
- `<select>`

### 修饰符

- .lazy：使用`change`事件进行同步，失去焦点的时候触发
- .number：将用户输入值转为数值类型
- .trim：自动过滤用户输入的首位空白字符