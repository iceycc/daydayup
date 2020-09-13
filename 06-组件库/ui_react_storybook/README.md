# react storybook 组件库

## part1 
- 通过cra搭建storybook
- 安装styled-components
- 配置全局css样式
- 配置css样式模版
- eslint配置 https://eslint.org/docs/rules/
- prettier ，结合vscode的prettier插件可以做到代码自动格式 https://prettier.io/docs/en/index.html

## part2 编写第一个组件Button
- polished ： 为了在styled-components里像scss等预处理器一样写常用函数，还需要安装下polished这个库。
- 需求分析：
  - 颜色：背景颜色、边框颜色、文字颜色
  - 大小
  - loading
  - disabled
- 步骤：
  - 定义类型：颜色、大小、配置项
  - 用styled编写组件
  - 导出组件、渲染
  - 编写story文档
  - 编写jest测试用例
- 