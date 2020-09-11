import React from 'react'
import {observable, autorun} from "mobx";

// var likes = observable.array([{title:'xxxx'}])
// console.log(likes.length)



//
var todos = observable([
    { title: "Spoil tea", completed: true },
    { title: "Make coffee", completed: false }
]);

autorun(() => {
    console.log("Remaining:", todos
        .filter(todo => !todo.completed)
        .map(todo => todo.title)
        .join(", ")
    );
});
// 输出: 'Remaining: Make coffee'

todos[0].completed = false;
// 输出: 'Remaining: Spoil tea, Make coffee'

todos[2] = { title: 'Take a nap', completed: false };
// 输出: 'Remaining: Spoil tea, Make coffee, Take a nap'

todos.shift();
// 输出: 'Remaining: Make coffee, Take a nap'
export default ()=>{
    return <div>6666</div>
}