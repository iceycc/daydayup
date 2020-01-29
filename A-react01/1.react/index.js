
class Transaction{
    constructor(wrappers){
        this.wrappers = wrappers;//{initialize,close}
    }
    // 什么时候开启批量更新 关闭批量更新
    perform(anyMethod){
        this.wrappers.forEach(wrapper=>wrapper.initialize());
        anyMethod.call();
        this.wrappers.forEach(wrapper=>wrapper.close());
    }
}
//batchingStrategy.isBatchingUpdates batchedUpdates
let batchingStrategy = {
    isBatchingUpdates:false,//默认是非批量更新模式
    dirtyComponents:[],// 脏组件 就组件的状态和界面上显示的不一样
    batchedUpdates(){
        this.dirtyComponents.forEach(component=>component.updateComponent());
    }
}

// 更新器
class Updater{
    constructor(component){
        this.component = component;
        this.pendingStates = [];
    }
    addState(partcialState){
        // 调用了 setState方法但是组件状态没更新，就变脏了

        // 判断是否在批量更新中，也就是脏组件，此时放到dirtyComponents缓存起来
        // 否则直接更新updateComponent
        this.pendingStates.push(partcialState);

        batchingStrategy.isBatchingUpdates
        ?batchingStrategy.dirtyComponents.push(this.component) // 是批量更新，缓存
        :this.component.updateComponent() // 不是批量更新，直接更新组件
    }

}
// 父类
class Component{
    constructor(props){
        /**
         * 外部传入的属性 props无法修改
         * 内部定义的状态 state
         */
        this.props = props;
        this.$updater = new Updater(this);
    }
    setState(partcialState){
        this.$updater.addState(partcialState);
    }
    // 更新组件的方法
    updateComponent(){
        // 更新 将新的属性 合并到 老熟悉. 部分属性
        // 部分属性更新时，缓存状态。
        this.$updater.pendingStates.forEach(partcialState=>Object.assign(this.state,partcialState));
        this.$updater.pendingStates.length = 0;
        let oldElement = this.domElement;
        let newElement = this.createDOMFromDOMString();
        // 老节点 替换 新节点
        oldElement.parentElement.replaceChild(newElement,oldElement);
    }
    //把一个DOM模板字符串转成真实的DOM元素
    createDOMFromDOMString(){
        //this;
        // 将模板字符串 转换成真实dom
        let htmlString = this.render();
        let div = document.createElement('div');
        div.innerHTML = htmlString;
        this.domElement =  div.children[0];
        //让这个BUTTONDOM节点的component属性等于当前Counter组建的实例
        this.domElement.component = this;
        //this.domElement.addEventListener('click',this.add.bind(this));
        return this.domElement;
    }
    // 挂载 将渲染的dom挂载到父节点上
    mount(container){
        container.appendChild(this.createDOMFromDOMString());
    }
}
//
let transaction = new Transaction([
    {
        initialize(){
            batchingStrategy.isBatchingUpdates = true; //开始批量更新模式
        },
        close(){
            batchingStrategy.isBatchingUpdates = false;
            batchingStrategy.batchedUpdates();//进行批量更新，把所有的脏组件根据自己的状态和属性重新渲染
        }
    }
]);
// 将事件委托给全局，全局监听函数
window.trigger = function(event,method){
// event.target.component[method].call(event,target.component)
 let component = event.target.component;//event.target=this.domElement
// 什么时候开启批量更新模式 关闭批量更新模式？？？进行批量更新（就是把脏组件依次更新一下）
// 包装类 先依次执行所有的初始化方法，再执行真正的方法，最后依次执行关闭方法
transaction.perform(component[method].bind(component)); 
}
class Counter  extends Component{
    constructor(props){
        super(props);
        this.state = {number:0}
    }
    
    add(){
        this.setState({number:this.state.number+1});
        console.log(this.state);//0
        this.setState({number:this.state.number+1});
        console.log(this.state);//0
        setTimeout(()=>{
            // 延迟期中
            this.setState({number:this.state.number+1});
            console.log(this.state);//2
            this.setState({number:this.state.number+1});
            console.log(this.state);//3
        },1000);
    }
    render(){
        // 只负责渲染dom
        return `<button onclick="trigger(event,'add')">
            ${this.props.name}:${this.state.number}
            </button>`;
    }

}
function renderHtml(parent,html){
    let div = document.createElement('div')
    div.innerHTML = html
    parent.appendChild(div)
}