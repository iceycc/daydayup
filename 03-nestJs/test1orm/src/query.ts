import { createConnection, getConnection } from 'typeorm'
import { User } from './entity/User'
import { Posts } from './entity/Posts'
import { UserExtend } from './entity/UserExtend'

// createConnection().then(async connection=>{
//     const user = await getConnection()
//         .createQueryBuilder()
//         .select(['user.id','user.username'])
//         .from(User,'user')
//         .where('user.id=:id',[{id:1}])
//         .getOne()
//     console.log(user)
// })

createConnection().then(async connection => {
    // const user = await getConnection()
    //     .createQueryBuilder(User, 'user')
    //     .select(['user.id', 'user.username'])
    //     .where('(user.id=:id)', { id: 5 })
    //     .getMany()

    // console.log(user)

    // 创建关系查询
    // const result = await getConnection()
    //     .createQueryBuilder(User, 'user')
    //     // 第一个参数是定义字段,第二个实体类,第三个是别名,第四个是条件
    //     .leftJoinAndMapMany('user.posts', Posts, 'posts', 'user.id=posts.userId')
    //     .leftJoinAndMapMany('user.userDetail', UserExtend, 'userDetail', 'user.id=userDetail.userId')
    //     .getMany();
    // console.log(result);

    let username = '人造人'
    const result = await getConnection()
        .createQueryBuilder(User, 'user')
        .select(['user.id','user.username'])
        .where('user.username like :username',{username:`%${username}%`})
        .where('user.username IN (:...username)',{username:['人造人088','人造人714']})
        .getMany();
    console.log(result);
})


