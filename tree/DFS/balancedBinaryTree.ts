//https://leetcode.com/problems/balanced-binary-tree/

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


function isBalanced(root: TreeNode | null): boolean {
  let result = true
  function calculate(root: TreeNode | null): number {
    if (root === null) return 0

    let leftHeight = calculate(root.left)
    let rightHeight = calculate(root.right)

    if (Math.abs(leftHeight - rightHeight) > 1) {
      result = false
    }

    return Math.max(leftHeight, rightHeight) + 1
  }

  calculate(root)
  return result
};
