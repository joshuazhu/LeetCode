//https://leetcode.com/problems/kth-largest-element-in-a-stream/editorial/

export class Node {
  left: Node | null;
  right: Node | null;
  val: number;
  cnt: number;

  constructor(val: number, cnt: number) {
    this.val = val;
    this.cnt = cnt;
  }
}

class KthLargest {
  k: number;
  bstRoot: Node | null;

  constructor(k: number, nums: number[]) {
    this.k = k;

    nums.forEach((v) => this.add(v));
  }

  findKLargestElement(kk: number, currentNode: Node | null): number {
    if (!currentNode) return 0;

    const currentCount = currentNode.right ? currentNode.right.cnt + 1 : 1;

    if (currentCount === kk) return currentNode.val;
    if (currentCount < kk)
      return this.findKLargestElement(kk - currentCount, currentNode.left);
    else return this.findKLargestElement(kk, currentNode.right);
  }

  add(val: number): number {
    const newNode = new Node(val, 1);

    if (!this.bstRoot) {
      this.bstRoot = newNode;

      if (this.k === 1) return val;
      else return -1;
    }

    let node = this.bstRoot;

    while (node !== null) {
      if (val < node.val) {
        node.cnt++;

        if (!node.left) {
          node.left = newNode;
          break;
        }

        node = node.left;
      } else {
        node.cnt++;

        if (!node.right) {
          node.right = newNode;
          break;
        }

        node = node.right;
      }
    }

    return this.findKLargestElement(this.k, this.bstRoot);
  }
}
