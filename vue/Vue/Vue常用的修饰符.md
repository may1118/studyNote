# Vue常用的修饰符

## 修饰符

- .lazy

  - ```js
    <input v-model.lazy="msg" />
    ```

  - 使用**change**事件进行同步

  - 不会立即监听input value的改变,会在input失去焦点后,才会触发input value的改变

- .number

  - ```js
    <input v-model.number="age" type="number">
    ```

  - 自动将用户输入的值转为数值类型

- .trim

  - 自动过滤用户输入的首位空白字符

## 事件修饰符

- .stop

  - ```js
    <input @change.stop="handleChange">
    ```

  - 阻止事件冒泡,等同于JavaScript中的**event.stopPropagation()**

- .prevent

  - 阻止执行预设的行为,等同于JavaScript中的**event.preventDefault()**

- .capture

  - addEventListener()中第三个参数为true,(默认是false),在捕获阶段中监听事件

- .self

  - 只触发自己范围内的事件,不包含子元素

- .once

  - 只执行一次

- .passive

  - 告诉浏览器你**不想阻止**事件的默认行为,能够提升移动端的性能

- 事件修饰符可以串联

  - ```html
    <a @click.stop.prevent="doThis"></a>
    ```

## 键盘修饰符

在`Vue`中允许v-on在监听键盘事件时添加关键修饰符.记住所有的keyCode比较困难,所以Vue为最常用的键盘事件提供了别名:

- .enter:回车键
- .tab:制表键
- .delete:汉delete 的backspace键
- .esc:返回键
- .space:空格键
- .up:向上键
- .down:向下键
- .left:向左键
- .right:向右键

```Vue
<input v-on:keyup.enter="submit"/>
```

