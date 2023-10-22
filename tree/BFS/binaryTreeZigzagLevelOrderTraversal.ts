//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  let queue: TreeNode[] = []
  let results: number[][] = []
  let isLeftToRight: boolean = true

  queue.push(root)

  while (queue.length > 0) {
    const numberOfCurrentLevelNodes = queue.length
    let currentLevelNodes: number[] = []
    for (let i = 0; i < numberOfCurrentLevelNodes; i++) {
      let node = queue.shift()
      if (isLeftToRight) {
        currentLevelNodes.push(node!.val)
      } else {
        currentLevelNodes.unshift(node!.val)
      }

      if (node!.left) queue.push(node!.left)
      if (node!.right) queue.push(node!.right)
    }

    isLeftToRight = !isLeftToRight
    results.push(currentLevelNodes)
  }

  return results

};
