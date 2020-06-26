# 3-6 Entry和Output配置

## Entry

打包的入口文件

设置多个入口文件

```js
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
```



## Output

打包的出口文件

多个入口文件，必定对应多个出口文件，其中的占位符是根据Entry前面key的命名来的

```js
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
```

如果对文件进行引入的时候需要加入一些前缀，例如：有时需要将JS文件放到CDN上，需要加上对应的前缀

```js
  output: {
    filename: '[name].js',
    // 这个配置
    publicPath: 'http://cdn.com',
    path: path.resolve(__dirname, 'dist'),
  },
```

