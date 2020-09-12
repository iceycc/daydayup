import java.util.Arrays;

class bubbleSort {
    public static void bubbleSort(int array[]){
        // 优化1:增加isSorted标记当前大循环是否排序完成，可以提前结束循环
        // 优化2:增加无序列表边界，右侧的有序列表不需要重复比较。
        int num = 0;
        int lastExchangeIndex = 0;
        int sortBorder = array.length-1;
        for(int i = 0;i<array.length-1;i++){
            boolean isSorted = true; // 每轮循环，初始值为true
            for(int j = 0;j<sortBorder;j++){
                num++;
                int tmp = 0;
                if(array[j]>array[j+1]){
                    tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                    isSorted = false; //因为有元素进行了交换，所以不是有序的，标记变为false
                    lastExchangeIndex = j; // 更新最后一次交换元素的位置
                }
            }
            sortBorder = lastExchangeIndex; // 更新无序列表的边界。
            if(isSorted){
                break;
            }
        }
        System.out.println(num);
    } 
    public static void doubleBubbbleSort1(int array[]){
        int num = 0;
        int tmp = 0;
        for(int i=0;i<array.length/2;i++){
            boolean isSorted = true;
            for(int j=i;j<array.length-1-i;j++){
                num++;
                if(array[j]>array[j+1]){
                    tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                    isSorted = false;
                }
            }
            if(isSorted){
                break;
            }
            isSorted = true;
            for(int j=array.length-i-1;j>i;j--){
                num++;
                if(array[j]<array[j-1]){
                    tmp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = tmp;
                    isSorted = false;
                }
            }
            if(isSorted){
                break;
            }
        }
        System.out.println(num);
    }
    public static void doubleBubbbleSort2(int array[]){
        int num = 0; // 小循环计数
        int tmp = 0; // 用于交换
        int leftExchangeIndex = 0;
        int rightExchanggeIndex = array.length-1;
        for(int i=leftExchangeIndex;i<array.length/2;i++){
            // 奇数轮从左往右遍历
            boolean isSorted = true;
            for(int j=i;j<rightExchanggeIndex;j++){
                num++;
                if(array[j]>array[j+1]){
                    tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                    isSorted = false;
                    leftExchangeIndex = j;
                }
            }
            rightExchanggeIndex = leftExchangeIndex;
            if(isSorted){
                break;
            }
            // 偶数轮从右往左遍历
            isSorted = true;
            for(int j=rightExchanggeIndex;j>i;j--){
                num++;
                if(array[j]<array[j-1]){
                    tmp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = tmp;
                    isSorted = false;
                    rightExchanggeIndex = j;
                }
            }
            leftExchangeIndex = rightExchanggeIndex;
            if(isSorted){
                break;
            }
        }
        System.out.println(num);
    }
    public static void main(String[] args){
        // int[] array = new int[]{5,3,6,1,2,9,7,8,10,11,12,13};
        int[] array = new int[]{2,3,4,5,6,7,8,1};
        // bubbleSort(array); // 优化后的冒泡排序：28次
        // doubleBubbbleSort1(array); // 原始的鸡尾酒排序：19次
        doubleBubbbleSort2(array); // 边界优化的鸡尾酒排序：13次
        System.out.println(Arrays.toString(array));
    }  
}