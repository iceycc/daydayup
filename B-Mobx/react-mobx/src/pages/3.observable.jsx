import React from 'react'
import {observer} from 'mobx-react'
import {observable,computed} from 'mobx'

// storec
const person = observable({
    firstName: "Clive Staples",
    lastName: "Lewis",
    age:1
})
setTimeout(()=>{
    console.log(person.age)
    person.age ++ 
},1000)
class OrderLine {
    @observable price = 3
    @observable amount = 20
    @computed get total(){
        return this.price * this.amount
    }
}
const store = new OrderLine()


export default observer(()=>{
    return <div>
        {person.firstName}:{person.age} <br/>
        {store.total}
    </div>
})