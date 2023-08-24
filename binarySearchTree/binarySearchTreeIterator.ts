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

  class BSTIterator {
    stack: TreeNode []
    currentNode: TreeNode | null

    constructor(root: TreeNode | null) {
        this.currentNode = root
        this.stack = []

        while(this.currentNode) {
            this.stack.push(this.currentNode)
            this.currentNode = this.currentNode.left
        }
    }

    next(): number {
        this.currentNode = this.stack.pop()!
        
        const result = this.currentNode.val
        
        if(this.currentNode.right) {
            this.currentNode = this.currentNode.right
            while(this.currentNode) {
                this.stack.push(this.currentNode)
                this.currentNode = this.currentNode.left
            }
        }

        return result
    }

    hasNext(): boolean {
        return this.stack.length !== 0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */