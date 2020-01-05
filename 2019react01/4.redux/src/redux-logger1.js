export default function logger1({getState}){
    return function(next){
        return function(action){
            console.log('老状态1',getState());
            next(action);
            console.log('新状态1',getState());
        }
    }
}