let  observer = {};
function take(actionType,listener){
    observer[actionType] = listener;
}
take('ASYNC_INCREMENT',()=>{console.log('ASYNC_INCREMENT')});

function fire(actionType){
    observer[actionType]&&observer[actionType]();
    delete observer[actionType];
}
//events once
fire('ASYNC_INCREMENT');
fire('ASYNC_INCREMENT');