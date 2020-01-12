import React, { Component } from 'react'
import PropTypes from 'prop-types';
let props = {
    name:'zhangsan',//字符串 必填 
    age:18,//数字 必填，而且不能小于18岁
    gender:'男',//只能是男 或者女
    isMarried:true,//是否已婚 这是一个布尔值
    hobby:['smoking','drinking'],//字符串数组
    position:{x:100,y:100} //拥有x y属性的对象
  }
export default class Person extends Component {
  // stateTypes不需要，因为时自己写的，


  static defaultProps = {
      isMarried:false
  }
  // 属性校验，给外部看的  
  static propTypes = {
      name:PropTypes.string.isRequired,
      age:PropTypes.number.isRequired,
      gender:PropTypes.oneOf(['男','女']),
      isMarried:PropTypes.bool,
      hobby:PropTypes.arrayOf(PropTypes.string),
      position:PropTypes.shape({
          x:PropTypes.number,
          y:PropTypes.number
      }),
      age(props,propName,componentName){
        if(props[propName]<18){
            return new Error(`Invalid Prop ${propName} supplied to ${componentName}`);
        }
      }
  }  
  render() {
    return (
      <div>
          name:{this.props.name}
      </div>
    )
  }
}
