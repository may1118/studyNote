# es6新增内容

[TOC]

## let 和 const

- 没有变量提升
- 暂时性死区
- 块级作用域

## 解构赋值

- 数组的解构赋值

  - ```js
    let [a, b, c] = [1, 2, 3];
    let [a = 666, ...b] = [1, 2, 3];
    ```

- 对象的解构赋值

  - ```js
    let {a, b} = {
        a: 123,
        b: 456
    };
    ```

- 字符串的解构赋值

  - ```js
    const [a, b, c, d] = 'hello';
    ```

- 数值和布尔值的解构赋值

- 函数参数的解构赋值

  - ```js
    function add([x, y]){}
    add([1,2]);
    
    function move([x, y]){}
    move({x: 10,y: 20});
    ```

- 字符串的扩展

## 模板字符串

  - 遍历的接口（可以使用for...of循环遍历）

  - includes()\startsWith()\endsWith()

    - ```js
      s = 'hello world';
      s.includes('hello'); // true
      s.startsWith('hello') // true
      s.endsWith('world'); // true
      ```

  - repeat()

    - ```js
      'x'.repeat(3) //xxx
      ```

  - padStart()\padEnd()

    - ```js
      'x'.padStart(5,'ab'); //ababx;
      'x'.padEnd(5,'abab'); //xabab;
      ```

## 函数扩展

  - 函数的默认值参数

  - rest参数

    - ```js
      function add(a, ...b){
          // a = 1;
          // b = [2, 3];
      }
      add(1, 2, 3);
      ```

## 箭头函数

## 数组扩展

- 扩展运算符（spread）

  - ```js
    // rest参数的逆运算
    console.log(...[1, 2, 3]); // 1 2 3
    ```

- Array.from()

  - 将伪数组和可遍历的数组转换成真正的数组

  - ```js
    Array.from(new Set([1, 2, 3])); // [1, 2, 3]
    Array.from({
        a: 1,
        b: 2,
        c: 3,
        length: 3
    }); // [1, 2, 3]
    ```

    

- Array.of()

  - 将一组值转换为数组

  - ```js
    Array.of(1, 2, 3) // [1, 2, 3]
    ```

- entries()\keys()\values()

  - entries [index, item]
  - keys  index
  - values item

- includes()

## 对象扩展
  - Object.is()
  - Object.assign()
  - Object.keys()\Object.entries()\Object.values()
##  Symbol
  - Symbol.for()
  - Symbol.keyFor()
## Set Map

  - WeakSet\WeakMap
## Proxy
## Promise
## async await
## for...of Iterator