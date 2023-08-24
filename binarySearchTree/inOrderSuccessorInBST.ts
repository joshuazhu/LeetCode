//https://leetcode.com/problems/inorder-successor-in-bst/editorial/

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

function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null {
  let successor: TreeNode | null = null;
  function search(root: TreeNode | null) {
    if (root !== null) {
      if (p!.val >= root.val) return search(root.right);
      else successor = root;
      return search(root.left);
    }
  }

  search(root);
  return successor;
}
