/**
 * 简单实现一个render
 * react-dom
 * @param {*} element 
 * @param {*} parentNode 
 */
function render(element,parentNode){
    if(typeof element == 'string'||typeof element == 'number'){ //文本
       return  parentNode.appendChild(document.createTextNode(element));
    }
    let type,props;
    type = element.type;//Welcome1
    props = element.props;
    // isReactComponent 类组件的父类的属性
    if(type.isReactComponent){
        // 类组件
        let returnedElement = new type(props).render();
        type = returnedElement.type;//"h1"
        props = returnedElement.props;//{id:'welcome'}
    }else if(typeof type == 'function'){ 
        // 如果是函数 就是函数组件
        let returnedElement = type(props);
        type = returnedElement.type;//"h1"
        props = returnedElement.props;//{id:'welcome'}
    }
    // 创建dom元素
    let domElement = document.createElement(type);//span
    for(let propName in props){
        if(propName == 'className'){
            domElement.className = props[propName];
        }else if(propName == 'style'){
            let styleObj = props[propName];// {color: 'red',fontSize: '50px'}
            //for(let attr in styleObj){
            //    domElement.style[attr] = styleObj[attr];
           // } fontSize=>font-size
            //['color','fontSize']=>['color:red','fontSize:50px']=>'color:red;fontSize:50px'
            let cssText = Object.keys(styleObj).map(attr=>{
                 return `${attr.replace(/([A-Z])/g,function(){return "-"+arguments[1].toLowerCase()})}:${styleObj[attr]}`;
             }).join(';');
            domElement.style.cssText = 'color:red;font-size:50px';
        }else if(propName == 'children'){
            // 递归
            //let children = Array.isArray(props.children)?props.children:[props.children];
            props.children.forEach(child=>render(child,domElement));
        }else{
            domElement.setAttribute(propName,props[propName]);
        }
    }
    将生成的dom挂载到父节点上
    parentNode.appendChild(domElement);
    //componentDidMount
}
export default {render}