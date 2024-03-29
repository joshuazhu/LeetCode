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

export const searchBST = (
  root: TreeNode | null,
  val: number
): TreeNode | null => {
  if (!root) return null;

  if (val === root.val) return root;

  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);

  return null;
};
