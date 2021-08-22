import React from 'react';
import {observable,decorate,computed,action, observe} from 'mobx';
import { observer } from 'mobx-react';
const author = 'Wang'
class Person {
    name = 'Tom'
    age = 19
    showAge = false
    author = author
    get labelText(){
        return this.showAge ? `${this.name}(age:${this.age})`: this.name
    }
    setAge(age){
        this.age = age;
    }
}

decorate(Person,{
    name:observable,
    age:observable,
    showAge:observable,
    labelText:computed,
    setAge:action,
    author:observable.ref
})


const p = new Person()

setTimeout(()=>{
    p.setAge('33')
    console.log(p.author)
},1000)
export default observer(() =>{
    return <>
        <h3>{p.name}</h3>
        <p>{p.age}</p>
    </>
})