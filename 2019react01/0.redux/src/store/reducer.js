export default function(state=0,action){
  switch(action.type){
      case 'add':
         return state+1;
      case 'minus':
        return state -1;
      default:
        return state;     
  }
}