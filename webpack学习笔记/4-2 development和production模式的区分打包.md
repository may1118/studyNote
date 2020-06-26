# 4-2 development和production模式的区分打包

## development

- 开发环境是非常全的，source map能够帮助我们快速的定位到问题
  - 而production模式，可以没有必要使用一个比较全的source map
- 开发环境下的代码没有被压缩
  - production模式下一般是被压缩过的代码

## 分别打包

可以创建两个文件

```js
webpack.dev.js //开发环境下的打包配置文件
"scripts": {
    "dev": "webpack-dev-server --config webpack.dev.js"
}

webpack.prod.js // 线上模式下的打包配置文件
"script": {
    "build": "webpack --config webpack.prod.js"
}
```

但是这样，两个文件中有者大量的重复代码，我们可以将公共代码拆分出来

```js
webpack.common.js // 存放公共代码
```

```js
// webpack.dev.js 
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
    ...
}

module.exports = merge(commonConfig,devConfig);
```

