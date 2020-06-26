# $nextTick

## 为什么要使用$nextTick

因为Vue中DOM更新是异步的,而$nextTick是**DOM更新完成之后执行的**

## 其他应用

如果需要再`created`钩子函数中进行DOM操作,一定要放在`Vue.nextTick()`中,因为这个钩子函数执行的时候,还没挂载到`DOM`上,获取不到DOM,而`nextTick`是在DOM更新完成之后执行的.

数据变化后要执行的某个操作,而这个操作需要使用随数据改变而改变的DOM解构的时候,这个操作都应该放进`Vue.nextTick()`的回调函数中

## 原理

