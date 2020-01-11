/*
  Given a 2d n x m matrix where each cell has a certain amount of change on the floor,
  your goal is to start from the top left corner mat[0][0] and end in the bottom right corner mat[n - 1][m - 1] with the most amount of change. You can only move either left or down.

  Here's some starter code:

  def max_change(mat):
    # Fill this in.

  mat = [
      [0, 3, 0, 2],
      [1, 2, 3, 3],
      [6, 0, 3, 2]
  ]

  print(max_change(mat))
  # 13
*/

const calMoveCost = (mat, row, col) => {
  const currentCost = mat[row][col];

  if (row === mat.length - 1 && col === mat[0].length - 1)
    return currentCost;

  if (row === mat.length - 1)
    return currentCost + calMoveCost(mat, row, col + 1);

  if (col === mat[0].length - 1)
    return currentCost + calMoveCost(mat, row + 1, col);

  return currentCost + Math.max(calMoveCost(mat, row, col + 1), calMoveCost(mat, row + 1, col));
}

const max_change = (mat) => {
  return calMoveCost(mat, 0, 0);
};

console.log('max_change', max_change([
  [0, 3, 0, 2],
  [1, 2, 3, 3],
  [6, 0, 3, 2]
]));
