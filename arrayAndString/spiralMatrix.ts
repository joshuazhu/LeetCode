function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  if (matrix.length === 1 && matrix[0].length === 1) return matrix[0];

  let result: number[] = [];

  let i = 0,
    j = 0;

  let boundaryI: [number, number] = [0, matrix.length - 1];
  let boundaryJ: [number, number] = [0, matrix[0].length - 1];

  let directions: "left" | "right" | "up" | "down" = "right";

  while (result.length < matrix.length * matrix[0].length) {
    result.push(matrix[i][j]);

    switch (directions) {
      case "left":
        if (j - 1 < boundaryJ[0]) {
          directions = "up";
          boundaryI[1] = i - 1;
          i--;
          continue;
        }

        j--;
        continue;

      case "right":
        if (j + 1 > boundaryJ[1]) {
          directions = "down";
          boundaryI[0] = i + 1;
          i++;
          continue;
        }

        j++;
        continue;

      case "up":
        if (i - 1 < boundaryI[0]) {
          directions = "right";
          boundaryJ[0] = j + 1;
          j++;
          continue;
        }

        i--;
        continue;

      case "down":
        if (i + 1 > boundaryI[1]) {
          directions = "left";
          boundaryJ[1] = j - 1;
          j--;
          continue;
        }

        i++;
        continue;
    }
  }

  return result;
}
