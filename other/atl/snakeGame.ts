class SnakeGame {

  //1. board, initialised with 0
  //2. snake, queue with [row, col]
  //3. Set to store each of the snake element  <`row-col`, []>
  //3. check snake move valid. If not valid, return -1
  //   if valid, check if eat food, if not, add head and dequeue the body
  //   if eat food add head and continue
  board: number[][]
  snakeQueue: number[][]
  snakeBodySet: Set<string>
  food: number[][]

  constructor(width: number, height: number, food: number[][]) {
    this.board = Array.from(Array(height), () => new Array(width))
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        this.board[i][j] = 0
      }
    }

    this.snakeQueue = [[0, 0]]
    this.snakeBodySet = new Set<string>()
    this.snakeBodySet.add(`0-0`)
    this.food = food
  }

  isValidPosition(position: number[]): boolean {
    if (position[0] < 0
      || position[0] > this.board.length - 1
      || position[1] < 0
      || position[1] > this.board[0].length - 1
    ) return false

    if (this.snakeBodySet.has(`${position[0]}-${position[1]}`)) return false

    return true
  }

  updateSnakeBody(position: number[]) {
    const currentFood = this.food[0]

    this.snakeQueue.push(position)
    this.snakeBodySet.add(`${position[0]}-${position[1]}`)

    if (this.snakeBodySet.has(`${currentFood[0]}-${currentFood[1]}`)) {
      const toBeRemovedBody = this.snakeQueue.shift()
      this.snakeBodySet.delete(`${toBeRemovedBody![0]}-${toBeRemovedBody![1]}`)
    } else if (currentFood && currentFood[0] === position[0] && currentFood[1] === position[1]) {
      this.food.shift()
    } else {
      const toBeRemovedBody = this.snakeQueue.shift()
      this.snakeBodySet.delete(`${toBeRemovedBody![0]}-${toBeRemovedBody![1]}`)
    }
  }

  move(direction: string): number {
    const moves: {
      [key: string]: [number, number]
    } = {
      "U": [-1, 0],
      "D": [1, 0],
      "L": [0, -1],
      "R": [0, 1]
    }

    const snakeHead = this.snakeQueue[this.snakeQueue.length - 1]
    const newPostion = [snakeHead[0] + moves[direction][0], snakeHead[1] + moves[direction][1]]

    if (!this.isValidPosition(newPostion)) {
      return -1
    }

    this.updateSnakeBody(newPostion)

    return this.snakeQueue.length - 1
  }
}
