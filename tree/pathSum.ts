//https://leetcode.com/problems/path-sum/editorial/

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;

  function calculate(root: TreeNode | null, tmpSum: number): boolean {
    if (!root) return false;

    if (!root.left && !root.right && tmpSum - root.val === 0) return true;

    return (
      calculate(root.left, tmpSum - root.val) ||
      calculate(root.right, tmpSum - root.val)
    );
  }

  return calculate(root, targetSum);
}
