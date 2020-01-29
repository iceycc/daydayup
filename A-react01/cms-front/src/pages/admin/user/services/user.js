import request from '@/utils/request';
import {PAGE_SIZE} from '../constants';
import querystring from 'querystring';
const ENTITY = 'user';
export function fetch(pageNum,where){
  //{username:'xx',email:"yy"} => username=xx&email=yy
  let whereStr = querystring.stringify(where);
  return request(`/api/${ENTITY}?pageNum=${pageNum}&pageSize=${PAGE_SIZE}&${whereStr}`);
}
export function create(values){
  return request(`/api/${ENTITY}`,{
    method:'POST',
    header:{'Content-Type':"application/json"},
    body:JSON.stringify(values)
  });
}
export function update(values){
  return request(`/api/${ENTITY}/${values.id}`,{
    method:'PUT',
    header:{'Content-Type':"application/json"},
    body:JSON.stringify(values)
  });
}
export function del(id){
  return request(`/api/${ENTITY}/${id}`,{
    method:'DELETE'
  });
}
export function delAll(ids){
  return request(`/api/${ENTITY}/${ids[0]}`,{
    method:'DELETE',
    header:{'Content-Type':"application/json"},
    body:JSON.stringify(ids)
  });
}