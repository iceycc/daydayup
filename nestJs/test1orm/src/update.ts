import { createConnection, getConnection } from 'typeorm'
import { User } from './entity/User'


createConnection().then(async connection=>{
    const user = await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({username:'hhh1aa'})
        .where('id=:id',{id:2})
        .execute()
    console.log(user)
})