let obj = {
  name:'w',
  age:'22'
}

let handle ={
  get(target,key){
    console.log('KEY')
  },
  set(target,key,value){
    console.log('')
  }
}

let pro = new Proxy(obj,handle)