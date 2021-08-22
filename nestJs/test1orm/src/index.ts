import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { UserExtend } from "./entity/UserExtend";
import { Posts } from './entity/Posts'
import { Tags } from './entity/Tags'
let date: string = (new Date()).getTime() + ''
let num = date!.substring(date.length - 3)
const user = new User()

user.username = '人造人' + num
user.password = 'pass' + num
const userExtend = new UserExtend()
userExtend.mobile = '1341234' + num;
userExtend.address = '中国';
userExtend.user = user
// createConnect() // 连接
// for(let i=1;i<10;i++){
    // addUser(user,userExtend) //新增user
// }
// removeOneById(4) // 删除user
// updateUser(id) // 更新uer
// findUser(3) // 查找user
// findAll() // 全部查询
addPost();
// addTags()
function createConnect(callback) {
    createConnection().then(async connection => {
        callback && callback(connection)
    })
}
function findAll() {
    createConnection().then(async connection => {
        // 使用relations关联查询数据(正向查找)
        const userRepository = connection.getRepository(User);
        // userDetail就是当前表中定义的字段
        const result = await userRepository.find({ relations: ['userDetail'] })
        console.log(result);
    }).catch(error => console.log(error));
}

function findUser(id) {
    createConnection().then(async connection => {
        const userRepository = connection.getRepository(User)
        const user = await userRepository.findOne(id, { relations: ['userDetail'] })
        console.log('查询', user)
        return user
    })
}

function addUser(user, userExtend) {
    createConnection().then(async connection => {
        //  创建句柄
        const userRepository = connection.getRepository(User);
        await userRepository.save(user);
        console.log('新增成功 id:', user.id)

        const userExtendPepository = connection.getRepository(UserExtend)
        await userExtendPepository.save(userExtend)
        console.log('新增成功 id:', userExtend.id)

    }).catch(err => console.log(err))
}
function removeOneById(id) {
    createConnection().then(async connection => {
        // 删除数据
        // 1.创建一个句柄
        const userRepository = connection.getRepository(User);
        // 2.根据句柄去查询要删除的实体，默认根据id
        const user = await userRepository.findOne(id)
        // 3 删除数据
        await userRepository.remove(user)
        console.log('删除成功')
    }).catch(err => console.log(err))
}
function updateUser() {
    createConnection().then(async connection => {
        const userRepository = connection.getRepository(User);
        const user = await userRepository.findOne(5);
        user.password = '621142';
        await userRepository.save(user)
        console.log('更新成功')
    })
}

function addPost() {
    // 帖子一
    createConnect(async connection => {
        // 帖子一
        const posts1 = new Posts();
        posts1.title = '文章一'+num;
        posts1.content = '文章一内容'+num;

        // 帖子二
        const posts2 = new Posts();
        posts2.title = '文章二'+num;
        posts2.content = '文章二内容'+num;

        // 创建一个用户
        const user = new User();
        user.username = 'wang '+num;
        user.password = '123456';
        user.posts = [posts1, posts2];

        const userExtend = new UserExtend()
        userExtend.mobile = '1341234' + num;
        userExtend.address = '中国';
        userExtend.user = user

        const userRepository = connection.getRepository(User);
        const postsRepository = connection.getRepository(Posts);
        const userExtendPepository = connection.getRepository(UserExtend);
        await postsRepository.save(posts1);
        await postsRepository.save(posts2);
        await userRepository.save(user);
        await userExtendPepository.save(userExtend)

        console.log('添加数据成功');
    })
}

function addTags() {
    createConnect(async connection => {
        // 创建tag1
        const tag1 = new Tags();
        tag1.name = 'mysql';

        // 创建tag2
        const tag2 = new Tags();
        tag2.name = 'node';

        // 帖子一
        const posts1 = new Posts();
        posts1.title = '文章一';
        posts1.content = '文章一内容';
        posts1.tags = [tag1, tag2];

        // 帖子二
        const posts2 = new Posts();
        posts2.title = '文章二';
        posts2.content = '文章二内容';
        posts2.tags = [tag1];

        // 创建一个用户
        const user = new User();
        user.username = '王五';
        user.password = '123456';
        user.posts = [posts1, posts2];


        const userRepository = connection.getRepository(User);
        const postsRepository = connection.getRepository(Posts);
        const tagRepository = connection.getRepository(Tags);
        await tagRepository.save(tag1);
        await tagRepository.save(tag2);

        await postsRepository.save(posts1);
        await postsRepository.save(posts2);
        await userRepository.save(user);
        console.log('添加数据成功');
    })
}