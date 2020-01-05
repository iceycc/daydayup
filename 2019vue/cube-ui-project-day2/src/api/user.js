// 设置登录接口
import axios from '@/utils/ajaxRequest'
export const login = (user) => {
  return axios.request({
    url: '/login',
    method: 'POST',
    data: user
  })
}
