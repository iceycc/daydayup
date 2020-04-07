3.30 
1. ~~新人入职指南~~
2. ~~双师小课/nvue调研~~
3. 算法训练 x 1
4. python 1
5. 熟悉报表业务：
   1. http://gitlab.zhugexuetang.cn/middle-front/finance-pc
   2. 13804061463 888666
6. 会议记录：薪酬工作
   1. 薪酬工作的例会
   2. 轻型目录访问协议 Ldap Lightweight Directory Access Protocol
   3. cto cfo


3.31
1. 教师薪酬开发 （https://duanjin.doushen.com/wiki/#/team/351m4Jax/space/PbRUZyfp/page/NfuDGDzG）
   1. 主要数据表整理 * 3 ：	冯海宁 3.31下午对接
   2. 辅助数据表堵截 * 2 ： 张颐鑫 周四对接
   3. 辅助数据表堵截 * 2 ： 韩天 
      1. 新增全国/地方双师课程信息表:
      2. 课节作业提交率信息表
2. 今日记录
   1. > 纯碎对算法使用上。后端用到的场景和机会都要比前端多的多。
        > 事实上， javascript 本身既支持面向对象，又支持函数式。js相比java 较为松散自由。这使得前端代码 反而更加依赖设计模式。，再者前端不比后端，前端面向UI行为封装，后端更多面向数据封装。这本身对高复用的代码组织的要求要更高一些。当前端应用进一步庞大的时候，前端开发很容易写出不可维护的代码。 这时候设计模式就显得更加重要了。
        > 另一方面，由于前端 一些特定独有的场景 比如 一些组件状态的管理，路由历史管理 等等，反而对一些基础的数据结构 用到的比较多 比如 栈，队列 等等。 一些高质量的封装，可以充分被调用在应用的各个地方。
        > 当然 目前前端开发的三大框架 以及webpack， babel 在原理的实现上，确实用到了不少 算法的知识。
        > 比如react实现 用到了 diff算法，fiber架构的调度。 
        > babel  webpack 到了抽象语法树的层面，这些依赖 编译原理的知识。
    1. > p7就是工作中更主动，能提出更多建议，落实。并不是技术比6更好
        我第一次薪资double，是因为老板叫我过去说，最近上个月我组里大家平均写了一万行代码，你怎么写了10w行你是咋做到的
        你保证你产出比同事多一倍你很快就升了，但是怎么才能多一倍呢？vim，算法，搞起来。书看起来。周末用起来
        原本排一天，只要半天
        p7就是自己能创造支线任务。p8就是自己能创造主线任务。

4.1
1. 思考🤔
   1. 构思一套基于 PaaS(平台即服务) + SaaS(软件即服务) 的应用开发模式，NA研发提供底层的基础功能+各开放能力的PaaS层，并集成一套小程序开发框架，前端同学用小程序框架开发应用，在PaaS之上开发端能力，能同时兼容微信小程序及App，开发一处能同时在两地运行，并行开发。
   2. NA同学重点维护PaaS能力，提供核心和重点功能的开发。
   3. FE同学重点在开发业务功能，提供页面功能的开发
2. 云计算的三部分
   1. 基础设施 infrastructure
      1. 网络系统 networking
      2. 存储设备 storage
      3. 服务器 servers
      4. 虚拟化技术 virtualization
   2. 平台 platform
      1. 操作系统 OS
      2. 中间价 middleware
      3. 运行库 runtime
   3. 软件 software
      1. 数据 date
      2. 应用 application
3. 云计算的三个分层
   1. Infrastructure-as-a-Service(IaaS)：基础设施在最末端
   2. Platform-as-a-Service(PaaS):平台在中间
      1. 提供开发和分发应用的解决方案
   3. Software-as-a-Seervice(SaaS):软件在顶层
      1. 用户接触的最多，网络上任意一个远程服务器上的应用都属于SaaS
   4. 本地部署（On-Premises）
   5. IaaS、PaaS和SaaS就是云服务提供的三种层次，最基础的是IaaS，中间的为PaaS，最后直观呈现出来的是SaaS。
4. 参考
   1. https://www.cnblogs.com/yf2196717/p/11929000.html
   2. http://www.ruanyifeng.com/blog/2017/07/iaas-paas-saas.html
5. 记录
   1. PM: Product Manager 产品经理 / PM（Project Manager） 项目主管或项目经理
   2. RD: Research and Development engineer，研发工程师
   3. QA: Quality Assurance，品质保证。QA的主要职责就是质量保证工作。
   4. OP: Operator，操作员，管理员。




4.2 
1. 说个具体场景吧，之前做C端产品。有段if else 语句  大约有16个else 。
直接拿函数式重构了， 优化掉了嵌套的 if else。 
后来，仔细看了一下。发现是该产品 的一组  不同的状态处理逻辑。
遂改成 用状态模式 重构， 一来oop的代码好读，方便其他开发者清晰看明白。二来，大家看到状态模式，一眼便知道是啥了。便于理解



4.7 
1. serverless
2. Paas 
3. Saas
4. amis
 https://duanjin.doushen.com/wiki/#/team/351m4Jax/space/KP2Frkts/page/7ForA2jV
 https://baidu.github.io/amis/docs/getting-started
 https://fex-team.github.io/amis-editor/#/hello-world
 https://baidu.github.io/amis/docs/api 

