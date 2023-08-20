class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  const reverseRec = (node: ListNode | null): ListNode | null => {
    if (!node || !node.next) {
      return node;
    }

    const head = reverseRec(node.next);
    node.next.next = node;
    node.next = null;

    return head;
  };

  return reverseRec(head);
}
