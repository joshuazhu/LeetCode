class Node {
  value: number;
  next: Node;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const hasCycle = function (head) {
  let slowerCursor = head;
  let fastCursor = head;

  while (fastCursor !== null && fastCursor.next !== null) {
    fastCursor = fastCursor.next.next;
    slowerCursor = slowerCursor.next;

    if (fastCursor === slowerCursor) {
      return true;
    }
  }

  return false;
};

export const run = () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  console.log(`LinkedList has cycle: ${hasCycle(head)}`);

  head.next.next.next.next.next.next = head.next.next;
  console.log(`LinkedList has cycle: ${hasCycle(head)}`);

  head.next.next.next.next.next.next = head.next.next.next;
  console.log(`LinkedList has cycle: ${hasCycle(head)}`);
};
