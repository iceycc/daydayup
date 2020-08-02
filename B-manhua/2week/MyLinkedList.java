package week2;

public class MyLinkedList {
    // 头节点指针
    private Node head;
    // 尾节点指针
    private Node last;
    // 链表的实际长度
    private int size;

    /**
     * 链表插入元素
     * 
     * @param data  插入的元素
     * @param index 插入的位置
     * @throws Exception
     */
    public void insert(int data, int index) throws Exception {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("超出链表的大小");
        }
        Node insertNode = new Node(data);
        if (size == 0) {
            // 空链表
            head = insertNode;
            last = insertNode;
        } else if (index == 0) {
            // 插入头部
            insertNode.next = head;
            head = insertNode;
        } else if (size == index) {
            last.next = insertNode; // 将之前最后一个节点的next指向插入的node
            last = insertNode;
        } else {
            // 插入元素
            Node preNode = get(index - 1);
            insertNode.next = preNode.next;
            preNode.next = insertNode;
        }
        size++;
    }

    public Node remove(int index) throws Exception {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("超出链表的大小");
        }
        Node removeNode = null;
        if (index == 0) {
            // 删除头节点
            removeNode = head;
            head = head.next;
        } else if (index == size - 1) {
            // 删除尾节点
            Node preNode = get(index-1);
            removeNode = preNode.next;
            preNode.next = null;
            last = preNode;
        } else {
            // 删除中间节点
            Node preNode = get(index - 1);
            Node nextNode = preNode.next.next;
            removeNode = preNode.next;
            preNode.next = nextNode;
        }
        size--;
        return removeNode;

    }

    /**
     * 链表查找元素
     * 
     * @param index
     * @return
     * @throws Exception
     */
    public Node get(int index) throws Exception {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("超出链表的大小");
        }
        Node temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    /**
     * 输出链表
     */
    public void output() {
        Node temp = head;
        while (temp.next != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }

    /**
     * 链表节点
     */
    private static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }

    }

    public static void main(String[] args) throws Exception {
        MyLinkedList myLinkedList = new MyLinkedList();
        System.out.println("start");
        myLinkedList.insert(3, 0);
        myLinkedList.insert(7, 1);
        myLinkedList.insert(9, 2);
        myLinkedList.insert(5, 3);
        myLinkedList.insert(6, 1);
        myLinkedList.remove(0);
        myLinkedList.output();
    }
}