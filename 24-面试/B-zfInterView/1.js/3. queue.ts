class Queue {
    private items: number[] = []
    enqueue(element: number) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    print() {
        console.log(this.items.toString());
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.print();
queue.enqueue(2);
queue.print();
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

