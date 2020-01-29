const url = require('url');
const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');
module.exports = class{
  constructor(){
    this.context = Object.create(context);
    this.response = Object.create(response);
    this.request = Object.create(request);


    this.middlewares = []; 
  }
  use(middleware){
    this.middlewares.push(middleware);
  }
  createContext(req,res){
    let ctx = this.context;
    ctx.app = require.app = response.app = this;
    ctx.request = this.request;
    ctx.response = this.response;
    ctx.request.req = ctx.req = req;
    ctx.response.res = ctx.res = res;
    return ctx
  }
  compose(ctx){
    let index = 0;
    const dispatch=()=>{
      console.log(index)
      if(index === this.middlewares.length) return Promise.resolve('end')
      let middleware = this.middlewares[index++]
      return Promise.resolve(middleware(ctx,()=>dispatch()))
    }
    return dispatch()
  }
  handleRequest(req,res){
    let ctx = this.createContext(req,res)
    this.compose(ctx).then((data)=>{
      let _body = ctx.body
      // if(typeof _body === 'string' || Buffer.isBuffer(_body)){
      //   return res.end(_body);
      // }else if(typeof _body === 'number'){
        
      //   return res.end(_body + '');
      // }
      res.setHeader('Content-type', 'application/octet-stream');
      res.setHeader('Content-Disposition', 'attachment;filename='+encodeURIComponent('下载'));
      _body.pipe(res);
    })   
  }
  listen(){
    http.createServer(this.handleRequest.bind(this)).listen(...arguments)
  }
}