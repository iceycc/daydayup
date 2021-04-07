function Father(name){

}
Father.prototype.getName = function(){console.log(this.name)}
function Child(name){
   this.name = name;
}
Child.prototype=Object.create(Father.prototype);
//Child.prototype=Father.prototype
Child.prototype.getName = function(){console.log('子类'+this.name)}
let c = new Child('hello');
c.getName();

