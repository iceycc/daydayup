##  起步
ssh root@xxx.xxx.xxx.xxx -p 22
1. 安装wget：`yum install wget`
2. wget下载node：`wget https://nodejs.org/dist/v12.16.2/node-v12.16.2-linux-x64.tar.xz`
3. 解压：`tar -xf xxx.zip`
4. 移动 `mv xxx xxx`
5. 添加环境变量：
   1. `vim /etc/profile`
   2. 设置
      ````
      export NODE_HOME=/root/zuo/env/node-v8.11.3-linux-x64   # { 这里填解压之后node的路径}
      export PATH=$PATH:$NODE_HOME/bin
      ````
- https://www.jianshu.com/p/9728b67a92e2
- centos6.5安装node12，解决centos下nodejs使用了ccap验证码报错version `GLIBC_2.14' not found的问题: https://segmentfault.com/a/1190000008891935

## 记录
-  Linux下查看Nginx安装目录、版本号信息?：
   -  ps  -ef | grep nginx
   -  https://www.cnblogs.com/hellowzd/p/6228144.html

