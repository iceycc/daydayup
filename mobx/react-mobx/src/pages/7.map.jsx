import React from 'react';
import {observable} from 'mobx'

let myMap = observable.map()
myMap.set('key1','Tom1')
myMap.set('key2','Tom2')
myMap.set('key3','Tom3')
myMap.set('key4','Tom4')

console.log(myMap.get('key1'))


for(let key of myMap.keys()){
    console.log(key)
}
for(let val of myMap.values()){
    console.log(val)
}

myMap.forEach((key,value)=>{
    console.log(key+':'+value)
})
console.log(myMap.toJS())
console.log(myMap.toJSON())
myMap.intercept()
export default ()=>{
    return <div>
        7777
    </div>
}