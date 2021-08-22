/**
 * 简单工厂模式的应用
 * jq
 */
interface jQuery {
    [index: number]: any
}
class jQuery {
    length: number;
    constructor(selector: string) {
        let elements = Array.from(document.querySelectorAll(selector));
        let length = elements ? elements.length : 0;
        this.length = length;
        for (let i = 0; i < length; i++) {
            this[i] = elements[i];
        }
    }
    html(htmlText: string | undefined) {
        if (htmlText) {
            for (let i = 0; i < this.length; i++) {
                this[i].innerHTML = htmlText;
            }
        } else {
            return this[0].innerHTML;
        }
    }
}
interface Window {
    $: any
}
// declare interface global{
//     $:any
// }
// global.$= function (selector: string) {
//     return new jQuery(selector);
// }
//简单工厂就是函数里返回类的实例 
window.$ = function (selector: string) {
    return new jQuery(selector);
}

