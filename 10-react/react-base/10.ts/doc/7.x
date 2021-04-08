//声明文件
// 外部枚举
/* declare const  enum Seasons{
    Spring,Summer,Autumn,Winter
}
let seasons = [
    Seasons.Spring,Seasons.Summer,Seasons.Autumn,Seasons.Winter
] */
//namespace 命名空间
/* 
$('selector');
$.ajax('/user');
$.name;
$.fn.extend({age:10});

type Condition<T> = T extends Fish ? Water : Sky;
let t:Condition<Fish> = {};
let t:Water = {};
 */
/* import  jQuery from 'jquery';
jQuery('#root');
jQuery.ajax */
////扩展局部变量类型 扩展全局
/**
declare global{
    interface String {
        double():string;
    }
    interface Window {
        myname:string;
    }
}

String.prototype.double = function(){
    return this+""+this;
}
console.log('hello'.double());
console.log(window.myname);
export {};
 */