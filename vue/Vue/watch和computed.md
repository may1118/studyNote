# watch和computed和methods

都是Vue的依赖追踪机制为基础,都是:当某一个数据发生变化的时候,所有依赖这个数据的相关数据**自动发生变化,**这就是**自动**调用相关函数去实现数据的变动.

## computed

**有缓存**,当改变其他数据时,`computed`属性并不会重新计算,从而提升性能

## 区别

`watch`监听某个数据的变化,**一个数据影响多个数据**

`computed`计算后返回新数据,**一个数据受多个数据的影响**

## computed和methods

- `computed`是响应式的，`methods`是非响应式的
- computed有缓存，methods每次调用都会执行
- computed可以有get/set方法，methods不可以