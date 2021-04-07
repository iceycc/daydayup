import {Route} from 'react-router-dom';
import Redirect from 'umi/redirect';
//component render children other path
export default ({render,...others})=>{
    return <Route {...others}  render={
        props=>localStorage.getItem('login')?render(props):<Redirect to="/login"/>
    }/>
}