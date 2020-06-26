# 3-5 plugins

## HtmlWebpackPlugin作用

（在打包之后运行

会在打包结束后自动生成一个`HTML`文件，并把打包生成的JS自动引入到这个HTML文件中

```js
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
```

`HtmlWebpackPlugin`可以接收一个模板，这个模块可以写一些我们需要配置的基本内容

## CleanWebpackPlugin作用

（在打包之前运行，会删除指定的文件夹

```js
new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['dist']
}),
```



## plugins作用

很像生命周期函数，会在webpack运行的某个时刻帮助我们做一些事情