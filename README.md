#task2:零基础HTML及CSS编码（一)  
[task2作品](http://s.codepen.io/zhoupipipipipipi/debug/JXNbRK)
####任务目的:
*针对设计稿样式进行合理的HTML架构，包括以下但不限于：  
*掌握常用HTML标签的含义、用法  
*能够基于设计稿来合理规划HTML文档结构  
*理解语义化，合理地使用HTML标签来构建页面  
*掌握基本的CSS编码，包括以下但不限于：  
*了解CSS的定义、概念、发展简史  
*掌握CSS选择器的含义和用法  
*实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单布局等样式的定义方式
####总结:  
1.关于label的使用：要使它右对齐外面应该有一个div  
2.导航记得要用到float：left
#task3:三栏式布局
[task3作品](http://s.codepen.io/zhoupipipipipipi/debug/pyPNNB)
####任务目的:
*使用 HTML 与 CSS 按照 示例图（点击查看） 实现三栏式布局。 *左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度。
####总结:
1.浏览器自适应，定义左边logo为float：left，右边log为float：right，让中间内容高度和宽度auto，这样就可以让浏览器自适应
#task4:定位和居中问题
[task4作品](http://s.codepen.io/zhoupipipipipipi/debug/WwjoRL)
####任务目的:
*实现如 示例图（点击打开） 的效果  
*灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角。
####总结:
1.关于position:relative absolute fixed,  
relative 相对；absolute 绝对 一般要设置一个为relative，不然元素会相对于页面主体定位；fixed：固定  
2.清除浮动：overflow：hidden  
3.垂直居中：要设置父元素的position为relative，子元素为absolute，top为50%，margin-top:-npx(为本身高度的50%，减去)  
4.水平居中：同上  
5.要是整个html界面不动，要设置  
`*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
    width: 100%;
    overflow: hidden;
}`
#task5:零基础HTML及CSS编码（二）
[task5作品](http://s.codepen.io/zhoupipipipipipi/debug/MypWGQ)
####任务目的:  
*基于第一个任务“零基础HTML编码”的代码，参考 示例图（点击查看），在步骤一的代码基础上增加CSS样式代码的编写  *头部和底部的黑色区域始终是100%宽  
*页面右侧部分为固定宽度，左侧保持与浏览器窗口变化同步自适应变化  
*左侧的各个模块里面的内容宽度跟随左侧整体宽度同步自适应变化  *10张图片需要永远都完整展现，所以会随着宽度变窄，从两行变成三行甚至更多，也有可能随着宽度变宽，变成一行
####总结:
1.overflow:auto 可以让div的高出现，内容被剪切，则浏览器会显示滚动条  
  hidden 内容被剪切，其余内容不可见   
  scroll 显示滚动条 不管内容有没有被剪切  
2.img设置百分比可以根据浏览器自适应  
3.footer用了relative可以在底部，可能是头部用了absolute  
4.分栏问题，右边固定，用float：right,左边要设置margin-right  
5.small要设置margin，外面要加个div  
6.自适应要让高度和宽度为auto 或者宽度为100%  
7.css3 @media screen and (max-width:XXpx){css-code}  
使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。  
@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。  当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。
####队友建议
1.目前Task5存在的问题
## float引起的高度塌陷问题，有若干解决办法
[http://blog.useasp.net/archive/2012/06/12/when-we-use-div-and-css-how-to-make-parent-container-div-to-self-adaption-with-subcontainer-height.aspx](http://blog.useasp.net/archive/2012/06/12/when-we-use-div-and-css-how-to-make-parent-container-div-to-self-adaption-with-subcontainer-height.aspx)  
通常情况下，absolute还是少用比较好
## 段首缩进
段首缩进可以用更加"优雅"的办法`text-indent: 20px`
## label的问题
在`form`中，`label`和`input`,`checkbox`的搭配使用，也是比较重要的，可以参见这个
[http://bbs.blueidea.com/thread-2711834-1-1.html](http://bbs.blueidea.com/thread-2711834-1-1.html)
#task6：通过HTML及CSS模拟报纸排版
[task6作品](http://s.codepen.io/zhoupipipipipipi/debug/JXWgJg)
####任务目的:  
*参考 PDS设计稿（点击下载），实现页面开发，要求实现效果与 样例（点击查看） 基本一致 *头部和底部的黑色区域始终是100%宽  
*页面中的各字体大小，内外边距等可参看 标注图（点击查看）
*页面宽度固定（定宽）
####总结:
1.要让颜色覆盖在图片上时，或者字体覆盖在图片上时，应该使用position：absolute；生成绝对定位的元素，相对于 static   定位以外的第一个父元素进行定位。  
2.clear:both;在css中，首先我们理解一下clear，顾名思义就是清除的意思，both的意思是全部，那连起来就是清除全部样式，不过这个样式主要是用于对多个div浮动的清除，如float:left,如果不清除，很容易对下面的div造成显示错位  
3.三角形那个我不会弄！！css三角形  
#task8：响应式网格（栅格化）布局
[task8作品](http://s.codepen.io/zhoupipipipipipi/debug/xVdxya)
####任务目的:  
*使用 HTML 与 CSS 实现类似 BootStrap 的响应式 12 栏网格布局，根据屏幕宽度，元素占的栏数不同。
####总结:
1.由于之前用过bootstrap，所以以为会比较容易，结果还是有很多点没有考虑到
2.关于宽度，刚开始一直不知道怎么将margin包含在width里面，看了别人的笔记，知道了css3中calc和box-sizing  
  [CSS3的calc的使用](http://www.w3cplus.com/css3/how-to-use-css3-calc-function.html)  
  改为双层样式，即外层控制宽度、高度，内层控制border样式、margin样式；然后width=calc(100%-20px);20px=(padding*2);
#task10：Flexbox 布局练习
[task10作品](http://s.codepen.io/zhoupipipipipipi/debug/MymZoG)
####任务目的:  
*学习如何flex进行布局，学习如何根据屏幕宽度调整布局策略。
####总结:
1.第一次接触flexbox，很好用，可以用来做多栏，以下是一些要点  
2.flexbox 布局模块 有主轴(main)和侧轴(cross)，用display:flex实现  
3.flex-flow：flex-direction(项目方向：row,row-reverse,column,column-reverse)，flex-wrap(是否拆行或拆列:nowrap,wrap,wrap-reverse)  
4.justify-content 适用于父容器，横轴方向对齐方式 flex-start,flex-end,center,space-around,space-between  
5.align-content:侧轴全部内容，同上  
6.align-items:适用于父容器，单个项目，同上  
7.order:<number>控制出现的顺序  
8.flex-frow:<number>控制伸缩扩展多少
#task11：移动Web页面布局实践
[task11作品](http://s.codepen.io/zhoupipipipipipi/debug/jqwavW)
####任务目的:  
*进行移动开发时的HTML及CSS实践  
*掌握移动Web开发在页面架构和布局的方法及差异性  
*掌握移动Web开发页面调试的方法
####总结:
1.手机端 meta 强制让文档的宽度与与设备的宽度保持：1：1，并且文档的最大宽度为1，且不允许用户点击屏幕放大  
  `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">`  
2.flexbox的使用，但是要考虑兼容性 [使用Flexbox：新旧语法混用实现最佳浏览器兼容](http://www.w3cplus.com/css3/using-flexbox.html)  
3.行内元素没有margin-top，margin-bottom
#task13：零基础JavaScript编码（一）
[task13作品](http://codepen.io/zhoupipipipipipi/pen/mPBQvK)  
#task14：零基础JavaScript编码（二）
[task14作品](http://codepen.io/zhoupipipipipipi/pen/KzXrEP)
####任务目的:  
*在上一任务基础上继续JavaScript的体验  
*学习JavaScript中的if判断语法，for循环语法  
*学习JavaScript中的数组对象  
*学习如何读取、处理数据，并动态创建、修改DOM中的内容
####总结:
1.二维数组的运用   
http://zhidao.baidu.com/link?url=eaVMODp-81l7s5n6M0XBftetUZIF8LVC6xC3AefqTpBvoiBA4MRaeuuUB_A3vF5InHksUx2bsbeyjpDInsph0q  
2.动态添加ul里面的li http://www.liangshunet.com/ca/201408/336848696.htm  
3.遍历整个数组，冒泡排序  
#task15：零基础JavaScript编码（三）
[task15作品](http://codepen.io/zhoupipipipipipi/pen/pyWQYo)
####任务目的:  
*在上一任务基础上继续JavaScript的体验  
*接触一下JavaScript中的高级选择器  
*学习JavaScript中的数组对象遍历、读写、排序等操作  
*学习简单的字符串处理操作
####总结:
1.要比较数组里面数的大小，应该是数字类型，不然就得强制转换 parseInt();  
2.获取元素的内容，用innnerHTML  
3.获取元素内容的一部分，可以用substring(startnum,stopnum)  http://www.w3school.com.cn/jsref/jsref_substring.asp  
4.如果在函数中调用另外一个函数的数值，记得return  
5.var data=new Array(new Array(),new Array());    //定义二维数组  
6.获取有多少个li，应该用li.length,而不是ul.length  
7.在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数  
document.getElementById('sort-btn').onclick=function(){btnHandle()};  
#task16：零基础JavaScript编码（四）
[task16作品](http://s.codepen.io/zhoupipipipipipi/debug/JXMGpr)
####任务目的:  
*在上一任务基础上继续JavaScript的体验  
*深入学习JavaScript的事件机制及DOM操作  
*学习事件代理机制  
*学习简单的表单验证功能  
*学习外部加载JavaScript文件
####总结:
1.去掉左右空格  
`function strim(str){
    return str.replace(/(^\s*)|(\s*$)/g,'');
}`  
然后直接调用函数strim就可以了。  
2.判断是否为中文，用正则表达式   
`var reg=new RegExp("[\\u4E00-\\u9FFF]+","g");
    if(!reg.test(last_city)){       //判断输入的是否为汉字
        alert("请输入汉字");
        return;
}`  
3.判断是否为数字，isNaN（）
4.如果在函数中调用另外一个函数的数值，记得return  
5.停止js操作，用return 
6.添加新的一行inserRow（）  
7.parentNode 属性以 Node 对象的形式返回指定节点的父节点。如果指定节点没有父节点，则返回 null。  
8.remove() 方法用于从下拉列表删除选项。  
9.selectedIndex 属性可设置或返回下拉列表中被选选项的索引号。  
#task17：零基础JavaScript编码（五）
[task17作品](http://s.codepen.io/zhoupipipipipipi/debug/reJVod)
####任务目的:  
*在上一任务基础上继续JavaScript的体验  
*接触更加复杂的表单对象  
*实现页面上的一个完整交互功能  
*用DOM实现一个柱状图图表
####总结:  
虽然上面写着是基础编码，但是我还是觉得很难，刚开始完全不知道从那里入手，看了好多人的代码，慢慢思考理解，加入自己的想法，终于搞定了这个任务。只要搞懂了里面的东西，就相当于我掌握了
1.getMonth()，取得的范围为0-11，所以获得月份的时候应该是getMonth（）+1  
2.关于Math的各种方法，Math.ceil:返回的是大于或等于函数参数，并且与之最接近的整数。Math.random:随机选取大于等于 0.0 且小于 1.0 的伪随机 double；Math.round:四舍五入  
3.渲染图表，匿名函数 var childWidth=function(){...}();  
4.使用for..in循环遍历对象属性 有优点也有缺点 http://www.jb51.net/article/43119.htm  
5.addEventListener() 方法用于向指定元素添加事件句柄。在点击radio和select时调用这个事件，有三个参数：事件本身（目标），触发事件时调用的函数（监听器），以及用来指定事件被捕获（true）还是冒泡（false）的布尔值（可选）。  
6.最难的是初始化图表需要的数据格式，分为日周月
#task18：基础JavaScript练习（一）
[task18作品](http://s.codepen.io/zhoupipipipipipi/debug/YqLdJp)
####任务目的:  
*学习与实践JavaScript的基本语法、语言特性  
*初步了解JavaScript的事件是什么  
*初步了解JavaScript中的DOM是什么
####总结:
1.看了别人的代码，感觉我实现的太简单了，只用了4个onclick就完成了  
2.元素和节点的区别，一个元素肯定是一个节点，但是一个节点不一定是一个元素  
3.firstChild第一个子元素 lastChild最后一个子元素 appendChild() 方法向节点添加最后一个子节点 childNodes 子节点  
#task19：基础JavaScript练习（二）  
[task19作品](http://s.codepen.io/zhoupipipipipipi/debug/RaJoYy)
####任务目的:  
*学习与实践JavaScript的基本语法、语言特性  
*练习使用JavaScript实现简单的排序算法
####总结:
1.本来想用快速排序的，后来还是用了冒泡排序    
2.shift()和pop()从一个数组的最前面和最后面删除一个值  
3.unshift()和push()向数组的开头和末尾添加一个值  
#task20：基础JavaScript练习（三）  
[task20作品](http://s.codepen.io/zhoupipipipipipi/debug/JXZZbX)
####任务目的:  
*实践JavaScript数组、字符串相关操作  
####总结:
1.indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置，  
JS判断字符串包含的方法http://www.3lian.com/edu/2015/05-05/210131.html      
2.split用于将字符串分割，chartData=value.split(/\n|\s|[,]|[，]|[.]/);   //判断分隔符  
3.`function trim(str){
//删除左右两端的空格
   return str.replace(/(^\s*)|(\s*$)/g, "");
}`
#task21：基础JavaScript练习（四）  
[task20作品](http://s.codepen.io/zhoupipipipipipi/debug/eZKaqZ)
####任务目的:  
*学习与实践JavaScript的基本语法、语言特性  
*练习使用JavaScript实现拖拽功能 
####总结:
1.鼠标事件 onmouseover 和 onmouseout事件可用于在鼠标指针移动到或离开元素时触发函数。onmousedown、onmouseup事件是鼠标点击的全部过程。首先当某个鼠标按钮被点击时，触发 onmousedown 事件，然后，当鼠标按钮被松开时，会触发 onmouseup 事件。  
2.键盘事件 onkeydown 事件会在用户按下一个键盘按键时发生。要考虑兼容性，但是我还没来得及考虑。  
keyCode 空格=32 回车=13 逗号=188，但是输入逗号的时候出现个bug，还没修改  
3.splice splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。splice(i,n)——i是从第几个数字开始，n是删除n个数  

