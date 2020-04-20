

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