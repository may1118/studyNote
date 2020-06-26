# Vue组件中data为什么必须是一个函数

对于**组件**有一个很明显的特点在于它是可以被复用的,注册一个组件实质上就是创建了一个组件构造器的引用,而真正当我们使用组件的时候才会去将组件实例化

```js
// 创建一个组件
var Component= function() {
}
Component.prototype.data = {
  a: 1,
  b: 2
}

// 使用组件
var component1 = new Component()
var component2 = new Component()
component1.data.b = 3
component2.data.b   // 3
```

`data`是在构造器的**原型链上被创建的**,实例化一个组件的时候,共享同样的`data`对象,当修改属性的时候,被实例化的其他组件也会发生变化

```js
var Component= function() {
}
Component.prototype.data = function() {
  return {
     a: 1,
     b: 2
  }
}

// 使用组件
var component1 = new Component()
var component2 = new Component()
component1.data.b = 3
component2.data.b   // 2
```

当我们的`data`是一个函数的时候,每一个实例的`data`属性都是独立的,不会相互影响了.这都是`JS`本身的特性带来的,跟Vue的设计无关