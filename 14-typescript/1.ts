declare type DeepRequired<T> = {
  [U in keyof T]-?: T[U] extends object
      ? (T[U] extends Function? T[U]:DeepRequired<T[U]>)
      : T[U]
}

class Store {
  a?:string = '1'
  arr:string[] = ['1','3']
  add?=(str:string)=>{
    console.log(str)
  }

}

let store = new Store()
const Config = {
  name :'',
  store:store,
  getName(){
    console.log('xxxx')
  }
}
type storeType =  typeof store
interface IConifg {
  name:string,
  arr:string[] 
  store:storeType,
  getName:()=>{}
}
type configType = DeepRequired<IConifg>


let con:configType  
con.store.add('1')
con.store.a
con.arr.push()
con.getName

