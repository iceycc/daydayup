export function injectJsError(){
    console.log('injectJsError')
    window.addEventListener('error', function(event){
        console.log(event)
        // let log = {
        //     kind: 'stability',//稳定性指标
        //     type: 'error',//resource
        //     errorType: 'resourceError',
        //     filename: event.target.src || event.target.href,//加载失败的资源
        //     tagName: event.target.tagName,//标签名
        //     timeStamp: formatTime(event.timeStamp),//时间
        //     selector: getSelector(event.path || event.target),//选择器
        // }
    })
}