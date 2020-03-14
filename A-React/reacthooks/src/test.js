import React from 'react'
function Child(props){
  console.log(props.children)
  console.log(React.Children.map(props.children,c=>c))
  return React.Children.map(props.children,c=>[c,c])
}
export default()=>{
  return <React.Fragment>
  <Child>
    <p>11</p>
    <p>22</p>
  </Child>
  
  </React.Fragment>
}