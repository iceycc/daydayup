function LinkNode(val) {
  this.value = val;
  this.next = null;
}
// 1->2->4, 1->3->4
const l1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 4,
      next: null,
    },
  },
};

const l2 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 4,
      next: null,
    },
  },
};

// 递归
function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
// console.log(JSON.stringify(mergeTwoLists(l1, l2)));

// f
function mergeTwoLists2(l1, l2) {
  const preHead = new LinkNode();
  let prev = preHead;
  while (l1 != null && l2 !== null) {
    if (l1.value < l2.value) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 == null ? l2 : l1;
  return preHead.next;
}
let l3 = mergeTwoLists2(l1, l2)
console.log(JSON.stringify(l3));

function deleteDuplicates(head){
  let cur = head;
  while(cur!== null && cur.next !== null ){
    if(cur.value == cur.next.value){
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }
  return head
}
// console.log(JSON.stringify(deleteDuplicates(l3)))


function deleteDuplicates3(head){
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if(!head || !head.next) {
    return head
  }
  let dummy = new LinkNode()
  dummy.next = head;
  let cur = dummy; // 指针
  while(cur.next!== null && cur.next.next !== null ){
    if(cur.next.value == cur.next.next.value){
      let val = cur.next.value
      pre = cur.next.next
      while(cur.next && cur.next.value === val){
        cur.next = cur.next.next;
      }
    }else{
      cur = cur.next
    }
  }
  return dummy.next;
}
console.log(JSON.stringify(deleteDuplicates3(l3)))


