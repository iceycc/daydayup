
namespace htype22 {
  /**
   * 索引类型
   * keyof
   */
  function pick(o: Record<string, any>, names: string[]) {
    return names.map(n => o[n])
  }
  const user = {
    username: 'Jessica Lee',
    id: 460000201904141743,
    token: '460000201904141743',
    avatar: 'http://dummyimage.com/200x200',
    role: 'vip'
  }
  const res = pick(user, ['id'])

  // console.log(res) // [ '460000201904141743' ]

  class Images {
    public src?: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    public alt?: string = '谷歌'
    public width?: number = 500
    public isMale?: boolean = false
    public say: (a: string) => void = () => {
      console.log(a + 'xxxxx')
    }
  }
  type propsNames = keyof Images // type propsNames = "src" | "alt" | "width" | "isMale" | "say"
  type propsType = Images[propsNames] // type propsType = string | number | boolean | ((a: string) => void)


  let images = new Images()
  type propsNames1 = typeof images
  let fn: propsNames1 = {
    say(v) {
      console.log(v + 'hhhhhhh')
    }
  };
  // fn.say('xx')


  // 
  function pick2<T, K extends keyof T>(o: T, name: K[]): T[K][] {
    return name.map(n => o[n])
  }
  pick2(user, ['username'])


}
// Partial 实现Partial
namespace height22 {
  interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
  }
  type partial<T> = {[k in keyof T]?:T[k]}
  type userType = partial<User>




}