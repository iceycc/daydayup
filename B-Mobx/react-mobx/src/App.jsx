import React,{Component,lazy,Suspense} from 'react';
import {Route,BrowserRouter,HashRouter} from 'react-router-dom'
const routes = [
  {
    path:'/mobx1',
    component:lazy(()=>import('./pages/1.mobx'))
  },
  {
    path:'/mobx2',
    component:lazy(()=>import('./pages/2.mobx'))
  },
  {
    path:'/obser3',
    component:lazy(()=>import('./pages/3.observable'))
  },{
    path:'/4-object',
    component:lazy(()=> import('./pages/4.object'))
  }
]
export default class extends Component{
  render(){
    return <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
            {
              routes.map(item=>{
                return <Route path={item.path} component={item.component} key={item.path}/>
              })
            }
          </BrowserRouter>
      </Suspense>
  }
}