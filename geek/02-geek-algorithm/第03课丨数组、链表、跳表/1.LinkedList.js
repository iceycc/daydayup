/**
// Array 的时间复杂度复杂度
// prepend o(1)
// append  o(1)
// insert  o(n) 插入
// 查找插入位置如果用遍历查找的是O(n)，用二分查找是O(log2n)。
// 但是数组的插入操作需要将插入位置后的元素全部后移一位，这需要O(n)。
// 所以总的时间复杂度是O(n)。（O(n)+O(n)=O(n)，O(log2n)+O(n)=O(n)）
// delete o(n) 
// lookup o(1) 查找 任何位置都是一样的 O(1)
 **/

 /**
 LinkedLinst时间复杂度
 prepend O(1)
 append  O(1)
 insert  O(1)
 delete  O(1)
 lookup  O(n)
  **/


// LinkedList


let Node = function (element) {
  this.element = element;
  this.next = null;
};
/**
 * 
 */
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  // 向链表中添加节点
  append(element) {
    let node = new Node(element);
    // 如果当前链表为空，则将head指向node
    if (this.head === null) this.head = node;
    else {
      // 否则，找到链表尾部的元素，然后添加新元素
      let current = this.getElementAt(this.length - 1);
      current.next = node;
    }

    this.length++;
  }

  insert(position, element) {
    // position不能超出边界值
    if (position < 0 || position > this.length) return false;

    let node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.getElementAt(position - 1);
      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }
  removeAt(position) {} // 删除链表中指定位置的元素，并返回这个元素的值

  remove(element) {} // 删除链表中对应的元素

  indexOf(element) {} // 在链表中查找给定元素的索引

  getElementAt(position) { // 查找返回链表中索引所对应的元素  O(n)
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current;
  }
  isEmpty() {} // 判断链表是否为空

  size() {} // 返回链表的长度

  getHead() {} // 返回链表的头元素

  clear() {} // 清空链表

  toString() {} // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
}

let linkedList1 = new LinkedList()
linkedList1.append('100')
linkedList1.append('200')
console.log(linkedList1)