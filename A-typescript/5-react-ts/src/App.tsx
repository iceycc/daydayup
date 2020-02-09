import React, { ReactNode } from 'react';
import Todo from './component/todos'

interface IProps {
  /**
   * logo的地址
   */
  logo?: string 
  /**
   * / logo的类名
   */
  className?: string
  alt?: string 
}

export const Logo: React.SFC<IProps>  = props => {
  const { logo, className, alt } = props
  return (
      <img src={logo} className={className} alt={alt} />
  )
}

// class设置State的类型，同时可以设置默认值
class State {
  public children?: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed?: number = 500
  public height!: number
  public animation?: string = 'easeInOutQuad'
  public isAuto?: boolean = true
  public autoPlayInterval?: number = 4500
  public afterChange?: () => {}
  public beforeChange?: (() => {}) | undefined
  public selesctedColor?: string = '1'
  public showDots?: boolean = true
}
class Props{
  name?:string = ''
}
export default class extends React.Component<Props,State>{
  state = new State()
  setHeight(){
    this.setState({
      height:1
    })
  }
  render(){
    // this.state.height
    return<>
    <Todo></Todo>
    </>
  }

}
