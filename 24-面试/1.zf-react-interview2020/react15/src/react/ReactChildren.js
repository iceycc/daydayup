import { REACT_ELEMENT_TYPE } from '../shared/ReactSymbols';
/* function mapChildren(children, mapFunction, context) {//children = <span>A</span> {$$typeof:REACT_ELEMENT_TYPE}
    return children.flat(Infinity).map(mapFunction).flat(Infinity);
} */
const SEPARATOR = '.';//分隔符 开头的分隔符
const SUB_SEPARATOR = ':';//子分隔符 中间件分隔符
function mapChildren(children, mapFunction, context) {//children = <span>A</span> {$$typeof:REACT_ELEMENT_TYPE}
    const result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, mapFunction, context);
    return result;
}
//prefix指的是渲染前的节点key  最终key的/前面那部分
function mapIntoWithKeyPrefixInternal(children, result, prefix, mapFunction, context) {
    //traverseContext 遍历的上下文
    if (prefix !== null) {
        prefix = prefix + '/'; //  .0:0 => .0:0/
    }
    const traverseContext = { result, prefix, mapFunction, context };
    traverseAllChildren(children, '', mapSingleChildIntoContext, traverseContext);
}
//<span>A</span> .0:0 
function traverseAllChildren(children, nameSoFar, mapSingleChildIntoContext, traverseContext) {
    let type = typeof children;
    //如果type是字符串或者数字，或者type是一个对象，但是children.$$typeof是一个React元素，说明children是 一个可渲染的节点
    if (type === 'string' || type === 'number' || (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)) {
        mapSingleChildIntoContext(traverseContext, children,
            nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
        );
    } else if (Array.isArray(children)) {
        //如果传过来的nameSoFar是空的.前缀就是.,否则就是:
        //第二次进来的时候 nameSoFar = .0 nextNamePrefix=:
        let nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUB_SEPARATOR;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];//[<span>A</span>, <span>B</span>] .0
            let nextName = nextNamePrefix + getComponentKey(child, i);// .0:0 
            traverseAllChildren(child, nextName, mapSingleChildIntoContext, traverseContext);
        }
    }
}
function getComponentKey(component, index) {
    return component.key || index.toString(36);//如果说此节点有自己的key,就用自己的key,如果没有就用它的索引
}
//如果执行到这个地方 child肯定是一个节点 child=<span>A</span> childKey =.0:0
function mapSingleChildIntoContext(traverseContext, child, childKey) {//
    let { result, prefix, mapFunction, context } = traverseContext;
    //let mappedChild = mapFunction(child);
    let mappedChild = mapFunction.call(context, child);//child = <span>A</span> {$$typeof:REACT_ELEMENT_TYPE}
    //mappedChild===child
    //mappedChild = [item, [item, [item, [item]]]]; 往result里面放的永远只能是一个对象，不能是数组
    if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, c => c, context);
    } else {
        //把这个对象展开，重写key  prefix转换前的索引组成的key/childKey转换后的索引组件的key
        result.push({ ...mappedChild, key: prefix + childKey }); // .0:0/
    }
}

export {
    mapChildren as map,
};