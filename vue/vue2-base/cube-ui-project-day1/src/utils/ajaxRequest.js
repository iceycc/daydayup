import axios from 'axios'; // 基于promise
import {
  Toast
} from 'cube-ui'
// axios可以配配置拦截器 我可以给实例增加多个拦截器
// axios 实例的唯一性 ，我可以给，每个请求 独立增加拦截器

// 开发的时候 localhost  /xxx
class AjaxRequest {
  constructor() {
    // development production
    this.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api' :
      '/'; // 基础路径
    this.timeout = 3000; // 超时时间
    this.toast = Toast.$create({
      txt: '正在加载',
      time: 0
    });
    this.queue = {}
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => { // 请求拦截
      // 显示loading
      if (Object.keys(this.queue).length === 0) {
        this.toast.show(); // 如果没有请求过 显示loading
      }
      // 请求前 增加请求队列
      this.queue[url] = url; // 存入队列中
      return config;
    }, err => {
      return Promise.reject(err);
    });
    instance.interceptors.response.use((res) => { // 响应拦截
      // 关闭loading
      // 可以对返回的状态码做各种匹配
      delete this.queue[url]; //  请求完成后删除对应的url
      if (Object.keys(this.queue).length === 0) {
        this.toast.hide(); // 当队列被清空隐藏掉即可
      }
      if (res.data.code === 0) {
        return res.data.data
      }
    }, err => {
      delete this.queue[url]; //  请求完成后删除对应的url
      if (Object.keys(this.queue).length === 0) {
        this.toast.hide(); // 当队列被清空隐藏掉即可
      }
      return Promise.reject(err);
    })
  }
  request(options) {
    let instance = axios.create();
    let config = {
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout
    }
    this.setInterceptor(instance, options.url); // 给这个实例增加拦截功能
    return instance(config); // 返回的是一个promise
  }
}

export default new AjaxRequest
// new AjaxRequest().request({
//   url: 'xxxx',
//   xxasd
// }).then(data => {

// })
