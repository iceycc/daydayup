import { createConnection, getConnection } from 'typeorm'
import { User } from './entity/User'

createConnection().then(async connection=>{
    const user = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([{username:'wang xwww',password:'1213131'}])
        .execute()
    console.log(user)
})