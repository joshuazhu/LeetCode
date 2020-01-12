/**
  Given a binary tree, find the level in the tree where the sum of all nodes on that level is the greatest.

  Here's an example and some starter code.

  class Node:
    def __init__(self, value, left=None, right=None):
      self.value = value
      self.left = left
      self.right = right

    def __repr__(self):
      return f"(Value: {self.value} Left: {self.left} Right: {self.right})"


  def tree_level_max_sum(root):
    # Fill this in.

  n3 = Node(4, Node(3), Node(2))
  n2 = Node(5, Node(4), Node(-1))
  n1 = Node(1, n2, n3)

  """
      1          Level 0 - Sum: 1
    / \
    4   5        Level 1 - Sum: 9
  / \ / \
  3  2 4 -1      Level 2 - Sum: 8

  """

  print(tree_level_max_sum(n1))
 */

class treeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left,
      this.right = right
  }

  print() {
    console.log(`Value: ${this.value} Left: ${this.left} right: ${this.right}`)
  }
}

const buildRoot = () => {
  const level2Node1 = new treeNode(3);
  const level2Node2 = new treeNode(2);
  const level2Node3 = new treeNode(4);
  const level2Node4 = new treeNode(1);

  const level1Node1 = new treeNode(4, left = level2Node1, right = level2Node2);
  const level1Node2 = new treeNode(5, left = level2Node3, right = level2Node4);

  return new treeNode(1, left = level1Node1, right = level1Node2);
}

const treeLevelMaxSum = (root) => {
  let levelSum = {};

  const calculateLevelSum = ({
    currentLevel,
    currentNode
  }) => {
    if (!currentNode)
      return;

    levelSum = {
      ...levelSum,
      [currentLevel]: currentNode.value + levelSum[currentLevel] || 0
    };

    calculateLevelSum({
      currentLevel: currentLevel + 1,
      currentNode: currentNode.left
    });

    calculateLevelSum({
      currentLevel: currentLevel + 1,
      currentNode: currentNode.right
    });
  }

  calculateLevelSum({
    currentLevel: 0,
    currentNode: root
  });

  const maxSumLevel = Object.keys(levelSum).reduce((accu, current) => {
    if (levelSum[current] > levelSum[accu])
      return current;
    return accu
  }, 0)

  return maxSumLevel;
}

const root = buildRoot();
console.log(treeLevelMaxSum(root));
