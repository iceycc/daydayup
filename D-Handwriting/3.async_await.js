async function fn1(){
    let v1 = await Promise.resolve(100)
    console.log(v1)
    let v2 = await Promise.resolve(200)
    console.log(v2)
    return await Promise.resolve(202)
}
fn1().then(data=>{
    console.log(data)
})

/*
function yieldPromise(generator){
    const interatorNext = function(value){
        let result = this.next(value)
        if(result.done) return
        let val = result.value
        Promise.resolve(val).then(val=>{
            interatorNext.call(interator,val)
        })
    }
    let interator = generator()
    interatorNext.call(interator)
}
yieldPromise(function *(){
    let v1 = yield Promise.resolve(300)
    console.log(v1)
    let v2 = yield Promise.resolve(400)
    console.log(v2)
    let v3 = yield 404
    console.log(v3)
})
*/

function spawn(genF) {
    return new Promise(function(resolve, reject) {
      const gen = genF();
      function step(nextF) {
        let next;
        try {
          next = nextF();
        } catch(e) {
          return reject(e);
        }
        if(next.done) {
          return resolve(next.value);
        }
        Promise.resolve(next.value).then(function(v) {
          step(function() { return gen.next(v); });
        }, function(e) {
          step(function() { return gen.throw(e); });
        });
      }
      step(function() { return gen.next(undefined); });
    });
  }
  
  function fn(){
    return spawn(function *(){
        let v1 = yield Promise.resolve(600)
        console.log(v1)
        let v2 = yield Promise.resolve(700)
        console.log(v2)  
    })
  }
  fn()