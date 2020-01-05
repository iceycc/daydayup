// 实现loading效果
import Loading from '@/components/Loading'
const loadable = (asyncFunction) => {
  const component = () => ({
    component: asyncFunction(),
    loading: Loading
  })

  // 最终要返回一个组件，组件需要有render，通过render 在去渲染一个异步组件
  return { // cli 默认不支持模板
    render(h) {
      return h(component)
    }
  }
  // 组件是一个对象 会变成render函数
}
export default loadable
