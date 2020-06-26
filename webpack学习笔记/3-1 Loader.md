# 3-1 Loader

[TOC]

## file-loader

用来打包`jpg`文件，其实就是把相关的文件进行位置的转换，并且默认会修改名字，然后将修改后的值返回给代码中引入的变量

可以处理任何**静态的资源**

```js
  module: {
    rules: [{
      test: /\.(jpg|png|txt)/,
      use: {
        loader: 'file-loader'
      }
    }]
  }
```

### 设置打包后文件名字

```js
    rules: [{
      test: /\.(jpg|png|txt)$/,
      use: {
        loader: 'file-loader',
        options: {
          // 设置打包后的名称 这些都是placeholder占位符
          name: '[name]. [ext]'
        }
      }
    }]
```

官网提供的一些占位符[占位符placeholder](https://www.webpackjs.com/loaders/file-loader/#placeholders)

### 设置打包文件夹

对于一些静态文件，需要将内容放置到某一个文件夹中

```js
  module: {
    rules: [{
      test: /\.(jpg|png|txt)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          // 将打包后的文件放置在images的文件夹中
          outputPath: 'images/'
        }
      }
    }]
  },
```



## 什么是loader

其实就是一个打包的方案，webpack本身不知道对于一些文件如何处理，但是loader知道如何处理

## url-loader

会将静态文件默认转换为base64编码，但是文件如果特别大，那么加载时间会变慢，如果比较小，使用url-loader，那么可以减少请求的次数，所以一般使用url-loader，会添加limit配置

```js
  module: {
    rules: [
      {
        test: /\.(jpg|png|txt)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            // 在2048个字节内会转换为base64编码，如果超过则使用file-loader打包
            limit: 2048,
          },
        },
      },
    ],
  },
```

