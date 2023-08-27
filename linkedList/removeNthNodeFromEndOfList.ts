//https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1296/

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
    }
  }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let count = 0
    let prev = new ListNode(0)
    prev.next = head
    let newhead = prev
    
    let slowPointer: ListNode | null = prev
    let fastPointer: ListNode | null = prev

    while(fastPointer && count < n) {
        count++
        fastPointer = fastPointer.next
    }

    while(fastPointer) {
        slowPointer = slowPointer!.next
        fastPointer = fastPointer.next
    }

    if(slowPointer!.next && slowPointer) {
        slowPointer.next = slowPointer.next.next
    }


    return newhead.next
};