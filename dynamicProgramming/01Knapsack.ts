//Given N items where each item has some weight and profit associated with it and also given a bag with capacity W,  maximum possible profits

class Bag {
  profit: number;
  weight: number;

  constructor(profit: number, weight: number) {
    this.profit = profit;
    this.weight = weight;
  }
}

const max1 = (num1: number, num2: number) => (num1 > num2 ? num1 : num2);

const zeroOneKnapsack = (totalWeight: number, bags: Bag[]) => {
  //opt = max(wi + opt(prev(i-1)), opt(i-1))

  const subsets: number[][] = [];

  for (let i = 0; i < bags.length; i++) {
    subsets[i] = []
    subsets[i][0] = 0;
  }

  for (let w = 0; w <= totalWeight; w++) {
    subsets[0][w] = bags[0].weight <= w ? bags[0].profit : 0;
  }

  console.log(subsets)

  for (let i = 1; i < bags.length; i++) {
    for (let w = 1; w <= totalWeight; w++) {
      if (bags[i].weight > w) {
        subsets[i][w] = subsets[i - 1][w]
      } else {
        subsets[i][w] = max1(bags[i].profit + subsets[i - 1][w - bags[i].weight], subsets[i - 1][w])
      }
    }
  }

  return subsets
};

const zeroOneKnapsackRecursive = (totalWeight: number, bags: Bag[]) => {
  let result: number = 0

  function calculate(currentValue: number, remainingWeight: number, bags: Bag[]) {
    result = Math.max(currentValue, result)

    if (remainingWeight < 1) return

    if (bags.length < 1) return

    const currentBag = bags[bags.length - 1]

    if (remainingWeight < currentBag.weight) {
      return calculate(currentValue, remainingWeight, bags.slice(0, bags.length - 1))
    }

    calculate(currentValue, remainingWeight, bags.slice(0, bags.length - 1))
    calculate(currentValue + currentBag.profit, remainingWeight - currentBag.weight, bags.slice(0, bags.length - 1))
  }

  calculate(0, totalWeight, bags)

  return result
}

console.log(zeroOneKnapsackRecursive(4, [new Bag(1, 4), new Bag(2, 5), new Bag(3, 1)]));
console.log(zeroOneKnapsackRecursive(4, [new Bag(1, 1), new Bag(2, 1), new Bag(4, 2), new Bag(5, 2)]));
