class Node {
  value: number;
  next: Node;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findCycleLength(head: Node) {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return calculateCycleLength(slow, fast);
    }
  }

  return 0;
}

function calculateCycleLength(slow: Node, fast: Node) {
  let cycleLength = 1;
  slow = slow.next;

  while (slow !== fast) {
    slow = slow.next;
    cycleLength++;
  }

  return cycleLength;
}

export const run = () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = head.next.next;
  console.log(`LinkedList cycle length: ${findCycleLength(head)}`);

  head.next.next.next.next.next.next = head.next.next.next;
  console.log(`LinkedList cycle length: ${findCycleLength(head)}`);
};
