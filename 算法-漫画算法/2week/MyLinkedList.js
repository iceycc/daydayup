class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class MyLinkedKist{
    constructor(){
        this.head = null;
        this.last = null;
        this.size = 0;
    }
    /**
     * 链表插入元素
     * @param {*} data 
     * @param {*} index 
     */
    insert(data,index){
        if(index<0 || index>this.size){
            throw new Error("超出范围");
        }
        let insertNode = new Node(data);
        if(this.size == 0){
            // 空链表
            this.head = insertNode;
            this.last = insertNode;

        }else if(index == 0){
            // 插入头部
            insertNode.next = head;
            head = insertNode;
        }else if(this.size == index){
            // 插入尾部
            this.last.next = insertNode;
            this.last = insertNode;
        }else{
            // 插入元素
            let preNode = this.get(index-1);
            insertNode.next = preNode.next;
            preNode.next = insertNode;
        }
        this.size++;
    }
    /**
     * 链表删除元素
     * @param {*} index 
     */
    remove(index){
        if(index<0 || index>this.size){
            throw new Error("超出链表范围");
        }
        let removeNode = null;
        if(index == 0){
            // 删除头节点
            removeNode = this.head;
            this.head = this.head.next;
        }else if(index == this.size-1){
            // 删除尾节点
            let preNode = this.get(index-1);
            removeNode = preNode.next;
            preNode.next = null;
            this.last = preNode;
        }else{
            // 删除中间节点
            let preNode = this.get(index-1);
            let nextNode = preNode.next.next;
            removeNode = preNode.next;
            preNode.next = nextNode.next;
        }
        this.size--;
        return removeNode;
    }
    /**
     * 链表查找元素
     * @param {*} index 
     */
    get(index){
        if(index<0 || index>this.size){
            throw new Error("超出范围");
        }
        let temp = this.head;
        for(let i=0;i<index;i++){
            temp = temp.next;
        }
        return temp;
    }
    /**
     * 输出链表
     */
    output(){
        let temp = this.head;
        while(temp.next != null){
            console.log(temp.data);
            temp = temp.next;
        }
        return temp;
    }

}

const myLinkedList = new MyLinkedKist();
myLinkedList.insert(3, 0);
myLinkedList.insert(1, 1);
myLinkedList.insert(3, 2);
myLinkedList.insert(3, 3);
myLinkedList.insert(3, 1);
myLinkedList.remove(0);
myLinkedList.output();