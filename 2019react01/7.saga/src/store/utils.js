export const delay = function(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         let result = Math.random();
         /* if(result >.5){
            resolve(result);
         } else{
             reject('发生了错误');
         } */
         if(result >.5){
            resolve({code:0,data:result});
         } else{
            resolve({code:1,error:'发生了错误'});
         }
        },ms);
    });
 }
 //node里的readFile 
export const readFile = function(filename,callback){
   setTimeout(()=>{
    callback(null,filename+"'s content");
   },1000);
} 