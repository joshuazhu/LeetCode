//https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1208/

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
    }
  }

  function oddEvenList(head: ListNode | null): ListNode | null {    
    if(!head || !head.next) return head

    let sentinelOdd = new ListNode(0)
    sentinelOdd.next = head

    let sentinelEven = new ListNode(0)
    sentinelEven.next = head.next

    let currentNode = head
    
    let isOdd: boolean = true

    while(currentNode.next && currentNode.next.next) {
        let tmpNode = currentNode.next
        currentNode.next = currentNode.next.next
        currentNode = tmpNode
        isOdd = !isOdd
    }
    
    if(isOdd) {
        currentNode.next = sentinelEven.next    
    } else {
        currentNode.next!.next = sentinelEven.next
        currentNode.next = null
    }

    return sentinelOdd.next
};