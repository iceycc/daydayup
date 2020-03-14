### 注册全局包
1. npm init -y 初始化一个package.json
2. bin设置 ./bin/www
```js
#! /usr/bin/env node
// yargs(webpack) commander(tj)
const program = require("commander");
program
  .option("-p, --port <type>", "set port")
  .option("-c, --cwd <type>", "set directory");
let opts = program.parse(process.argv);
let Server = require("../static-server.js");
let server = new Server({
  port: 3000,
  // 获取用户的工作目录 process.cwd()
  cwd: process.cwd(),
  ...opts
});
server.start(); // 启动服务
```

3. 设置bin命令
```json
  "bin": {
    "my-server": "./bin/www.js"
  },
```

4. npm link 挂载全局

5. npm unlink 取消
