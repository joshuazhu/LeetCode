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

export const isValidBST = (root: TreeNode | null): boolean => {
  const validate = (
    node: TreeNode | null,
    low: number,
    high: number
  ): boolean => {
    if (!node) return true;

    if (node.val <= low || node.val >= high) return false;

    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  };

  return validate(root, -Infinity, Infinity);
};
