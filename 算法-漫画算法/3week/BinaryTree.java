import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

class BinaryTree {
    /**
     * 构建二叉树
     * 
     * @param inputList 输入的队列
     */
    public static TreeNode createBinaryTree(LinkedList<Integer> inputList) {
        TreeNode node = null;
        if (inputList == null || inputList.isEmpty()) {
            return null;
        }
        Integer data = inputList.removeFirst();
        if (data != null) {
            node = new TreeNode(data);
            node.leftChild = createBinaryTree(inputList);
            node.rightChild = createBinaryTree(inputList);
        }
        return node;
    }

    /**
     * 二叉树节点
     */
    private static class TreeNode {
        int data;
        TreeNode leftChild;
        TreeNode rightChild;

        TreeNode(int data) {
            this.data = data;
        }
    }

    /**
     * 二叉树 前序遍历
     * 
     * @param node
     */
    public static void preOrderTraveral(TreeNode node) {
        if (node == null) {
            return;
        }
        System.out.println(node.data);
        preOrderTraveral(node.leftChild);
        preOrderTraveral(node.rightChild);
    }

    /**
     * 二叉树 中序遍历
     * 
     * @param node
     */
    public static void inOrderTraveral(TreeNode node) {
        if (node == null) {
            return;
        }
        inOrderTraveral(node.leftChild);
        System.out.println(node.data);
        inOrderTraveral(node.rightChild);
    }

    /**
     * 二叉树后序遍历
     * 
     * @param node
     */
    public static void postOrderTraveral(TreeNode node) {
        if (node == null) {
            return;
        }
        postOrderTraveral(node.leftChild);
        postOrderTraveral(node.rightChild);
        System.out.println(node.data);
    }

    /**
     * 二叉树 前序遍历：栈，非递归
     * 
     * @param root
     */
    public static void preOrderTraveralWithStack(TreeNode root) {
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode treeNode = root;
        while (treeNode != null || !stack.isEmpty()) {
            // 迭代访问左节点，并入栈
            while (treeNode != null) {
                System.out.println(treeNode.data);
                stack.push(treeNode);
                treeNode = treeNode.leftChild;
            }
            // 如果节点没有左孩子，则弹出栈顶节点，访问右孩子
            if(!stack.isEmpty()){
                treeNode = stack.pop();
                treeNode = treeNode.rightChild;
            }
        }

    }
    /**
     * 二叉树 中序遍历：栈，非递归
     * @param root
     */
    public static void inOrderTraveralWithStack(TreeNode root) {
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode treeNode = root;
        while (treeNode != null || !stack.isEmpty()) {
            // 迭代访问左节点，并入栈
            while (treeNode != null) {
                stack.push(treeNode);
                treeNode = treeNode.leftChild;
            }
            // 如果节点没有左孩子，则弹出栈顶节点，访问右孩子
            if(!stack.isEmpty()){
                treeNode = stack.pop();
                System.out.println(treeNode.data);
                treeNode = treeNode.rightChild;
            }
        }

    }
    
    /**
     * 二叉树 后序遍历：栈，非递归
     * @param root
     */
    public static void postOrderTraveralWithStack(TreeNode root) {
        if(root==null) return;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode treeNode = root;
        TreeNode lastNode = root;
        // while (treeNode != null || !stack.isEmpty()) {
            // 迭代访问左节点，并入栈
            while (treeNode != null) {
                stack.push(treeNode);
                treeNode = treeNode.leftChild;
            }
            // 如果节点没有左孩子，则弹出栈顶节点，访问右孩子
            while(!stack.isEmpty()){
                treeNode = stack.pop();
                if(treeNode.rightChild!=null && treeNode.rightChild != lastNode){
                    stack.push(treeNode);
                    treeNode = treeNode.rightChild;
                    while(treeNode != null){
                        stack.push(treeNode);
                        treeNode = treeNode.leftChild;
                    }
                }else{
                    System.out.println(treeNode.data);
                    lastNode = treeNode;
                }
            }
        // }

    }
    /**
     * 二叉树层序遍历 队列法 
     * @param root
     */
    public static void leveOrderTraversal(TreeNode root){
        // 创建一个队列
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.offer(root); // 向队尾加入一个元素
        while(!queue.isEmpty()){
            TreeNode node = queue.poll(); // 删除队首元素 并返回
            System.out.println(node.data); 
            if(node.leftChild != null){
                queue.offer(node.leftChild);
            }
            if(node.rightChild != null){
                queue.offer(node.rightChild);
            }
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> inputList = new LinkedList<Integer>(
                Arrays.asList(new Integer[] { 3, 2, 9, null, null, 10, null, null, 8, null, 4 }));
        TreeNode treeNode = createBinaryTree(inputList);
        System.out.println("前序遍历");
        preOrderTraveral(treeNode);
        System.out.println("前序遍历 栈");
        preOrderTraveralWithStack(treeNode);
        System.out.println("中序遍历");
        inOrderTraveral(treeNode);
        System.out.println("中序遍历 栈");
        inOrderTraveralWithStack(treeNode);
        System.out.println("后序遍历");
        postOrderTraveral(treeNode);
        System.out.println("后序遍历 栈");
        postOrderTraveralWithStack(treeNode);
    }
}