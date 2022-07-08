/**
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 */

class Node {
  value: string;
  next: Node;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findMiddleOfLinkedList = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

export const run = () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);

  console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);

  head.next.next.next.next.next = new Node(6);
  console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);

  head.next.next.next.next.next.next = new Node(7);
  console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);
};
