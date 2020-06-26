### 作者:马小跳      时间:2019-7-25睡不着的凌晨
#### 总结以下undefined 和 null的区别和联系
首先聊一下undefined,学过多门语言的都知道,在这么多种语言里面,都存在null这么一个值的,但是只有JavaScript有undefined,这是因为在最初设计语言的时候,开发者也只设计了null,但是在使用过程中发现一些错误的产生并不是空指针的问题,所以在后面的时间里面就引入了一个有区别与null的值,那就是undefined.

undefined与null的相同点:
- 都只有一个值
- 参与判断的时候都返回false
- 没有方法

undefined与null的不同点:
- undefined不是关键字,null是关键字

- typeof null //Object

  typeof undefined //undefined

其实typeof null最后面的结果是Object是JavaScript在设计过程中的一个Bug,因为JavaScript在设计过程中判定是对象的依据是其转换成二进制前三位是0,而null本来就代表的是空指针嘛,自然而然地满足了这个要求,所以判断null类型就是Object;

undefined是window对象,可以打开控制台输入window,把打印地内容拉到最下面,会发现有一个undefined,这说明undefined是window地对象,所以在判断值地时候尽量少去使用undefined地值去判断,因为在全局去查找会影响程序地性能,如果需要的话,可以利用undefined不是关键字地特点,直接var undefined;
- undefined 表示没有初始化

  null 表示初始化了,只是初始化的值是一个空指针
- Number(undefined) // NaN

  Number(null) //0
  
具体使用:
- 申明变量需要赋值地时候,不知道赋成什么,那就赋成null
- 判断值是否存在,"===" -->undefined
    
  判断值是否为空,"===" -->null
- undefined == null //true
其实打开控制台打印一下,会发现undefined == false/undefined == true都返回false,null == false/null == true也都返回false,但是就是在判断undefined == null,返回true,我找遍资料也没有明确的说明为什么就是这样,后来才发现,js在判断地时候,就将这一条规则列在了最开始,就是如果判断undefined==null,直接返回true