//https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1207/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return head;
  let prev = new ListNode(0);
  prev.next = head;
  let sentinel: ListNode | null = prev;
  let currentNode: ListNode | null = prev.next;

  while (currentNode) {
    if (currentNode.val === val) {
      prev.next = currentNode.next;
    } else {
      prev = currentNode;
    }

    currentNode = prev.next;
  }

  return sentinel.next;
}
