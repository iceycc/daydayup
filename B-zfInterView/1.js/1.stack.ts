class Stack {
    private items: number[] = []
    push(element: number) {
        this.items.push(element);
    }
    pop(): number {
        return this.items.pop();
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


function one() {
    function two() {
        function three() {
            console.log('three');
        }
        three();
    }
    two();
}
debugger;
one();