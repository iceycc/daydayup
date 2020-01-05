const http = require('http');
const url = require('url');

let routers = [
    {path:'*',method:'*',handle(req,res){
        res.end(`Cannot ${req.method} ${req.url}`)
    }}
]
function createApplication(){
    return {
        get(){
            this.routers.push({
                path,
                method:'get',
                handle
            })
        },
        listen(){
            http.createServer((req,res)=>{
                let {pathname} = url.parse(req.url);
                let method = req.method.toLowerCase()
                for(let i = 1;i<routers.length;i++){
                    let {path,method:m,handle} = routers[i];
                    if(pathname === path && method === m){
                       return handle(req,res)
                    }
                }
                return routers[0](req,res)
            })
            .listen(...args)
        }
    }
}

module.exports = createApplication