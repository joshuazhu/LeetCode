//https://leetcode.com/problems/intersection-of-two-linked-lists

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
    }
  }

//https://leetcode.com/problems/intersection-of-two-linked-lists

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let nodes: ListNode[] = []
    let firstHead
    let secondHead

    while(firstHead) {
        nodes.push(firstHead)
        firstHead = firstHead.next
    }

    while(secondHead){
        if(nodes.includes(secondHead)) return secondHead
        secondHead = secondHead.next
    }

    return null
};