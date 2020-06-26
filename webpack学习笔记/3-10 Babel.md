# 3-10 Babel

## 如何配置

按照官网的操作：[Babel官网](https://babeljs.io/)

```shell
npm install --save-dev babel-loader @babel/core
```

```js
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```

```shell
npm install @babel/preset-env --save-dev
```

```js
// .babelrc 
{
  "presets": ["@babel/preset-env"]
}
// 或者
module: {
  rules: [
    { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" ，
        options:{
        	"presets": ["@babel/preset-env"]
    	}
    }
  ]
}
```

这样，有些ES6的语法就可以转换成ES5的语法，但是，在有些低版本浏览器中还是不可行的，有些低版本浏览器还是不能识别很多种语法，所以需要不断地向下兼容

## 兼容更低版本浏览器

```shell
npm install --save @babel/polyfill
```

```js
// entry目录
require("@babel/polyfill");
import "@babel/polyfill";
```

这样，打包出来地文件中，包含了很多用来解决兼容地代码

但是，很多用来兼容地代码根本不需要在项目中使用到，这样的话，我们可以修改配置

```js
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage"
    }]
  ]
```

如何对于浏览器版本有一些特定地要求，例如需要运行在版本号大于xx地浏览器中，就可以添加配置

```js
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
      }
    ]
  ]
}
```

