//https://leetcode.com/problems/path-sum-ii

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let results: number[][] = []

  function calculate(root: TreeNode | null, remainingSum: number, path: number[]) {
    if (root === null) return

    if (root.left === null && root.right === null) {
      if (remainingSum - root.val === 0) results.push([...path, root.val])

      return
    }

    if (root.left) calculate(root.left, remainingSum - root.val, [...path, root.val])

    if (root.right) calculate(root.right, remainingSum - root.val, [...path, root.val])
  }

  calculate(root, targetSum, [])

  return results
};
