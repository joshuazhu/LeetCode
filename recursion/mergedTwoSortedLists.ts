class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // smallerNode -> mergedTwoLists()

  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    const head = list1;
    head.next = mergeTwoLists(list1.next, list2);

    return head;
  } else {
    const head = list2;
    head.next = mergeTwoLists(list1, list2.next);

    return head;
  }
}
