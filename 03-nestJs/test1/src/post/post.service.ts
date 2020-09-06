import { Injectable } from '@nestjs/common';
let posts = [
    {id:1,title:'post1',author:"ww",desc:'x1111111'},
    {id:2,title:'post2',author:"ww",desc:'x222'},
    {id:3,title:'post3',author:"ww",desc:'x1331111'},
    {id:4,title:'post4',author:"ww",desc:'4411111'},
    {id:5,title:'post5',author:"ww",desc:'555511111'},
]
let index = 5
@Injectable()
export class PostService {
    addPost(post){
        console.log('addPost',post)
        post.id =  index++
        posts.push(post)
        post = []
        return posts
    }

    getPostList(){
        // console.log('getPostList',posts)
        return posts
    }
    
    delPost(id){
        console.log(id)
        let index = posts.findIndex(item=>item.id == id)
        console.log('delPost',index)
        posts.splice(index,1)
        console.log(posts)
        return posts
    }
}
