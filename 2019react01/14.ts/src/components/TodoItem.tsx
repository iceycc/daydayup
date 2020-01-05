import React, { Component } from 'react'
interface IProps  {
  title:string
}
//SFC stateless functional component
const TodoItem:React.SFC<IProps> = (props:IProps)=>{
   return <li>{props.title}</li>
}
export default TodoItem;