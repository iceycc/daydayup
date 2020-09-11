let lastEvent;
['click','touckstart','mousedown','mouseover'].forEach(eventType=>{
    document.addEventListener(eventTye, function(){
        lastEvent = event
    },{
        captrue:true,// 捕获阶段
        passive:true // 默认不阻止默认时间
    })
})