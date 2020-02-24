function checkArray(array) {
  return Array.isArray(array)
}
function swap(array, left, right) {
  let rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}

function bubble(array) {
  checkArray(array);
  for (let i = array.length - 1; i > 0; i--) {
    // 从 0 到 `length - 1` 遍历
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) swap(array, j, j + 1)
    }
  }
  return array;


}

function debounce(fnc,wait=50){
  let tiemr = 0;
  return function(){
    if(tiemr) clearTimeout(tiemr)
    timer = setTimeout((...args)=>{
      func.apply(this,args)
    },wait)
  }
}


function throttle(fn,time){
  let perTime = 0;
  return function(){
    const remainTime = time - (Date.now() -preTime)
    if(remainTime <=0){
      fn()
      preTime= Date.now()
    }
  }
}