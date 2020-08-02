class MyQueue{
    constructor(capacity){
        this.array = new Array(capacity)
        this.front = 0;
        this.rear = 0;
    }
    // 入队
    enqueue(element){
        if((this.rear+1)%this.array.length == this.front){
            throw new Error("队列已满");
        }
        this.array[this.rear] = element; // 入队尾
        this.rear = (this.rear+1)%this.array.length;
    }
    // 出队
    dequeue(){
        if(this.front == this.rear){
            throw new Error("队列已空");
        }
        let deQueueElement = this.array[this.front];
        this.front = (this.front+1)%this.array.length;
        return deQueueElement;
    }
    // 输出队列
    output(){
        for(let i=this.front;i!=this.rear;i=(i+1)%this.array.length){
            console.log(this.array[i]);
        }
    }
}

const myQueue = new MyQueue(6);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.output();