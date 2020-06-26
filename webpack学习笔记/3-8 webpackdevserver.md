# 3-8 webpackdevserver

修改package.json的配置，这样可以帮我们动态监听代码的变化

```js
  "scripts": {
    "watch": "webpack --watch"
  },
```

## webpack-dev-server

会自动地打开一个服务，并且会自动地进行有关刷新

```js
// 设置打开的文件夹
devServer: {
  contentBase: './dist',
},
```

配置了这个选项，那么打开服务地时候，会自动地打开服务器，不需要自己手动打开链接

```js
  devServer: {
    contentBase: './dist',
    open: true,
  },
```

也可以用来跨域

```js
  devServer: {
    contentBase: './dist',
    open: true,
    proxy: {
      '/api': 'http://example.com',
    },
```