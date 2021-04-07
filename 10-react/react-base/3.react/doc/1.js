class Parent{
    constructor(props){
        this.props = props;
    }
}
class Son extends Parent{
    constructor(props){
        super(props);
    }
}
let s = new Son('props');
console.log(s)
