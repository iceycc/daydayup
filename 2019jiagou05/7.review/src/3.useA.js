// let r = require('./a');
// console.log(r); // 多次应用代码 会被缓存起来，下次直接拿到的是缓存后的结果
// console.log(r);

// 模块的分类
// 1 自己写的模块 require('../') 绝对路径 文件模块
// 2 核心模块 require('fs') 没有路径 不用安装
// 3 第三方模块 需要安装 用法和核心模块是一样的,会去当前目录下查找

// 第三方模块的查找规则：node_modules
// 先着包 package.json 找不到才会找index.js
// 会像上级查找  每个node 版本会有差异
// 路径 modules.paths // 
// 名字和文件夹相同 会找文件 ，
// 如果没文件找文件夹，默认找index,
// 如果写了ackage.json => main 找不到报错
require('./a');


// babel 可以将import export 用在node上 babel-node


// npm init -y
// package.json 下的 
// script脚本的执行顺序：
// 默认找 node_modules .bin 下的文件
// npx 也可以直接执行 .bin 目录下的目录
// npx mime a.js // 先找.bin下，没有的话会临时安装包 并执行，执行玩会直接删除.用完一次就删除
// 类比全局安装，命令行任何位置执行

// #! /usr/bin/env node






// 周五 buffer fs 递归文件
// 周六 vuex
// 周日 stream , http 基础 

// http 应用 周末 koa 原理 
// jwt cookie session 周日 express 原理


// mongo redis
// webpack  一周
// react 
