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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    //1. search from the root
    //2. if val < root.left, search in the left sub tree
    //3. if val > root.right, search in the right sub tree
    //4. when reach leaf, inset the node

    function insert(node: TreeNode, val: number) {
        
        if(val < node.val ) {
            if(node.left) return insert(node.left, val)
            else node.left = new TreeNode(val)
            
            return
        }
        
        if(node.right) return insert(node.right, val)
        else node.right = new TreeNode(val)

        return
    }
    
    if(root === null) {
        root = new TreeNode(val)
    } else {
        insert(root, val)
    }

    return root
};
