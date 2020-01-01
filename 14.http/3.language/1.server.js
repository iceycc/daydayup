const http = require('http');
// curl -v --header "accept-language:zn;q=0.5,jp,en;q=0.8" http://localhost:3000
const languages = {
    en:{
        message:'hello'
    },
    zh:{
        message:'你好'
    },
    jp:{
        message:'おはようございます'
    }
}
const defaultLanguage = 'zh'; // 设置默认语言
http.createServer((req,res)=>{
    let language = req.headers['accept-language'];
    // 获取浏览器上送的语言
    console.log(language)
    if(language){ // jp,en;q=0.8  q是权重的意思
        // 支持多语言
        // [{lan:zh-cn,q:1},{lan:zh,q:0.9}];
        let lans = language.split(',').map(lan=>{
            // 语言 + 权重 
            let [l,q="q=1"] = lan.split(';');
            return {
                lan:l,
                q:q.split('=')[1]
            }
        }).sort((a,b)=>b.q-a.q)
        for(let i = 0 ;i <lans.length;i++){
            let current = lans[i].lan; // 获取的是当前支持的某种语言
            if(languages[current]){
                return res.end(languages[current].message)
            }
        }
        let r = languages[defaultLanguage].message;
        res.end(r);
    }else{
        // 返回默认语言
        let r = languages[defaultLanguage].message;
        res.end(r);
    }
}).listen(3000);