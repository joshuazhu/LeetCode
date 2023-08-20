function pivotIndex(nums: number[]): number {
    if (nums.length === 0) return -1;
  
    let leftSum = 0;
    let rightSum = nums
      .slice(1, nums.length + 1)
      .reduce((cur, acc) => cur + acc, 0);
   
    let index = 0
  
      while(index <= nums.length) {
          if (leftSum === rightSum) {
              return index === nums.length ? 0 : index;
          }
  
          index++
  
          leftSum += nums[index-1];
          rightSum -= nums[index];
      }
  
    return -1;
  }
  
  
  console.log(pivotIndex([1,7,3,6,5,6]))