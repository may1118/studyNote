# vue-router和location.href的区别

对于**<a>**,`link`组件避免了不必要的重渲染

**只更新变化的部分从而减少DOM性能消耗**

vue-router很好的继承了虚拟DOM和diff实现了对页面的**按需更新**