import "reflect-metadata";
import { createConnection, Connection ,Not} from "typeorm";
import { callbackify } from "util";
import { User } from "./entity/User";


createCon(async connection => {
    // const userRepository = connection.getRepository(User);
    // const result1 = await userRepository.find();
    // console.log(result1)
    // const result2 = await userRepository.find({select:['id','username']})
    // console.log(result2)

    // 3.使用where条件查询
    // const userRepository = connection.getRepository(User);
    // const result = await userRepository.find({ where: { id: 3 } });
    // console.log(result);

    // 6.relations关系查询
    // const userRepository = connection.getRepository(User);
    // const result = await userRepository.find({ relations: ['userDetail'] })
    // console.log(result)

    // 7.使用join
    // const userRepository = connection.getRepository(User);
    // const result = await userRepository.find({
    //     join: {
    //         alias: 'user',
    //         leftJoinAndSelect: {
    //             detail: 'user.userDetail',
    //             posts: 'user.posts'
    //         }
    //     }
    // });
    // console.log(result);

    // 8、order排序查询
    // const userRepository = connection.getRepository(User);
    // const result = await userRepository.find({
    //     order: {
    //         id: 'DESC',
    //         username: 'ASC'
    //     }
    // });
    // console.log(result);


    // 9.分页查询
    // const userRepository = connection.getRepository(User);
    // const result = await userRepository.find({
    //     skip: 3,
    //     take: 3,
    // })
    // console.log(result);

    // 10.Not
    // const userRepository = connection.getRepository(User);
    // const result = await userRepository.find({
    //     username: Not('王五')
    // });
    // console.log(result);

    const userRepository = connection.getRepository(User);
    const result = await userRepository.findByIds([1,3,4]);
    console.log(result);
})


function createCon(callback) {
    createConnection().then(connection => {
        callback && callback(connection)
    }).catch(err => { console.log(err) })
}