class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  function findSuccessor(currentNode: TreeNode | null, key: number): TreeNode | null {
    if (currentNode === null) return null;

    currentNode = currentNode.right;

    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  function deleteBTSNode(node: TreeNode | null, key: number): TreeNode | null {
    if (node === null) return null;

    if (node.val === key) {
      if (node.left === null) return node.right;

      if (node.right === null) return node.left;

      let successor = findSuccessor(root, key);

      node.val = successor!.val;

      node.right = deleteNode(node.right, successor!.val);
    }

    if (node.val < key) {
      node.right = deleteNode(node.right, key);
    }

    if (node.val > key) {
      node.left = deleteNode(node.left, key);
    }

    return node;
  }

  return deleteBTSNode(root, key);
}
