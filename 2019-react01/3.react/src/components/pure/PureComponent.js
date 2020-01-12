
import React, { Component } from 'react'

export default class PureComponent extends Component {
  isPureComponent = true
  //传入新的属性对象和状态对象，然后返回一个是否需要更新的boolean值
  shouldComponentUpdate(nextProps,nextState){
     // 判断 只要有一个不相等性返回true更新。否则false不更新
     return !shallowEqual(this.props,nextProps)||!shallowEqual(this.state,nextState);
  }
}

// 浅比较 性格高 
// 比较obj1和obj2是否相等，如果相等的话则返回true,不相等返回false,只比较第一层
function shallowEqual(obj1,obj2){
  if(obj1 === obj2){
    return true;
  }
  if(typeof obj1 !='object' || obj1 === null ||typeof obj2 !='object' || obj2 === null){
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if(keys1.length != keys2.length){
    return false;
  }
  for(let key of keys1){
      if(!obj2.hasOwnProperty(key) || obj1[key]!=obj2[key]){
        return false;
      }
      /* if(obj2.hasOwnProperty(key)){
          if(obj1[key] != obj2[key]){
            if(typeof obj1[key] == 'object' && typeof obj2[key] == 'object'){
                return shallowEqual(obj1[key],obj2[key]);
            }
          }
      }else{
          return false;
      } */
  }
  return true;
}
