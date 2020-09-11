import React from 'react';
import {when,computed, action, observable} from 'mobx';

class MyResource {
    @observable flag = false
     constructor() {
        when(
            // 一旦...
            () => this.isVisible,
            // ... 然后
            () => this.dispose()
        );
        async function whenPromise() {
            await when(() => this.isVisible)
            // 等等..
            this.dispose2()
        }
        whenPromise.call(this)
    }
    @computed get isVisible() {
        // 标识此项是否可见
        console.log('isVisible',this.flag)
        return this.flag
    }

    @action.bound
    setFlag(flag){
        this.flag = flag
    }

    dispose() {
        // 清理
        console.log('dispose')
    }

    dispose2(){
         // 清理
         console.log('dispose2')
    }
}
const my = new MyResource()
setTimeout(()=>{
    console.log('1000s letter')
    my.setFlag(true)
},1000)
export default ()=><div>11</div>