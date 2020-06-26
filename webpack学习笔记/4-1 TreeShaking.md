# 4-1 TreeShaking

`TreeShaking`只支持ESModule模块地引入（静态引入地方法，`import` `export`）

## 在开发环境下

（开发环境下是，尽管没有某个模块，但是打包还是一样的打包，如果是上线`production`，那么有关代码就不会被打包）

```js
mode: 'development',
// 如果是production环境下，可以忽略下面的配置
optimization: {
    usedExports: true
},    
```

在package.json中添加，对于一些文件可能会有副作用，像`@babel/pollly-fill`，虽然没有相关代码，但是打包的时候可能直接被忽略掉了，实际上我们是需要的，所以需要加上如下配置

```js
// 一般情况下可以让TreeShaking不打包没有使用的文件
"sideEffects":false,
// 特殊形况不能忽略
"sideEffects":['@babel/pollly-fill'],
```

