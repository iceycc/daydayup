import axios from '@/utils/ajaxRequest'

export const fetchCategory = () => {
  return axios.request({
    url: '/category'
  })
}
