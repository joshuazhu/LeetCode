//https://leetcode.com/problems/linked-list-cycle/

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
    }
  }

function hasCycle(head: ListNode | null): boolean {
    if(!head || !head.next) return false

    let slowPointer: ListNode | null = head
    let fastPointer: ListNode | null = head.next

    while(slowPointer && fastPointer && fastPointer.next) {
        if(slowPointer === fastPointer) return true

        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    return false
};