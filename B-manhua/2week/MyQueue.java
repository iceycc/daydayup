package week2;

public class MyQueue {
    private int[] array; // 数组
    private int front; // 队头下标
    private int rear;// 队尾下标
    public MyQueue(int capacity){
        this.array = new int[capacity];
    }
    /**
     * 入队:将新元素放到队尾，更新队尾的坐标，往后移动一位
     * @param element
     * @throws Exception
     */
    public void enQueue(int element) throws Exception{
        if((rear + 1)%array.length == front){
            // 队尾下标+1 和队头重合
            throw new Exception("队列已满！");
        }
        array[rear] = element; // 新元素入队 都是在队尾
        rear = (rear + 1)%array.length; // 更新队尾下标。循环队列到前面。
    }

    /**
     * 出队:队头元素出队
     */
    public int deQueue() throws Exception{
        if(rear == front){
            throw new Exception("队列已空");
        }
        // 出队的元素
        int deQueueElement = array[front];
        front = (front + 1)%array.length; // 队头下标往后挪一位
        return deQueueElement;
    }
    /**
     * 输出队列
     */
    public void output(){
        for(int i= front;i!=rear;i=(i+1)%array.length){
            System.out.println(array[i]);
        }
    }

    public static void main(String[] args) throws Exception{
        MyQueue myQueue = new MyQueue(6);
        myQueue.enQueue(3);
        myQueue.enQueue(4);
        myQueue.enQueue(1);
        myQueue.enQueue(2);
        myQueue.enQueue(6);
        myQueue.deQueue();
        myQueue.deQueue();
        myQueue.deQueue();
        myQueue.enQueue(7);
        myQueue.enQueue(8);
        myQueue.output();
    }

}