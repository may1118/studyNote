# BFC

含义：`Block Formatting Contexts` 块级元素格式上下文

触发条件：

- `float`不为`none`
- `overflow`不为`visible`
- `display`为`table-cell`   `table-caption` `   inline-block` `flex` `inline-flex` 
- `position`不为`static`  `releative`

BFC布局规则

- 浮动的元素会被父级计算高度
- 非浮动的元素不会浮动元素位置
- margin不会传递给父级
- 两个相邻元素上下`margin`会重叠（给其中一个父元素增加一个父级，然后让父级触发`BFC`）