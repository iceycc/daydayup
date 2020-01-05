function times(cb,length){
  let count = 0;
  return function(){
      if(++count === length){
        cb();
      }
  }                                  
}
let newFn = times(()=>{console.log('真正任务')},0);
newFn();
newFn();
newFn();