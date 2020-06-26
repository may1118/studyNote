// ! https://juejin.im/post/5caaa230e51d452b672f9703

/*上述代码中将视图容器分为10份，font-size用十分之一的宽度来表示，最后在header标签中执行这段代码，就可以动态定义font-size的大小，从而1rem在不同的视觉容器中表示不同的大小，用rem固定单位可以实现不同容器内布局的自适应。*/
function refreshRem() {
  var docEl = doc.documentElement;
  var width = docEl.getBoundingClientRect().width;
  var rem = width / 10;
  docEl.style.fontSize = rem + 'px';
  flexible.rem = win.rem = rem;
}
win.addEventListener('resize', refreshRem);
