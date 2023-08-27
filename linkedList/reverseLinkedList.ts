//https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1205/

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
    }
  }

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null
    
    let currentHead = head
    
    while(head.next) {
        let p = head.next
        head.next = p.next
        p.next = currentHead
        currentHead = p
    }   

    return currentHead 
    

};