//https://leetcode.com/problems/count-univalue-subtrees/editorial/

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


function countUnivalSubtrees(root: TreeNode | null): number {
  let result = 0

  if (!root) return 0

  function calculate(node: TreeNode): number {
    if (!node.left && !node.right) {
      result++
      return node.val
    }

    let isUniValueTree = false
    if (node.left && !node.right) {
      isUniValueTree = node.val === calculate(node.left)
    }

    if (node.right && !node.left) {
      isUniValueTree = node.val === calculate(node.right)
    }

    if (node.left && node.right) {
      let leftValue = calculate(node.left)
      let rightValue = calculate(node.right)
      isUniValueTree = node.val === leftValue && node.val === rightValue
    }

    if (isUniValueTree) {
      result++
      return node.val
    } else {
      return -1001
    }
  }

  calculate(root)

  return result
}
