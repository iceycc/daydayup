import "reflect-metadata";
import {createConnection } from "typeorm";
import {User} from "./entity/User";

const user1 = new User()
user1.username = '四22' + new Date()
user1.password = '121212'
addUser(user1)
// removeOneById(4)
// updateUser()
findUser(1)
function findUser(id){
    createConnection().then(async connection=>{
        const userRepository = connection.getRepository(User)
        const user =  await userRepository.findOne(id)
        console.log('查询',user)
        return user
    })
}

function addUser(user){
    createConnection().then(async connection=>{
        //  创建句柄
        const userRepository = connection.getRepository(User);
        // 保存
        await userRepository.save(user);
        console.log('新增成功 id:', user.id)
    }).catch(err=>console.log(err))
}
function removeOneById (id){
    createConnection().then(async connection=>{
        // 删除数据
        // 1.创建一个句柄
        const userRepository = connection.getRepository(User);
        // 2.根据句柄去查询要删除的实体，默认根据id
        const user = await userRepository.findOne(id)
        // 3 删除数据
        await userRepository.remove(user)
        console.log('删除成功')
    }).catch(err=>console.log(err))
}
function updateUser(){
    createConnection().then(async connection=>{
        const userRepository = connection.getRepository(User);
        const user =await userRepository.findOne(5);
        user.password = '621142';
        await userRepository.save(user)
        console.log('更新成功')
    })
}