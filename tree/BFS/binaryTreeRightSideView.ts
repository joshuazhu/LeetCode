//https://leetcode.com/problems/binary-tree-right-side-view/

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

function rightSideView(root: TreeNode | null): number[] {

  if (!root) return []

  let result: number[] = []
  let queue: TreeNode[] = []
  queue.push(root)

  while (queue.length > 0) {
    let numberOfCurrentLevelNodes = queue.length

    for (let i = 0; i < numberOfCurrentLevelNodes; i++) {
      const node = queue.shift()

      if (i === numberOfCurrentLevelNodes - 1) result.push(node!.val)
      if (node!.left) queue.push(node!.left)
      if (node!.right) queue.push(node!.right)
    }
  }

  return result

};
