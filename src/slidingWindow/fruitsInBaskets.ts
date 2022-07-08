/**
 * You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.
 * You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:
 *   1. Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
 *   2. You can start with any tree, but you can’t skip a tree once you have started.
 *   3. You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
 * Write a function to return the maximum number of fruits in both baskets.
 *
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 */

const fruitsIntoBaskets = (fruits: string[]) => {
  const maxDistinguishChars = 2;
  let startWindow = 0;
  let result = 0;

  const fruitFrequency = new Map<string, number>();

  for (let endWindow = 0; endWindow < fruits.length; endWindow++) {
    const currentFruit = fruits[endWindow];
    fruitFrequency.set(
      currentFruit,
      (fruitFrequency.get(currentFruit) || 0) + 1,
    );

    while (fruitFrequency.size > maxDistinguishChars) {
      const startFruit = fruits[startWindow];
      const startFruitFrequency = fruitFrequency.get(startFruit);

      if (startFruitFrequency - 1 === 0) {
        fruitFrequency.delete(startFruit);
      } else {
        fruitFrequency.set(startFruit, startFruitFrequency - 1);
      }

      startWindow++;
    }

    result = Math.max(result, endWindow - startWindow + 1);
  }

  return result;
};

export const run = () => {
  console.log(
    "['A', 'B', 'C', 'A', 'C']",
    fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']),
  );
  console.log(
    "['A', 'B', 'C', 'B', 'B', 'C']",
    fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']),
  );
};
