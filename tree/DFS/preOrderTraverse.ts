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

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = []

    let stack: TreeNode[] = []
    let currentNode: TreeNode | null = root

    while(stack.length > 0 || currentNode !== null) {
        while(currentNode !== null) {
            result.push(currentNode.val)
            stack.push(currentNode)
            currentNode = currentNode.left
        }

        currentNode = stack.pop()!
        currentNode = currentNode.right
    }

    return result
};