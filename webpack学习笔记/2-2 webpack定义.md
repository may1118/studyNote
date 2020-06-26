# 2-2 webpack定义

## 模块化作用

每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。 精心编写的*模块*提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。

## 模块化定义

webpack核心定义：是一个模块打包工具，它能够识别任何模块打包的语法

不仅仅能打包`JS`文件，还能打包`css` 、`png`、`jpg`....

```js
// ESModule
import Header from 'header.js'

export default xxx
```

```js
// CommonJS
var Header = require('header.js');

module.exports = xxx;
```

...其他打包语法也能识别（CMD AMD...）