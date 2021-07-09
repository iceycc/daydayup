function hasCycle(head){
  while(head){
    if(head.flag){
      return true;
    }else{
      head.flag = true;
      head = head.next
    }
  }
  return false;
}


function hasCycle2(head){
  if(!head || !head.next) return false
  let slow = head
  let fast = head.next
  while(fast != slow){
    if(!fast || !fast.next) return false
    slow = slow.next;
    fast = fast.next;
  }
  return true
}