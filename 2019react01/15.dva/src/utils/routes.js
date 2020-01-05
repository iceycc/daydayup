import {Route,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic';
export function renderRoutes(routesConfig,app){
    /* return routesConfig.map(({path='/',component:Component,exact=false,routes},index)=>{
        return <Route key={index} path={path} exact={exact} render={props=><Component {...props} routes={routes}/>} />;
    });  */
    return routesConfig.map(({path='/',auth,component,models=[],exact=false,routes},index)=>{
        return (
            <Route
             path={path}
             exact={exact}
             key={index}
             component={
                dynamic({
                    app,
                    models:()=>models,
                    component:()=>{
                        if(auth && !localStorage.getItem('login')){
                            return ()=><Redirect to="/signin"/>
                        }
                        return component().then(result=>{
                            let Component = result.default||result;
                            return props=><Component {...props} routes={routes} app={app}/>
                        });
                    }
                })
             }
            />
        )
    });
}

export function renderRedirect(routes,from,exact){
    let {path} = routes.find(item=>item.redirect)||routes[0];
    return <Redirect exact={exact} from={from} to={path}/>
}