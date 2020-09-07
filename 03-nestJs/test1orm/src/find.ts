import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { callbackify } from "util";
import { User } from "./entity/User";


createCon(async connection => {
    // const userRepository = connection.getRepository(User);
    // const result1 = await userRepository.find();
    // console.log(result1)
    // const result2 = await userRepository.find({select:['id','username']})
    // console.log(result2)

    // 3.使用where条件查询
    const userRepository = connection.getRepository(User);
    const result = await userRepository.find({ where: { id: 3 } });
    console.log(result);
})


function createCon(callback) {
    createConnection().then(connection => {
        callback && callback(connection)
    }).catch(err => { console.log(err) })
}