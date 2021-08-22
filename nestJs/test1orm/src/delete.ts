import { createConnection, getConnection} from 'typeorm'
import { User } from './entity/User'

createConnection().then(async connection=>{
    const user = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where('id=:id',{id:21})
        .execute()

    console.log(user)
})