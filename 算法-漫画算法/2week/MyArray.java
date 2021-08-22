package week2;
public class MyArray{

    private int[] array;
    private int size;
    public MyArray(int capacity){
        this.array = new int[capacity];
        size = 0;
    }
    /**
     * 数组插入元素
     * @param element 插入的元素
     * @param index 插入的位置
     * @throws Exception
     */
    public void insert(int element,int index) throws Exception{
        // 判断访问下标是否超出范围
        if(index<0 || index>size){
            throw new IndexOutOfBoundsException("超出数组的实际元素范围");
        }
        // 如果实际元素达到数组容量上限，则对数组进行扩容
        if(size >= array.length){
            resize();
        }
        // 从右往左，将元素逐个往右挪1位
        for(int i=size-1;i>=index;i--){
            array[i+1] = array[i];
        }
        // 腾出的位置放入新元素
        array[index] = element;
        size++;
    }
    /**
     * 数组扩容
     */
    public void resize(){
        int[] arrayNew = new int[array.length*2];
        // 从旧数组复制到新数组
        System.arraycopy(array,0,arrayNew,0,array.length);
        array = arrayNew;
    }

    /**
     * 输出数组
     */
    public void output(){
        for(int i =0; i<size; i++){
            System.out.println(array[i]);
        }
    }
    /**
     * 数组删除元素
     * @param index 删除的位置
     * @return
     * @throws Exception
     */
    public int delete(int index) throws Exception{
        // 判断访问的下标是否超出范围
        if(index<0 || index>=size){
            throw new IndexOutOfBoundsException("超出数组实际元素范围");
        }
        int deleteElement = array[index]; 
        for(int i = index;i<size-1;i++){
            array[i] = array[i+1];
        }
        size--;
        return deleteElement; // 返回被删除的元素
    }

    public static void main(String[] args) throws Exception {
        MyArray myArray = new MyArray(10);
        myArray.insert(3,0);
        myArray.insert(7,1);
        myArray.insert(9,2); 
        myArray.insert(5,3); 
        myArray.insert(6,1); 
        myArray.output();
    }
}