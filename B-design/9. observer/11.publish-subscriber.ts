//中介 Event Channel
class Agency {
    _topic = {}// _events
    subscribe(type, listener) {
        let listeners = this._topic[type];
        if (listeners) {
            listeners.push(listener);
        } else {
            this._topic[type] = [listener];
        }
    }
    // 接受信息 再发布给订阅者
    publish(type, ...args) {
        let listeners = this._topic[type] || [];
        listeners.forEach(listener => listener(...args));
    }
}
//房东 publish
class LandLord {
    constructor(public agency: Agency) {

    }
    // 发布给中介
    //type是房子的类型 area房子的面积 money房租的价格
    lend(type, area, money) {
        this.agency.publish(type, area, money);
    }
}
//房客 subscirber                                                 
class Tenant {
    constructor(public agency: Agency, public name: string) {

    }
    
    order(type) {
        // 注册信息
        this.agency.subscribe(type, (area, money) => {
            console.log(this.name, area + "平", money + '元');
        });
    }
}
// 创建中介
let agency = new Agency();
// 创建一个房客 
let rich = new Tenant(agency, '大款');
// 创建一个房客 
let northFloat = new Tenant(agency, '北飘');
// 告诉中介组豪宅
rich.order('豪宅');
// 告诉中介组单间
northFloat.order('单间');
let landLord = new LandLord(agency);
landLord.lend('豪宅', 10000, 10000000);                        
landLord.lend('单间', 10, 2000);


