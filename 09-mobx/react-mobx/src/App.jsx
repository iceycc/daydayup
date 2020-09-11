import React,{Component,lazy,Suspense} from 'react';
import {Route,BrowserRouter,HashRouter} from 'react-router-dom'
const routes = [
  {
    path:'/1',
    component:lazy(()=>import('./pages/1.mobx'))
  },
  {
    path:'/2',
    component:lazy(()=>import('./pages/2.mobx'))
  },
  {
    path:'/3',
    component:lazy(()=>import('./pages/3.observable'))
  },{
    path:'/4',
    component:lazy(()=> import('./pages/4.object'))
  },
  {
    path:'/5',
    component:lazy(()=> import('./pages/5.mutComponent'))
  },

  {
    path:'/6',
    component:lazy(()=> import('./pages/6.array'))
  },

  {
    path:'/7',
    component:lazy(()=> import('./pages/7.map'))
  },
  {
    path:'/8',
    component:lazy(()=> import('./pages/8.box'))
  },
  {
    path:'/9',
    component:lazy(()=> import('./pages/9.decorators'))
  },

  {
    path:'/10',
    component:lazy(()=> import('./pages/10.autorun'))
  },

  {
    path:'/11',
    component:lazy(()=> import('./pages/11.when'))
  },

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