//https://leetcode.com/problems/cherry-pickup/description/
//This is a greedy algorithm solution, and cannot find the best answer
//Better answer is to use DP

function cherryPickup(grid: number[][]): number {
  function goDown(grid: number[][], result: number, currentX: number, currentY: number) {
    const gridCopy: number[][] = []

    grid.forEach(g => gridCopy.push(g.slice()))

    if (currentX < 0 || currentY < 0 || currentX >= gridCopy.length || currentY >= gridCopy.length) return [-1, gridCopy]

    const currentCell = gridCopy[currentX][currentY]
    if (currentCell === 1) {
      result += 1
      gridCopy[currentX][currentY] = 0
    } else if (currentCell === -1) {
      return [-1, gridCopy]
    }

    if (currentX === currentY && currentX === gridCopy.length - 1) {
      return [result, gridCopy]
    }

    const rightSum = goDown(gridCopy, result, currentX, currentY + 1)
    const downSum = goDown(gridCopy, result, currentX + 1, currentY)

    if (rightSum[0] > downSum[0]) return rightSum
    return downSum
  }

  function goUp(grid: number[][], result: number, currentX: number, currentY: number) {
    const gridCopy: number[][] = []

    grid.forEach(g => gridCopy.push(g.slice()))

    if (currentX < 0 || currentY < 0 || currentX >= grid.length || currentY >= grid.length) return [-1, grid]

    const currentCell = grid[currentX][currentY]

    if (currentCell === 1) {
      result += 1
      grid[currentX][currentY] = 0
    } else if (currentCell === -1) {
      return [-1, grid]
    }

    if (currentX === currentY && currentX === 0) {
      return [result, grid]
    }

    const leftSum = goUp(gridCopy, result, currentX, currentY - 1)
    const upSum = goUp(gridCopy, result, currentX - 1, currentY)

    if (leftSum[0] > upSum[0]) return leftSum
    return upSum
  }

  const goDownSum = goDown(grid, 0, 0, 0)

  if (goDownSum[0] === -1) return 0

  const goUpSum = goUp(goDownSum[1], 0, grid.length - 1, grid.length - 1)
  return goDownSum[0] + goUpSum[0]
};
