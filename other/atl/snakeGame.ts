//https://leetcode.com/problems/design-snake-game/

class SnakeGame {
  snakeQueue: number[][]
  food: number[][]
  currentHead: number[]
  width: number
  height: number

  constructor(width: number, height: number, food: number[][]) {
    this.snakeQueue = [[0, 0]]
    this.food = food
    this.currentHead = [0, 0]
    this.width = width
    this.height = height
  }

  isValidHead(head: number[]): boolean {
    console.log(this.currentHead)
    console.log(this.snakeQueue)

    //out of boundary
    if (head[0] > this.height - 1 || head[0] < 0) return false
    if (head[1] > this.width - 1 || head[1] < 0) return false

    //check if head occupies the body

    for (let i = 0; i < this.snakeQueue.length; i++) {
      if (head[0] === this.snakeQueue[i][0] && head[1] === this.snakeQueue[i][1]) {
        return false
      }
    }

    return true
  }

  getNextFood(): number[] | null {
    let currentFood = this.food[0]

    if (!currentFood) {
      return null
    }

    for (let i = 0; i < this.snakeQueue.length; i++) {
      if (currentFood[0] === this.snakeQueue[i][0] && currentFood[1] === this.snakeQueue[i][1]) {
        return null
      }
    }

    return currentFood
  }

  move(direction: string): number {
    let directions: {
      [key: string]: number[]
    } = {
      "L": [0, -1],
      "R": [0, 1],
      "U": [-1, 0],
      "D": [1, 0]
    }
    this.currentHead[0] += directions[direction][0]
    this.currentHead[1] += directions[direction][1]

    let nextFood = this.getNextFood()

    //if not eat a food
    if (!nextFood || this.currentHead[0] !== nextFood[0] || this.currentHead[1] !== nextFood[1]) {
      this.snakeQueue.shift()
    } else {
      this.food.shift()
    }

    if (this.isValidHead(this.currentHead)) {
      this.snakeQueue.push(this.currentHead.slice())
      return this.snakeQueue.length - 1
    } else {
      return -1
    }
  }
}
