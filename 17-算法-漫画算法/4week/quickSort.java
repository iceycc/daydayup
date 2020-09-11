import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

class Sort {
    public static int num = 0;

    /**
     * 非递归实现快排
     * @param arr
     * @param startIndex
     * @param endIndex
     */
    public static void quickSortByStack(int[] arr, int startIndex, int endIndex) {
        // 用一个集合栈代替递归函数栈
        Stack<Map<String, Integer>> quickSortStack = new Stack<Map<String, Integer>>();
        // 整个数列的起始下标以哈希形式入栈
        Map<String, Integer> rootParam = new HashMap<String, Integer>();

        rootParam.put("startIndex", startIndex);
        rootParam.put("endIndex", endIndex);
        quickSortStack.push(rootParam);
        // 循环结束条件：栈为空时
        while (!quickSortStack.isEmpty()) {
            // 栈顶元素出栈，得到起止下标
            Map<String, Integer> param = quickSortStack.pop();
            // 得到基准元素位置
            int pivotIndex = partitionDouble(arr, param.get("startIndex"), param.get("endIndex"));
            // 根据基准元素分成两部分。把每一个部分的起止下标传人
            if (param.get("startIndex") < pivotIndex - 1) {
                Map<String, Integer> leftParam = new HashMap<String, Integer>();
                leftParam.put("startIndex", param.get("startIndex"));
                leftParam.put("endIndex", pivotIndex-1);
                quickSortStack.push(leftParam);
            }
            if (pivotIndex + 1 < param.get("endIndex")) {
                Map<String, Integer> rightParam = new HashMap<String, Integer>();
                rightParam.put("startIndex",pivotIndex+1);
                rightParam.put("endIndex", param.get("endIndex"));
                quickSortStack.push(rightParam);
            }

        }
    }

    /**
     * 递归实现快排
     * @param arr
     * @param startIndex
     * @param endIndex
     */

    public static void quickSort(int[] arr, int startIndex, int endIndex) {
        // 递归终止条件
        if (startIndex >= endIndex) {
            return;
        }
        // 得到基准元素位置
        // int pivotIndex = partitionDouble(arr, startIndex, endIndex);
        int pivotIndex = partitionSingle(arr, startIndex, endIndex);
        // 根据基准点，分别对两侧进行递归排序
        quickSort(arr, startIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, endIndex);
    }

    /**
     * 分治 单边循环法
     * 
     * @param arr
     * @param startIndex
     * @param endIndex
     * @return
     */
    private static int partitionSingle(int[] arr, int startIndex, int endIndex) {
        int pivot = arr[startIndex];
        int mark = startIndex;
        for (int i = startIndex; i <= endIndex; i++) {
            num++;
            if (arr[startIndex] < pivot) {
                mark++;
                int p = arr[mark];
                arr[mark] = arr[i];
                arr[i] = p;
            }
        }
        arr[startIndex] = arr[mark];
        arr[mark] = pivot;
        return mark;
    }

    /**
     * 分治 双边循环法
     * 
     * @param arr
     * @param startIndex
     * @param endIndex
     * @return
     */
    private static int partitionDouble(int[] arr, int startIndex, int endIndex) {
        // 取第一个元素（或者随机获取交换到第一个）的元素作为基准元素
        int pivot = arr[startIndex];
        int left = startIndex;
        int right = endIndex;

        while (left != right) {
            // 控制右指针right 并向左移动
            while (arr[right] > pivot && left < right) {
                num++;
                right--;
            }
            // 控制左指针left 并向右移动
            while (arr[left] <= pivot && left < right) {
                num++;
                left++;
            }
            // 交换位置
            if (left < right) {
                int p = arr[left];
                arr[left] = arr[right];
                arr[right] = p;
            }
        }
        // pivot和指针重合点交换
        arr[startIndex] = arr[left];
        arr[left] = pivot;
        return left;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 4, 4, 6, 5, 3, 2, 8, 1 };
        quickSortByStack(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
        System.out.println(num);
    }
}