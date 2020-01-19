/*
  Given a binary tree and an integer k, filter the binary tree such that its leaves don't contain the value k. Here are the rules:

  - If a leaf node has a value of k, remove it.
  - If a parent node has a value of k, and all of its children are removed, remove it.

  Here's an example and some starter code:

  class Node:
    def __init__(self, value, left=None, right=None):
      self.value = value
      self.left = left
      self.right = right

    def __repr__(self):
      return f"value: {self.value}, left: ({self.left.__repr__()}), right: ({self.right.__repr__()})"

  def filter(tree, k):
    # Fill this in.

  #      1
  #    /   \
  #   1     1
  #  / \   / \
  # 1   1 2   1
  n6 = Node(2)
  n7 = Node(1)
  n5 = Node(1)
  n4 = Node(1)
  n3 = Node(1, n6, n7)
  n2 = Node(1, n4, n5)
  n1 = Node(1, n2, n3)

  print(filter(n1, 1))
  #      1
  #        \
  #         1
  #        /
  #       2
  # value: 1, left: (value: 1, left: (value: 2, left: (None), right: (None)), right: (None)), right: (None)
*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left,
      this.right = right
  }

  print() {
    console.log(`Value: ${this.value} Left: ${this.left} right: ${this.right}`)
  }

  isLeaveNode() {
    return !this.left && !this.right;
  }
}

const filter = (tree, k) => {
  if (!tree) return;

  if (tree.left) {
    tree.left = filter(tree.left, k);
  }

  if (tree.right) {
    tree.right = filter(tree.right, k);
  }

  if (!tree.left && !tree.right && tree.value === k) {
    return;
  }

  return tree;
}

const n6 = new TreeNode(2)
const n7 = new TreeNode(1)
const n5 = new TreeNode(1)
const n4 = new TreeNode(1)
const n3 = new TreeNode(1, n6, n7)
const n2 = new TreeNode(1, n4, n5)
const n1 = new TreeNode(1, n2, n3)

console.log('after', filter(n1, 1));

