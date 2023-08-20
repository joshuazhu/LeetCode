function getRow(rowIndex: number): number[] {
  const cache: {
    [key: string]: number;
  } = {};

  const pascalTriangleElement = (x: number, y: number) => {
    if (y === 1 || x === y - 1) {
      cache[`${x}-${y}`] = 1;
      return 1;
    }

    if (cache[`${x}-${y}`]) {
      return cache[`${x}-${y}`];
    }

    const element =
      pascalTriangleElement(x - 1, y - 1) + pascalTriangleElement(x - 1, y);
    cache[`${x}-${y}`] = element;

    return element;
  };

  let result: number[] = [];

  for (let i = 0; i <= rowIndex; i++) {
    result.push(pascalTriangleElement(rowIndex, i + 1));
  }

  return result;
}

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
