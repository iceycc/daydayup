

Array.prototype.forEach = function(callback,context){
    let arr = this
    for(let i=0;i<arr.length;i++){
        callback && callback.call(context,arr[i],i,arr)
    }
}
