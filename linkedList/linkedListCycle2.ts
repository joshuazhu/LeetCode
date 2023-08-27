//https://leetcode.com/problems/linked-list-cycle-ii

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
    }
  }

function detectCycle(head: ListNode | null): ListNode | null {
    let nodes: ListNode[] = []

    while(head) {
        if(nodes.includes(head))
            return head
        nodes.push(head)
        head = head.next
    }

    return null
};