/**
 * Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 */

class Node {
  value: string;
  next: Node;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findCycleStart = function (head) {
  let pointerLeft = head;
  let pointerRight = head;

  const cycleLength = findCycleLength(head);

  if (cycleLength === 0) {
    return null;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    for (let i = 0; i < cycleLength; i++) {
      pointerRight = pointerRight.next;
    }

    if (pointerLeft === pointerRight) {
      return pointerLeft;
    }

    pointerLeft = pointerLeft.next;
    pointerRight = pointerRight.next;
  }
};

const findCycleLength = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return calculateCycleLength(slow);
  }

  return 0;
};

const calculateCycleLength = function (node) {
  let currentNode = node.next;
  let length = 1;

  while (currentNode !== node) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
};

export const run = () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);

  head.next.next.next.next.next.next = head.next.next;
  console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);

  head.next.next.next.next.next.next = head.next.next.next;
  console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);

  head.next.next.next.next.next.next = head;
  console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);
};
