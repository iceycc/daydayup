class Father{
  constructor(){
    this.name = 'xxxx'
    this.age = '19'
    this.getAge = function(){
      console.log(this.age)
    }
  }
  getName(){
    console.log(this.name)
  }
}
let f = new Father()
f.getName()
f.getAge()