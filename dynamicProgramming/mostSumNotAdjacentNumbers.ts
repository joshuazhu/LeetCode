const mostSumNotAdjacentNumbers = (nums: number[]) => {
  //opt[i] = max(vi + opt[i-2], opt[i-1])

  let opt: number[] = [];
  let results: number[][] = [];

  opt[0] = nums[0];
  results[0] = [nums[0]];

  if (nums[1] > nums[0]) {
    opt[1] = nums[1];
    results[1] = [nums[1]];
  } else {
    opt[1] = nums[0];
    results[1] = [nums[1]];
  }

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + opt[i - 2] > opt[i - 1]) {
      opt = [...opt, nums[i] + opt[i - 2]];
      results = [...results, [...results[i - 2], nums[i]]];
    } else {
      opt = [...opt, opt[i - 1]];
      results = [...results, results[i - 1]];
    }
  }

  console.log(results)
  console.log(opt)

};

mostSumNotAdjacentNumbers([1, 2, 4, 1, 7, 8, 3]);
