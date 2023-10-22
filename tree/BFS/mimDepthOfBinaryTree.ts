//https://leetcode.com/problems/minimum-depth-of-binary-tree/

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


function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  let queue: TreeNode[] = []
  let minLevel = 0
  queue.push(root)

  while (queue.length > 0) {
    const numberOfCurrentLevelNodes = queue.length

    for (let i = 0; i < numberOfCurrentLevelNodes; i++) {
      const node = queue.shift()

      if (node!.left !== null) queue.push(node!.left)
      if (node!.right !== null) queue.push(node!.right)

      if (!node!.left && !node!.right) return minLevel + 1
    }

    minLevel++
  }

  return minLevel
};
