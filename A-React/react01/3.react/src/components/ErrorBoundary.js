import React,{Component} from 'react';
// 错误边界
class ErrorBoundary extends Component{
  constructor(){
        super();
        this.state = {hasErrors:false};
  }
  //此生命周期函数可以用来捕获错误和信息
  componentDidCatch(err,info){
      if(err){
        this.setState({
            hasErrors:true
        });
      }
   //Suspense 可用来实现同步网络请求并渲染
  }
  render(){
    if(this.state.hasErrors){
        return <div>子组件发生未知错误，无法正常显示</div>
    }
    return this.props.children;
  }
}
function Clock(){
    console.log(null.toString());
    return <div style={{border:'5px solid green',padding:'5px'}}>{Date.now()}</div>
}
function Counter(){
    return <div style={{border:'5px solid blue',padding:'5px'}}>计数器</div>
}
export default class Page extends Component{
    render(){
        return (
            <div style={{border:'5px solid red',padding:'5px'}}>
                page
                <ErrorBoundary>
                    <Clock/>
                </ErrorBoundary>
                <Counter/>
            </div>
           
        )
    }
}