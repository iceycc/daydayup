//类型保护就是根据一些运算符来判断分支中的类型
/**
function double(input:string|number|boolean){
  if(typeof input === 'string'){
    input.length;
  }else if(typeof input === 'number'){
    input.toFixed(2);
  }else{
      input.valueOf();
  }
}
//instanceof 
class Animal{
    name!:string;
    constructor(){
        
    }
}
class Bird extends Animal{
    swing!:number;
}
function getName(obj:Animal){
    if(obj instanceof Bird){
        obj.swing;
    }
}
//null保护
function getFirstLetter(s:string |null){
    // s = s||'';第一种办法
    //if(s === null) {s = ''}第二种办法加判断
    return s!.charAt(0);
}
getFirstLetter('zhufeng');
getFirstLetter(null);

function getFirstLetter2(s:string |null){
    function check(){
        s = s ||'';
    }
    check();
    return s!.charAt(0);
}
 */
interface WarningButton{
    class:'warning',
    edit: '编辑'
}
interface DangerButton{
    class:'danger',
    delete: '删除'
}
type Button = WarningButton|DangerButton;
//通过相同的字段，不同的取值来细分类型
function getButton(button:Button){
    if(button.class === 'warning'){
        button.edit;
    }else{
        button.delete;
    }
}
//通过判断有没有某个属性来区分类型
function getButton2(button:Button){
   if('edit' in button){
     button.edit;
   }else{
       button.delete;
   }
}

//自定义类型保护
interface Bird{
    leg:number
    name:'鸟'
}
interface Dog{
    leg:number,
    name:'狗'
}
function isBird(x:Bird|Dog):x is Bird{
   return (x as Bird).leg == 2;
}
function getAnimal(x:Bird|Dog){
  if(isBird(x)){
    x.name;
  }else{
      x.name;
  }
}