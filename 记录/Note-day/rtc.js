import AgoraRTC from 'agora-rtc-sdk'
const client = AgoraRTC.createClient({ mode: 'live', codec: 'h264' });
function ToPromise(callBack){
    return ()=>{
        return new Promise((resolve,reject)=>{
            callBack(...arguments,function(data){
                resolve(data)
            },function(err){
                reject(err)
            })
        })
    }
}
const init = ToPromise(client.init)
const join = ToPromise(client.join)
const leave = ToPromise(client.leave)
;(async()=>{
    const appId = ''
    await init(appId) //初始化
    await join(token) // 
    await leave() 
})()
