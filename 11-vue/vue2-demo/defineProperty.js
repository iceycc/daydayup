
const obj = {}
var temperature = '111111111111';
Object.defineProperty(obj, 'name', {
  // value:'222',
  get: function(){
    return temperature
  }
})


console.log(obj.name)