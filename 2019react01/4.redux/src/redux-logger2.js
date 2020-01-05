export default function logger2({getState}){
    return function(next){
        return function(action){
            console.log('老状态2',getState());
            next(action);
            console.log('新状态2',getState());
        }
    }
}