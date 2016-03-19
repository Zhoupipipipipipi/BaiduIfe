<html>
<body>
<h4><strong>task2:零基础HTML及CSS编码（一）</strong></h4><br/>
<h5>任务目的:</h5>
针对设计稿样式进行合理的HTML架构，包括以下但不限于：<br/>
掌握常用HTML标签的含义、用法<br/>
能够基于设计稿来合理规划HTML文档结构<br/>
理解语义化，合理地使用HTML标签来构建页面<br/>
掌握基本的CSS编码，包括以下但不限于：<br/>
了解CSS的定义、概念、发展简史<br/>
掌握CSS选择器的含义和用法<br/>
实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单布局等样式的定义方式<br/>
<h5>总结:</h5>
关于label的使用：要使它右对齐外面应该有一个div<br/>
导航记得要用到float：left<br/><br/><br/>
<h4><strong>task3:三栏式布局</strong></h4><br/>
<h5>任务目的:</h5>
使用 HTML 与 CSS 按照 示例图（点击查看） 实现三栏式布局。<br/>
左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度。
<h5>总结:</h5>
浏览器自适应，定义左边logo为float：left，右边log为float：right，让中间内容高度和宽度auto，这样就可以让浏览器自适应<br/><br/>
<h4><strong>task4:定位和居中问题</strong></h4><br/>
<h5>任务目的:</h5>
实现如 示例图（点击打开） 的效果<br/>
灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角。<br/>
<h5>总结:</h5>
关于position:relative absolute fixed,<br/>
relative 相对；absolute 绝对 一般要设置一个为relative，不然元素会相对于页面主体定位；fixed：固定<br/>
清除浮动：overflow：hidden<br/>
垂直居中：要设置父元素的position为relative，子元素为absolute，top为50%，margin-top:-npx(为本身高度的50%，减去)</br>
水平居中：同上<br/>
要是整个html界面不动，要设置
<code>*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
    width: 100%;
    overflow: hidden;
}</code><br>
<h4><strong>task5:零基础HTML及CSS编码（二）</strong></h4>
<strong><a href="http://codepen.io/zhoupipipipipipi/full/MypWGQ/">http://codepen.io/zhoupipipipipipi/full/MypWGQ/</a></strong><br/>
<h5>任务目的:</h5><br/>
基于第一个任务“零基础HTML编码”的代码，参考 示例图（点击查看），在步骤一的代码基础上增加CSS样式代码的编写<br/>
头部和底部的黑色区域始终是100%宽<br/>
页面右侧部分为固定宽度，左侧保持与浏览器窗口变化同步自适应变化<br/>
左侧的各个模块里面的内容宽度跟随左侧整体宽度同步自适应变化<br/>
10张图片需要永远都完整展现，所以会随着宽度变窄，从两行变成三行甚至更多，也有可能随着宽度变宽，变成一行<br/>
<h5>总结:</h5>
1.overflow:auto 可以让div的高出现，内容被剪切，则浏览器会显示滚动条<br/>
  hidden 内容被剪切，其余内容不可见 <br/>
  scroll 显示滚动条 不管内容有没有被剪切<br/>
2.img设置百分比可以根据浏览器自适应<br/>
3.footer用了relative可以在底部，可能是头部用了absolute<br/>
4.分栏问题，右边固定，用float：right,左边要设置margin-right<br/>
5.small要设置margin，外面要加个div<br/>
6.自适应要让高度和宽度为auto 或者宽度为100%<br/>
7.css3 @media screen and (max-width:XXpx){css-code}<br/>
使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。<br/>
@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。<br/>
当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。<br/>

</body>
</html>
