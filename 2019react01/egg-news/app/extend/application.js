//本地缓存的扩展
let cacheData = {};
exports.cacheUtil = {
    get(key){
        return cacheData[key];
    },
    set(key,val){
        cacheData[key] = val;
    }
}