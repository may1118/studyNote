# 整理TS的面试题

## void 和 undefined 有什么区别？

`void`表示：它表示没有任何类型，一般是函数不需要返回值就将返回类型设置为`void`

声明一个`void`类型没什么作用，只能赋值为`undefined`和`null`

```js
let vo1: void = undefined;
let vo2: void = null;
```

`undefined`的变量只能赋值为`undefined`



`null`：定义了一个变量，赋值为空

`undefined`：定义了一个变量，没有赋值就会为`undefined`

## 什么是 never 类型？

如果一个函数无法完整运行完成，无法运行到终点

## 下面代码会不会报错？怎么解决？

```js
const obj = {
    a: 1,
    b: 'string',
};
  
obj.c = null;
```

```js
// 解决方法1
interface Obj {
  a: number;
  b: string;
  c?: null;//c?: void;
}
// 解决方法2
interface Obj {
  [proName: string]: any;
}

const obj: Obj = {
  a: 1,
  b: 'string'
};

obj.c = null;
```



## readonly 和 const 有什么区别？

`readonly`用于属性、别名

`const`用于变量

```js
interface READONLY {
  readonly a: Object;
}

let a: READONLY = {
  a: { a: 1 }
};
// 出错
a.a = { a: 2 };

const a = { a: 1 };
// 不会报错
a.a = 2;
```



## 下面代码中，foo 的类型应该如何声明

```js
function foo (a: number) {
    return a + 1;
}
 
foo.bar = 123;
```



```js
let foo = {};
for (let i = 0; i< 100; i++) {
    foo[String(i)] = i;
}
```

## 实现 MyInterface

```js
interface MyInterface {
    ...
}
class Bar implements MyInterface {
    constructor(public name: string) {}
}
class Foo implements MyInterface {
    constructor(public name: string) {}
}
  
function myfn(Klass: MyInterface, name: string) {
    return new Klass(name);
}
  
myfn(Bar);
myfn(Foo);
```

## 什么是 Abstract Class？

## 什么是 class mixin, 如何实现？

## typeof 关键词有什么用？

## keyof 关键词有什么用？

## 下面代码中，foo 的类型如何声明

```js
function fn(value: number): string {
    return String(value);
}
const foo = fn;
```

## 下面代码会导致 TS 编译失败，如何修改 getValue 的类型声明

