# MVC MVP MVVM

[学习博客](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

## MVC

- model：模型，数据保存
- view：视图，用户界面
- contronller：控制器，业务逻辑

![](I:\myFuture\桌面资料\面试\学习图片\MVC.png)

- view传送指令到达Controller
- Controller完成业务逻辑后，要求Model改变状态
- Model将新的数据发送到view，用户得到反馈

所有的通信都是**单向**的

## MVP

- model
- view
- persenter

![](I:\myFuture\桌面资料\面试\学习图片\MVP.png)

- 各部分之间的通信都是双向的
- view和model不发生联系，都通过Persenter传递
- view非常薄，而Persenter非常厚，所有的逻辑都部署在那里

## MVVM

![](I:\myFuture\桌面资料\面试\学习图片\MVVM.png)

- Model
- View
- ViewModel

和MVP唯一的区别就是，它采用了双向绑定：View的变动，**自动反映**到ViewModel，反之亦然