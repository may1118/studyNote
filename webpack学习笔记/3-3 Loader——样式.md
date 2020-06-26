# 3-3 Loader——样式

[TOC]

```js
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
},
```

webpack中，loader是有先后顺序的，从下到上、从右到左

## css-loader

作用：分析出CSS文件之间的关系，然后合并成一段CSS

## style-loader

作用：将css-loader合并生成的CSS样式挂载到head中

## 如果需要引入SCSS

```shell
npm install sass-loader node-sass webpack --save-dev
```

```js
{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
},
```

## 如何安装node-sass

- 首先全局安装cnpm（之后就可以直接使用cnpm了），然后再安装node-sass

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -D node-sass
```

## 自动添加浏览器厂商前缀

需要安装`postcss-loader`

然后配置一个plugins

```js
// postcss.config.js
module.exports = {
  plugins: [require('autoprefixer')],
};
```

## 对于一些模块需要多进行一些打包过程

对于一些文件（例如sass文件，在js中引入了一个sass文件，而sass文件里面又引入了一个sass文件

按照流程，第一个文件会进行有关后缀的从下到上、从左到右的打包，但是sass里面又引入的sass文件，只会进行css-loader和style-loader的打包流程，这样是不符合的，为了解决，需要添加配置

```js
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            // 这个数字代表需要多进行几步的打包
            importLoaders: 2
          }
        }, 'sass-loader', 'postcss-loader'],
      },
```

## CSS模块化打包

对于一些样式是全局的样式，但是有些内容，我们不需要全局引用，就需要开启CSS模块化打包

```js
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            module: true,
            importLoaders: 2
          }
        }, 'sass-loader', 'postcss-loader'],
      },
```

然后对于一些样式，也不能直接应用了，而是一种模块化的应用

```js
import style from './index.scss';

img.classList.add(style.avatar);
```

## 打包字体

简单的一个file-loader即可

```js
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'iconfont'
          }
        }
      }
```

