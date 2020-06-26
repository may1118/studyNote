# Vue比较细碎知识点

## 让CSS只在当前组件中起作用

`<style scoped>`

## keep-alive

包裹动态组件时,会缓存不活动的组件实例,主要用作保留组件状态或避免重新渲染

## 获取DOM

通过refs

```vue
<template>
	<div ref="dom">
        getref
    </div>
</template>
<script>
	methods:{
        getDom(){
            const dom = this.$ref.dom;
            const text = dom.innerText; // getref
        }
    }
</script>
```

## key的作用

相同的标签名的元素切换时,需要通过key特性设置唯一的值来标记让Vue区分他们,否则,Vue为了效率值替换相同标签内部的内容

主要用在Vue的虚拟DOM算法,在新旧nodes对比时识别vnodes,如果不适用key,vue会使用一种最大限度减少动态元素并且经可能的查实修复/再利用相同元素的算法,使用key,他会基于key的变化重新排列元素的顺序,并且会移除key不存在的元素

## v-if和v-for的优先级

**v-for**的优先级比**v-if**的优先级高

## assets和static的区别

**static**中的文件是完全不被`webpack`处理的,他们被以相同的文件名直接复制进最终目录.需要使用**绝对路径**去引用

**src/assets**中放置的文件希望被`webpack`处理的,他们可能被重新命名复制进最终目标.使用**相对路径**引用他们

## Vue的两个核心点

- 响应式数据绑定系统
- 组件系统

## delete和Vue.delete删除数组的区别

**delete**只是被删除的元素变成了empty/undefined,其他的元素的加值还是不变

**Vue.delete**直接删除了数组,改变了数组的键值

## 强制刷新组件

```js
this.$forceUpdate()
```

