//https://leetcode.com/problems/sum-root-to-leaf-numbers/

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

function sumNumbers(root: TreeNode | null): number {
  let result = 0
  function calculate(root: TreeNode, sum: number) {
    if (root.left === null && root.right === null) {
      sum = sum * 10 + root.val
      result += sum
      return
    }

    if (root.left) calculate(root.left, sum * 10 + root.val)
    if (root.right) calculate(root.right, sum * 10 + root.val)
  }

  calculate(root!, 0)

  return result
};
