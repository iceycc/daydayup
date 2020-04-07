import React from 'react'
function Child(props){
  console.log(props.children)
  console.log(React.Children.map(props.children,c=>c))
  return React.Children.map(props.children,c=>[c,c])
}
class Com1 extends React.Component{
  handleClick1() {
    console.log('this is:', this);
  }
  handleClick2 = () => {
      console.log('this is:', this);
  }
  render() {
      //onClick={this.handleClick.bind(this)
      return (
         <>
         <button onClick={(event) => this.handleClick1(event)}>
         Click1 me
      </button>
      <button onClick={(event) => this.handleClick2(event)}>
      Click2 me
      </button> 
         </>
      );
  }
}
export default()=>{
  return <React.Fragment>
  <Child>
    <p>11</p>
    <p>22</p>
  </Child>
  <Com1></Com1>
  </React.Fragment>
}