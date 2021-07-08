
const l1 = {
  value:1,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:4,
        next:{
          value:5,
          next:{
            value:6,
            next:{
              value:7,
              next:{
                value:8,
                next:null
              }
            }
          }
        }
      }
    }
  }
}
function LinkNode(value){
  this.value = value;
  this.next = null;
}
function removeNthFromEnd(head,n){
    const dummy = new LinkNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy
    while(n!=0){
      n--
      fast = fast.next
    }

    while(fast.next){
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}


// console.log(JSON.stringify(removeNthFromEnd(l1,2)))

// 反转
function reverseList(head){
  let pre = null;
  let cur = head;
  while(cur!=null){
    let next = cur.next;
    cur.next = pre;
    pre = cur; //
    cur = next; // 后移
  }
  return pre
}
function reverseList1(head){
  if(head===null || head.next===null){
    return head
  }
  let ret = reverseList1(head.next)
  head.next.next = head
  head.next = null
  return ret
}
console.log(JSON.stringify(reverseList1(l1)))

function reverseBetween(head,m,n){
  // pre前驱，cur当前节点，leftHead保存反转区间前面的节点
  let pre,cur,leftHead
  const dummy = new LinkNode()
  dummy.next = head
  let p = dummy
  for(let i=0;i<m-1;i++){
    p=p.next;
  }
  leftHead = p;
  
  let start = p.next; // 反转开始
  pre = start
  cur = start.next; // 当前节点
  for(let i=0;i<n-m;i++){
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next
  }
  leftHead.next = pre;
  start.next = cur;
  return dummy.next;
}
// console.log(JSON.stringify(reverseBetween(l1,3,6)))



