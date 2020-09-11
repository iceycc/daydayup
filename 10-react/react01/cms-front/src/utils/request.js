import fetch from 'dva/fetch';
const BASE_URL = 'http://127.0.0.1:7001';

export default function(url,options={}){
   options.method = options.method||'GET';
   options.headers = options.headers||{};
   options.headers['Content-Type']='application/json';//指定请求体的类型
   options.headers['Accept']='application/json';//告诉服务器我需要json
   options.credentials = 'include';//跨域传递cookie ,因为默认不传送
   return fetch(BASE_URL+url,options).then(res=>res.json());
}
