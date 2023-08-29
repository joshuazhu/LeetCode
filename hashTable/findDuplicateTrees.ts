//https://leetcode.com/problems/find-duplicate-subtrees/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  let map = new Map<string, number>();
  let results: TreeNode[] = [];

  function traverse(node: TreeNode | null) {
    if (node === null) return "";

    const id = `(${traverse(node.left)})${node.val}(${traverse(node.right)})`;

    map.set(id, (map.get(id) || 0) + 1);
    if (map.get(id) === 2) results.push(node);

    return id;
  }

  traverse(root);

  return results;
}
