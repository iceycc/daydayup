function show(obj){
  let number = obj.number;
  setTimeout(()=>{
      console.log(number);
  },1000)
}
let obj = {number:0};
show(obj);
obj.number = 10;
