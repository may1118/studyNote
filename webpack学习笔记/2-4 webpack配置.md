# 2-4 webpack配置

[TOC]

如果没有的话，就会使用默认配置文件，如果需要更改配置，需要添加一个"**webpack.config.js**"

## 打包流程

当使用`npx webpack`的时候，并不知道如何去打包，那么会去寻找是否含有"**webpack.config.js**"文件，如果有则按照相关的配置文件进行打包，如果没有就会按照默认的配置

如果设置的配置文件是其他名称

```shell
$ npx webpack --config setfilename
```

## 基本配置讲解

```js
const path = require('path');

module.exports = {
  // 入口文件
  entry: "./index.js",
  // 出口文件
  output: {
    // 设置出口文件名称
    filename: 'bundle.js',
    // 设置文件夹名称，需要使用绝对路径
    path: path.resolve(__dirname, 'bundle')
  }
}
```

## 简化打包命令

需要添加打包命令，可以在`package.json`文件中，添加

```js
  "scripts": {
    "start": "webpack"
  }
```

那么需要打包的时候，直接使用`npm run start`即可

（如果工程中有webpack，直接使用项目中的webpack，就不需要使用npx去寻找了）

## webpack-cli作用

能够让我们在命令行中正确的运行webpack命令