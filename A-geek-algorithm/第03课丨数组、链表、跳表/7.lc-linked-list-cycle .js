// https://leetcode-cn.com/problems/linked-list-cycle/

/**
 * 环形列表
 * 1. 暴力：遍历链表 hash/set
 * 2. 双指针：快慢指针
 */


 // 类似龟兔赛跑，一个快指针 一个慢指针 如果链表中有环的话 就会出现套圈的情况

function hasCycle(head) {
  if (head == null || head.next == null) return false
  let slow = head,
    fast = head.next
  while(slow != fast){
    if(fast == null || fast.next == null) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}