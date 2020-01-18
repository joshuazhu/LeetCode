/*
  Given a square 2D matrix (n x n), rotate the matrix by 90 degrees clockwise.

  Here's an example and some starting code:

  def rotate(mat):
    # Fill this in.

  mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  # Looks like
  # 1 2 3
  # 4 5 6
  # 7 8 9

  # Looks like
  # 7 4 1
  # 8 5 2
  # 9 6 3
  print(rotate(mat))
  # [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
 */
const rotate = mat => {
  let roatedMat = [];
  for(let col = 0; col < mat.length; col ++) {
    let roatedRow = [];
    for(let row = mat.length - 1; row >= 0; row --) {
      roatedRow = [...roatedRow, mat[row][col]];
    }
    roatedMat = [...roatedMat, roatedRow];
  }

  return roatedMat;
}