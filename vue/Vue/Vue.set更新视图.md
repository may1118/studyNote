# Vue.set更新视图

当Vue的data里边声明或者已经赋值过的**对象或者数组**时,向对象中添加新的属性,如果更新次属性的值,是**不会更新视图的**

- 直接赋值
- 修改长度

## 响应式新增与修改数据

**方法**:Vue.set(target,key,value)

- target：要更改的数据源(可以是对象或者数组)

- key：要更改的具体数据

- value ：重新赋的值

```js
new Vue({
    methods:{
        changeData(){
            Vue.set(this.arr,0,'x');
        }
    }
})
```

