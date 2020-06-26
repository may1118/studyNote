# 2-3 webpack正确安装方式

[TOC]

## 创建一个node项目

```shell
$ npm init -y #创建一个符合node规范的项目
```

## 安装webpack

```shell
$ npm install webpack webpack-cli -D # 也可以全局安装
```

- 全局安装：如果有的项目使用的版本不同，那么是不能跑起来的

## 打包webpack文件

`npx`能够帮助我们在项目依赖里面查找`webpack`包

```shell
$ npx webpack index.js # 打包index.js
```

