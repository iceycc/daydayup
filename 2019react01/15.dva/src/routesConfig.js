
/* import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import User from './routes/User';
import Profile from './routes/Profile';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import UserList from './routes/User/UserList';
import UserAdd from './routes/User/UserAdd'; */
export default [
    {
        path:'/',
        exact:false,
        component:()=>import('./routes/IndexPage'),
        routes:[
            {
                path:'/home',
                models:[import('./models/home')],
                component:()=>import('./routes/Home'),
                redirect:true
            },
            {
                path:'/user',
                component:()=>import('./routes/User'),
                routes:[
                    {
                        path:'/user/list',
                        component:()=>import('./routes/User/UserList')
                    },
                    {
                        path:'/user/add',
                        component:()=>import('./routes/User/UserAdd')
                    } 
                ]
            },
            {
                path:'/profile',
                auth:true,
                component:()=>import('./routes/Profile')
            },
            {
                path:'/signin',
                component:()=>import('./routes/SignIn')
            },
            {
                path:'/signup',
                component:()=>import('./routes/SignUp')
            }
        ]
    }
]