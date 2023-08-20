export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0

    const calculate = (root, depth): void => {
        if(depth > maxDepth) {
            maxDepth = depth
        }

        if(!root.left && !root.right) {
            return
        }

        calculate(root.left, depth +1)
        calculate(root.right, depth +1)

        return
    } 

    calculate(root, 1)

    return maxDepth
};