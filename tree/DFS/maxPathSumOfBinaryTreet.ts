//https://leetcode.com/problems/binary-tree-maximum-path-sum/

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


function maxPathSum(root: TreeNode | null): number {
  let maxResult = Number.NEGATIVE_INFINITY

  function calculate(root: TreeNode | null): number {
    if (root === null) return 0

    let leftSum = calculate(root.left)
    let rightSum = calculate(root.right)

    let currentSum = Math.max(leftSum, rightSum, 0) + root.val
    maxResult = Math.max(Math.max(leftSum, 0) + Math.max(rightSum, 0) + root.val, maxResult)

    return currentSum
  }

  calculate(root)

  return maxResult
};
