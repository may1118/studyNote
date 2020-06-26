# 2-5 webpack输出内容

```js
module.exports = {
  // 默认的打包模式是production（打包后的代码已经压缩了）
  // 如果不想被压缩：mode: "development"
  mode: "production",
  entry: {
    // 入口文件也可以写成这个样子
    main: "./src/index.js"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  }
}
```

