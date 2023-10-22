//https://leetcode.com/problems/maximum-depth-of-binary-tree/

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  //if current node is null, return 0
  //if currentNode is not null
  //get result from left child and right child, and compare which one is larger
  //return the larget + 1
  function calculate(root): number {
    if (!root) return 0

    let leftSum = calculate(root.left)
    let rightSum = calculate(root.right)

    if (leftSum > rightSum) return leftSum + 1
    return rightSum + 1
  }

  return calculate(root)
}
