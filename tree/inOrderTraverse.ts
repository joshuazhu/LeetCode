//https://leetcode.com/problems/binary-tree-inorder-traversal/editorial/

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

function inorderTraversal(root: TreeNode | null): number[] {
    let stack: TreeNode [] = []
    let result: number[] = []

    let currentNode: TreeNode | null = root
    
    while(stack.length > 0 || currentNode !== null){
        while(currentNode !== null) {
            stack.push(currentNode)
            currentNode = currentNode.left
        }

        currentNode = stack.pop()!
        result.push(currentNode.val)
        currentNode = currentNode.right
    } 

    return result
};