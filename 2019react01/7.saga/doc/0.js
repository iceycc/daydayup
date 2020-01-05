let listeners = [];
function addListener(listener){
    listeners.push(listener);
}
function fire(){
    listeners.forEach(l=>l());
}