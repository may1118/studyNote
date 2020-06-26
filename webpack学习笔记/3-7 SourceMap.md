# 3-7 SourceMap

sourceMap是一个映射关系，知道dist目录下的某一行，实际上对应的是源代码的多少行

```js
  devtool: 'source-map',
```

如果开启了source-map，会多处一个`main.js.map`文件，相对应的打包时间也会延长

```js
  devtool: 'inline-source-map',
```

如果开始了inline-source-map，不会有`main.js.map`文件，原本的对应关系会被放置在打包后的文件中，以base64的关系

```js
  devtool: 'cheap-inline-source-map',
```

前面的方法会精确到某一个字符出现了问题，而这样的映射比较耗费性能，如果加上了cheap，只会告诉你在那一行出现了问题，而不会精确到某个字符。

也不会管第三方模块的错误映射，如果需要的话，可以这样配置

```js
  devtool: 'cheap-module-inline-source-map',
```

如果使用eval，是性能最快，效果最佳的一种方式

```js
  devtool: 'eval',
```

“**推荐使用的方式**”

```js
mode: 'development'  
devtool: 'cheap-module-eval-source-map',
```

如果是部署到线上

```js
mode: 'production',
devtool: 'cheap-module-source-map'
```

