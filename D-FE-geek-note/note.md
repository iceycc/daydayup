# 建立知识体系
参考链接
- https://www.w3.org/
- https://www.w3schools.com/
- https://whatwg.org/
- https://scholar.google.com/
- https://developer.mozilla.org/
- https://docs.microsoft.com/
- https://developer.apple.com/

作业：
- 把面向对象这个概念用追溯法写一篇博文，写在自己的博客中，例如：博客园、稀土、掘金等，不限平台；你也可以写到 GitHub 的 Issues 里。把链接发到班级群里，跟大家分享。（不作为日常作业统计）
- 把预习内容的前端目录整理出来，和 winter 老师课件里的脑图或者课程目录做对比，思考一下为什么会有差别？

讲师提到的名词：
- QCon：全球软件开发大会（ https://qcon.infoq.cn/2020/beijing/）
- Closure：闭包（ https://en.wikipedia.org/wiki/Closure_(computer_programming) ）

笔记:

- 前端技能模型
  - 领域知识：实践中学习
  - 前端知识：建立知识体系 （重学前端/前端训练营）
  - -------------- 刻意训练/前端训练营
    - 编程能力：难。刻意训练
    - 架构能力：大、复杂系统、管理。读源代码，参与开源项目
    - 工程能力: 人。

建立知识体系！！杂乱的架子收拾起来

顺序关系：
- 编译
  - 词法分析
  - 语法分析
  - 代码优化 ast
  - 代码生成 ast

组合关系
- css规则
  - 选择器
  - 属性
  - 值

纬度关系 
- JavaScript
  - 文法
    - 词法
    - 语法
  - 语义
  - 运行时

分类关系
- css简单选择器
  - id选择器
  - class
  - 通用
  - 属性
  - 元素
  - 伪类
  - 伪元素


学习方法：

案例法
- 案例法的案例教学
  - html：
    - 网址：
      - 权威性：
        - [w3](https://www.w3.org/TR/)
        - [whatwg](https://whatwg.org/)
          - [html](https://html.spec.whatwg.org/multipage/)
      - 文档类：mdn

追溯法：
- 案例
  - 面向对象的概念
    - OOP。small talk，Lisp。 Alan Kay
  - Closure：闭包
  - MVC  
- 线索：
  - 源头
    - 最早的论文杂志
  - 标准和文档
    - w3.org
    - msdn
    - developer.mozilla.org
    - developer.apple.com
  - 大师
    - Tim Li

面试相关
- 什么是好的面试题？
  - 区分度：好的打的好，中等的打的中等好，不好的打的不好。
  - 深度：高级
  - 覆盖面：范围
- 面试过程
  - 打断
    - 不意味着不感兴趣
    - 可能是一种提示
  - 争论
    - 争论与压力面试
    - 争论的技巧
  - 难题
    - 展现分析过程
    - 缩小规模 

题目类型
- 项目型问题
- 知识型问题
- 开发性问题
- 案例性问题
- 有趣的问题
  
议论文三要素：
- 论点
- 论据
- 论证

拓展
- 通配符/贪心算法



# 2.重学｜构建知识体系 （0409） 
随堂作业：
- 把课上老师的脑图里的这些实体补全
- 你能不能在 ECMA 中找到所有的类型（Type）

参考链接：

主要参考网站：
- https://www.ecma-international.org/
- https://developer.mozilla.org/en-US/docs/Web
- https://whatwg.org/

课上涉及网址：
- https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
- https://www.w3school.com.cn/html/html_entities.asp
- https://www.w3.org/1999/xhtml/
- https://html.spec.whatwg.org/multipage/
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

参考文件：

请学员们在课件中查看（链接: https://pan.baidu.com/s/1ET3y5eexynf6xJKpNwHMRw 密码:nepb）
- 前端技术 2.xmind
- ECMA-262.pdf
- html-standard.pdf

参考名词：
- XMind：思维导图软件（ https://www.xmind.cn/）
- DTD：Document Type Definition（ https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd）
- Entity：实体（在 HTML 语境下就是 & 符后边的东西）
- ARIA：Accessible Rich Internet Applications（ https://www.w3.org/TR/html-aria/）
- Token：有效的输入元素
- Comment：注释
- WhiteSpace：空白符
- Line Terminator：行终止符
- Atom：原子
- Semantics：语义
- Runtime：运行时

其他有助于你理解的知识（选看）：
- 计算机组成原理
- 操作系统
- 编译原理
- 学员给出的课上参考代码：`Array.prototype.map.call($0.querySelectorAll(‘code’), e => e.innerText).join(’\n’)`


笔记
1. ecma 262 pdf下载：


## week3
1. 相关链接
   1. https://getemoji.com/
   2. http://www.fileformat.info/info/unicode/block/index.htm
   3. https://www.fileformat.info/info/unicode/block/basic_latin/list.htm
   4. https://home.unicode.org/
2. cjk 中文等
3. asccII
4. bmp 
5. home.unicode.io
6.  编码规范：限制在asccII范围，限制在bmp范围， 可以\u5433
7.  '\u'
8.  windows回车：\r\n 
9.  whiteSpace
   1. `<TAB> `
   2. `<VT> `
   3. `<FF> `
   4. `<SP>` 
   5. `<NBSP> `
   6. `<BOM>` 
   7. `<USP>`
   8. whiteSpace
      1. '\t' tab制表符
      2. '\n' 换行符
      3. '\r'
      4. <TAB>
10. LineTerminator : 换行
    1.  LF
11. Comment
12. Token
    1. IdentifierName
       1. keywords
       2. Identifier
       3. Future reserved keywords ：enum
    2. Punctuator
    3. Literal 
       1. NumericLiteral 
          1. 进制
       2. StringLiteral
          1. character
             1. ASCII
             2. Unicode：
                1. utf8   utf-8ma
                2. utf16
             3. UCS U+0000 - U+FFFF  / BMP
             4. GB
                1. GB23112
                2. GBK(GB13000)
                3. GB18030
             5. ISO-8859
             6. BIG5
          2. Grammar
             1. "abc"
             2. 'abc'
             3. `abc`
13. get不是关键词
14. undefined是全局变量，在全局不可修改，但是在函数中可以修改。
15. 关于“回车”（carriage return）和“换行”（line feed）这两个概念的来历和区别。在计算机还没有出现之前，有一种叫做电传打字机（Teletype Model 33）的玩意，每秒钟可以打10个字符。但是它有一个问题，就是打完一行换行的时候，要用去0.2秒，正好可以打两个字符。要是在这0.2秒里面，又有新的字符传过来，那么这个字符将丢失。于是，研制人员想了个办法解决这个问题，就是在每行后面加两个表示结束的字符。一个叫做“回车”，告诉打字机把打印头定位在左边界；另一个叫做“换行”，告诉打字机把纸向下移一行。这就是“换行”和“回车”的来历，从它们的英语名字上也可以看出一二。
16. 0.1 + 0.2 = 0.3?
17. 进制 paseInt('100',2)
    1.  八进制 0o11
    2.  二进制 0b011
    3.  十六进制: 0x100
18.特殊字符
   - \n
   - \t
   - \r
   - \f
   - \b
   - \"
   - \'
   - \\
18.作业：
   1. 写一个正则 匹配所有Number直接量
   2. function 