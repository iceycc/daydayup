// 设置登录接口
import axios from '@/utils/ajaxRequest'
export const login = (user) => {
  return axios.request({
    url: '/login',
    method: 'POST',
    data: user
  })
}


export const validate = ()=>{ // token
  return axios.request({
    url:'/validate'
  })
}


export const upload = (fd) =>{
  return axios.request({
    url: '/avatar',
    method:'post',
    headers:{
      'content-type':'multipart/form-data'
    },
    data:fd
  })
}
