## RBAC

## 相关资料
- 慕课网课程：https://www.imooc.com/learn/799
- 代码：https://github.com/apanly/mooc
- http://www.zhufengpeixun.cn/2020/html/92.rbac.html
- http://www.javascriptpeixun.cn/my/course/169  RBAC
- 彻底删除mac中的mysql：https://www.jianshu.com/p/276c1271ae14
- Navicat连接MySQL Server8.0版本时出现Client does not support authentication protocol requested by server；
  - https://blog.csdn.net/zhangjing0320/article/details/91045149
  - use mysql;
  - alter user 'root'@'localhost' identified with mysql_native_password by '********';
  - flush privileges;
- root wby123456

## 什么是RBAC？
基于角色的权限访问控制（Role-Based Access Control）
- 用户user - 角色role - 权限permission
- 用户角色 user_role
- 角色权限 role_permission

## 表设计 
- mysql创建数据库rbac:
  - urf8mb4
- 查看 EL图表
  - 模型
  - 添加表以及字段
    - user: id / userName / password
    - role: id / name /desc
    - permission: id / name / parent_id / icon / key / type
    - user_role: user_id / role_id
    - role_permission:



## 问题
- umi是什么？
  - umi：roadhog + 路由
  - roadhog = webpack可配置的 webpack crate-react-app
  - 新的ssr框架 比next厉害
- uuid 
- 数据库的密码一般都不是明文，怎么加密：crypty.createHash / hmac / bcrptjs
- RPC remote process call


## eggJs + ts
### mysql
- 安装
- 配置
- ts类型拓展

### 登陆鉴权
- egg-passport
- npm i --save egg-passport
- npm i --save egg-passport-local
- 启用插件
- 主要ts类型拓展
- app.js声明周期的configDidLoad插入鉴权
- 路由添加鉴权的中间件

## 前端 umi
- yarn global add create-umi 