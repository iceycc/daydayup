import java.util.Arrays;
import jdk.nashorn.internal.ir.Terminal;

class PriorityQueue {
    public int[] array;
    private int size;
    public PriorityQueue(){
        array = new int[32];
    }
    /**
     * 入队
     * @param key
     */
    public void enQueue(int key){

        if(size>=array.length){
            resize();
        }
        // 新元素插入队尾一直上浮

        array[size++] = key;
        upAdjust();
    }
    /**
     * 出队
     * @return
     * @throws Exception
     */
    public int deQueue() throws Exception{
        if(size<=0){
            throw new Exception("this queue is empty!!");
        }
        // 获取堆顶元素
        int head = array[0];
        // 让最后一个元素移动到堆顶
        array[0] = array[--size];
        downAdjust();
        return head;
    }
    /**
     * 上浮
     */
    private void upAdjust(){
        // 将插入的新元素依次与其父元素比较，最大堆就大的上浮，最小堆就小的上浮
        int childIndex = size -1;
        int parentIndex = (childIndex - 1) / 2;
        // temp保存插入的叶子节点值，用于最后的赋值
        int temp = array[childIndex];
        while(childIndex>0 && temp<array[parentIndex]){
            // 无序真正交换，单向赋值即可
            array[childIndex] = array[parentIndex];
            childIndex = parentIndex;
            parentIndex =  parentIndex / 2;
        }
        array[childIndex] = temp;
    }
    /**
     * 下沉
     */
    private void downAdjust(){
        // temp保存父节点的值，用于最后的赋值
        int parentIndex = 0;
        int temp = array[parentIndex];
        int childIndex = 1;
        while(childIndex<size){
            // 如果有右孩子，且大于左孩子的值，则定位到右孩子
            if(childIndex+1<size && array[childIndex+1]>array[childIndex]){
                childIndex++;
            };
            // 如果父节点大于如何一个孩子的值，直接跳出
            if(temp>=array[childIndex]){
                break;
            }
            // 无须真正交换，单向赋值即可
            array[parentIndex] = array[childIndex];
            parentIndex = childIndex;
            childIndex = 2 * parentIndex + 1;

        }
        array[parentIndex] = temp;
    }
    /**
     * 数组扩容
     */
    private void resize(){
        int newSize = this.size*2;
        this.array = Arrays.copyOf(this.array, newSize);
    }

    public static void main(String[] args) throws Exception{
        PriorityQueue priorityQueue = new PriorityQueue();
        priorityQueue.enQueue(3);
        priorityQueue.enQueue(5);
        priorityQueue.enQueue(10);
        priorityQueue.enQueue(2);
        priorityQueue.enQueue(7);
        System.out.println("出队"+priorityQueue.deQueue());
        System.out.println("出队"+priorityQueue.deQueue());
        System.out.println("出队"+priorityQueue.deQueue());
        System.out.println("出队"+priorityQueue.deQueue());
    }

}