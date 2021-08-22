# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command


## 同步数据
- 我们每次修改实体类的时候先后运行命令
```shell
npm run generate
npm run db
```