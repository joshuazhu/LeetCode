//https://leetcode.com/problems/maximum-depth-of-binary-tree/

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

function maxDepth(root: TreeNode | null): number {

  if (!root) return 0

  let queue: TreeNode[] = []
  let depth = 0
  queue.push(root)

  while (queue.length > 0) {
    let numberOfCurrentLevelNodes = queue.length

    for (let i = 0; i < numberOfCurrentLevelNodes; i++) {
      let node = queue.shift()

      if (node!.left) queue.push(node!.left)
      if (node!.right) queue.push(node!.right)
    }

    depth++
  }

  return depth
};
