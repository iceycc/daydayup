
export default {
    login(username,password){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(Math.random()>0){
                    resolve(username+Date.now());
                }else{
                    reject('登录失败');
                }
            },1000);
        });
    },
    setItem(key,value){
        localStorage.setItem(key,value);
    },
    getItem(key){
        return localStorage.getItem(key);
    }
}