import java.util.Arrays;

class heapSort {
    /**
     * 上浮
     * 
     * @param array
     */
    public static void upAdjust(int[] array) {
        int childIndex = array.length - 1;
        int parentIndex = (childIndex - 1) / 2;
        // temp保存插入的叶子节点，用于最后的赋值
        int temp = array[childIndex];
        while (childIndex > 0 && temp < array[parentIndex]) {
            // 把当前的根节点赋值到当前尾节点
            array[childIndex] = array[parentIndex];
            // 更新尾节点
            childIndex = parentIndex;
            // 更新根节点
            parentIndex = (parentIndex - 1) / 2;
        }
        array[childIndex] = temp;
    }

    /**
     * 
     * @param array
     * @param parentIndex 要下沉的父节点
     * @param length
     */
    public static void downAdjust(int[] array, int parentIndex, int length) {
        // 保存父节点值，用于最后的赋值
        int temp = array[parentIndex];
        int childIndex = 2 * parentIndex + 1;
        while (childIndex < length) {
            // 如果有右孩子，且右孩子小于左孩子，则定位到右孩子
            if (childIndex + 1 < length && array[childIndex + 1] < array[childIndex]) {
                childIndex++;
            }
            // 如果父节点小于任何一个孩子的值，直接跳出
            if (temp < array[childIndex]) {
                break;
            }
            // 无需真正交换，单向赋值即可
            array[parentIndex] = array[childIndex];
            parentIndex = childIndex;
            childIndex = 2 * parentIndex + 1;
        }
        array[parentIndex] = temp;
    }

    /**
     * 构建堆
     * 
     * @param array
     */
    public static void buildHeap(int[] array) {
        // 从最后一个非叶子节点开始，一次做下沉调整
        for (int i = (array.length - 2) / 2; i >= 0; i--) {
            downAdjust(array, i, array.length);
        }
    }
    /**
     * 堆排序 （升序）
     * @param array
     */
    public static void heapSort1(int[] array) {
        // 1 把无序数组构建成最大堆
        for (int i = (array.length - 2) / 2; i >= 0; i--) {
            downAdjust(array, i, array.length);
        }
        System.out.println(Arrays.toString(array));
        // 2. 循环删除堆顶元素，移到集合尾部，调整堆产生新的堆顶
        for(int i =array.length-1;i>0;i--){
            // 最后一个元素和第一个元素进行交换
            int temp = array[i];
            array[i] = array[0];
            array[0] = temp;
            // 下沉 调整最大堆
            downAdjust(array, 0, i);
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 1, 3, 2, 6, 5, 7, 8, 9, 10, 0 };
        heapSort1(arr);
        System.out.println(Arrays.toString(arr));

    }
}