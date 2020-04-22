import React from 'react';
import {observer} from 'mobx-react';
import {observable, autorun} from 'mobx'

let message = observable.object({
    content:'I am xxxxxx',
    title:'标题1',
    author:{
        name:'笑笑'
    },
    likes:[
        'football',
        'basketball'
    ]
},{
})

const Content = ({message})=>{
    // let content = message.content
    // let content = message.content
    autorun(()=>{console.log('autorun - content',message.content)}) // 
    return <div>{message.content}</div>
}
const Message = observer(({message})=>{
    return <div>
        <h2>Message</h2>
        {message.title} <br/>
        {message.author.name}
    </div>
})

const Author = observer(({author})=>{
    return <div>
        <h2>Author</h2>
        {author.name}
    </div>
})
const Likse = observer(({likes})=>{
    return <>
        <h2>Likes</h2>
        <ul>
            {
                likes.map((like,index)=>{
                    return <li key={index}>{like}</li>
                })
            }
        </ul>
    </>
})

setTimeout(()=>{
    message.title = '标题更新了'
    message.content = '我是xxxxxx'
    // message.author = { name: "Susan"} // Message 更新了。但是Author没有更新
    message.author.name = 'Susan' // Message Author都更新了
},1000)

export default ()=>{
    return <div>
        <Content message={message}/>
        <Message message={message}/>
        <Author author={message.author}/>
        <Likse likes={message.likes}/>
    </div>
}