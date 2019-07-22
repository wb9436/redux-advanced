HTML
DOCTYPE（文档类型）的作用是什么？

参考https://witcher42.github.io/2014/05/28/doctype/

浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？

产生的历史原因是啥？
怪异模式有哪些怪异的行为？
使用 data- 属性的好处是什么？

可以去实践下data-*的使用啦

如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？

研究下HTML5的所有模块

cookies、sessionStorage 和 localStorage 的区别

请解释 <script>、<script async> 和 <script defer> 的区别。

为什么通常推荐将 CSS <link> 放置在 <head></head> 之间，而将 JS <script> 放置在 </body> 之前？你知道有哪些例外吗？

什么是渐进式渲染 (progressive rendering)？

HTML 和 XHTML 有什么区别？

HMTL5新标签

CSS
CSS 中类 (class) 和 ID 的区别

请问 "resetting" 和 "normalizing" CSS 之间的区别？你会如何选择，为什么？

https://github.com/necolas/normalize.css

https://github.com/shannonmoeller/reset-css/blob/master/reset.css

请解释浮动 (Floats) 及其工作原理

这个非常重要，前面读的书上有这个，一定要完全搞懂。

清除浮动

重要

描述z-index和叠加上下文是如何形成的？

重要，书上有，先理解。然后我推荐两个文章

https://www.w3cplus.com/css/what-no-one-told-you-about-z-index.html

http://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/

请描述 BFC(Block Formatting Context) 及其如何工作？

理解BFC的特性及如何触发BFC

CSS sprites

优点，缺点

图片替换文字方案

你会如何解决特定浏览器的样式问题？

如何为有功能限制的浏览器提供网页？

渐进增强，优雅降级等等等等

有哪些的隐藏内容的方法？

栅格系统 (grid system)

你用过媒体查询，或针对移动端的布局CSS 吗？

如何优化网页的打印样式？

在书写高效 CSS 时会有哪些问题需要考虑？

使用 CSS 预处理器的优缺点有哪些？

如果设计中使用了非标准的字体，你该如何去实现？

请解释浏览器是如何判断元素是否匹配某个 CSS 选择器？

请描述伪元素 (pseudo-elements) 及其用途

伪元素，伪类等等都去研究下

请解释你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局

请罗列出你所知道的 display 属性的全部值

请解释 inline 和 inline-block 的区别

请解释 relative、fixed、absolute 和 static 元素的区别

请问你有尝试过 CSS Flexbox 或者 Grid 标准规格吗

flex很重要，每个属性都要知道。建议去读阮一峰的flex文章

为什么响应式设计 (responsive design) 和自适应设计 (adaptive design) 不同？

你有兼容 retina 屏幕的经历吗？如果有，在什么地方使用了何种技术？

移动端开发必须知道！

请问为何要使用 translate() 而非 absolute position，或反之的理由？为什么？

如果实现一个高性能的CSS动画效果？

IFC

css3动画

各种属性熟悉下

布局之：左边定宽，右边自适应

圣杯布局，双飞翼布局

实现垂直居中和水平居中

Javascript
事件代理

请解释 JavaScript 中 this 是如何工作的

javascript继承

这个不多说，十分十分重要。建议按照《高程三》的继承那里，仔细理解哦。

javascript模块化

理解模块化发展过程，理解 commonJS，AMD，CMD，ES6模块化

IIFE 立即执行函数

null undefined区别

闭包 与 作用域

非常重要，书上有！

匿名函数

你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？

宿主对象 (host objects) 和原生对象 (native objects)

请指出以下代码的区别：function Person(){}、var person = Person()、var person = new Person()？

apply call bind

深入到源码如何实现这三个功能的。

new

源码如何实现的？

document.write()

特性检测 特性推断 UA字符串嗅探

Ajax工作原理

着重理解XMLHttpRequest！！

跨域

图片ping, JSONP, CORS。

这是面试必问的点。注意一定要完全理解，完全！

变量声明提升

冒泡机制

attribute 和 property

document load 和 document DOMContentLoaded

非常重要哦

== 和 === 有什么不同

同源策略 (same-origin policy)

Cookie，iframe，AJAX同源

strict模式

为何通常会认为保留网站现有的全局作用域 (global scope) 不去改变它，是较好的选择

为何你会使用 load 之类的事件 (event)？此事件有缺点吗？你是否知道其他替代品，以及为何使用它们？

请解释什么是单页应用 (single page app), 以及如何使其对搜索引擎友好 (SEO-friendly)

相当重要

Promise

怎么用？源码如何实现的？

推荐文章：xieranmaya/blog#3

使用一种可以编译成 JavaScript 的语言来写 JavaScript 代码有哪些优缺点？

javascript调试工具

对象遍历 和 数组遍历

可变对象和不可变对象

什么是事件循环 (event loop)

非常重要，面试必问。

深入原理，宏任务，微任务等等

let var const

数组的方法

web worker

柯里化

创建对象的三种方法

深拷贝和浅拷贝

可以实现手写深拷贝

图片懒加载

咋实现的？

网页各种高度

这个好难记，我也没记住~

实现页面加载进度条

箭头函数ES5如何实现

箭头函数和普通函数的区别
React
虚拟DOM是啥？以及diff算法原理

react 事件绑定

生命周期

函数式编程，纯函数

React创建组件的方式

组件性能优化

shuouldComponentUpdate

pureComponent

不可变数据

key

等等优化方法，每一点的优点和缺点

如何设计一个好组件

哪里进行网络请求？为什么

调用setState之后发生了什么

refs

react16新特性

尤其理解time slice和suspense

在 React 当中 Element 和 Component 有何区别

容器组件和展示组件

props.children

路由实现原理

react的setState同步还是异步？

Redux，react-redux等原理

如何实现异步网络请求的？

组件间通信

高阶组件是什么和常见的高阶组件

React key是干嘛的？

webpack
loader

自己如何写一个loader

plugin

自己如何写一个plugin

webpack原理之普通打包

webpack原理之多文件打包

webpack原理之提取公共文件

webpack 如何做到 tree shaking

webpack配置文件基本概念

webpack构建流程

前端模块化的理解

打包很慢，怎么解决？

打包出来的文件很大，怎么解决？

安全问题
xss
csrf
等等....
HTTP
为什么传统上利用多个域名来提供网站资源会更有效

Long-Polling、Websockets 和 Server-Sent Event

常见的请求头和响应头

和缓存有关的HTTP首部字段

相当重要。如何应用的？

HTTP method

HTTP状态码

https 加密过程

http2新特性

性能
你会用什么工具来查找代码中的性能问题？

增强网站的页面滚动效能

重排，重绘，合成

相当相当重要

合成层

我在这里理解了一个多星期，静下心来去理解。

http://taobaofed.org/blog/2016/04/25/performance-composite/

前端优化方法

css3动画和js动画对比

其他问题
常见排序算法
babel原理
实现一个幻灯片功能
你最近遇到过什么技术挑战？你是如何解决的？
浏览器输入网址后做了什么？
项目
面试问的最多的，除了基础知道，就是项目了。

必须对自己做的项目，有十足的掌握。做项目的时候，有主人翁意识~

项目业务理解，性能优化等等~
