import React from 'react';
import {observer,Observer} from 'mobx-react';
import {observable,autorun,action} from 'mobx';



var person = observable(
    {
        // observable properties:
        name: "John",
        age: 42,
        showAge: false,
        hi:'hello',
        // computed property:
        get labelText() {
            return this.showAge ? `${this.name} (age: ${this.age})` : this.name
        },
        get textName(){
            return this.hi
        },
        setAge(age) {
            this.age = age
        }
    },
    {
        setAge: action
    }
)

// object properties don't expose an 'observe' method,
// but don't worry, 'mobx.autorun' is even more powerful
autorun(() => console.log('name',person.hi)) // person.hi改变就会触发 reactions

person.name = "Dave"
person.hi = "hi222"
// prints: 'Dave'

person.setAge(21)
// etc

person.name = "wbu"
person.age = 33


/**
 * const 时一层监听，不会触发。
 */

// var message = observable({ title: "hello" })
const message = observable({ title: "hello",likes:[1,2,3] })

autorun(() => {
    console.log('const----',message.likes.join())
})


// 不会触发重新运行
// message.title = "Hello world"


message.likes.push(4)



const twitterUrls = observable.map({
    "John": "twitter.com/johnny"
})

autorun(() => {
    console.log(twitterUrls.get("Sara"))
})
twitterUrls.set("Sara", "twitter.com/horsejs")


const message2 = {
    author:{
        name:"cxccccćč"
    }
}
function upperCaseAuthorName(author) {
    const baseName = author.name;
    return baseName.toUpperCase();
}
autorun(() => {
    console.log(upperCaseAuthorName(message2.author))
})


message2.author.name = "Chesterton"



/**
 * message3--------------------------------------+
 */
const message3 = observable({
    title:1
})
// autorun(()=>console.log('33333',message3.title))
function TestCom(props){
    return <props.title></props.title>
}
setTimeout(()=>{
    message3.title = 2
})
const MyCom = observer(({message3})=>{
    const ms3 = message3
    return <>
        <TestCom title={()=><Observer>{()=><div>{message3.title}</div>}</Observer>}/>
        <TestCom title={()=><div>{message3.title}</div>}/>
        {/* <p>{ms3.title}</p> */}
        <button onClick={()=>{message3.title++}}>onClick</button>
    </>
})

export default function(){
    return <MyCom message3={message3}/>    
}