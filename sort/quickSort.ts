function quickSort (nums: number[]): number[] {
    function sort (nums: number[], start: number, end: number) {
        if(start >= end) return

        const pivot = nums[end]
        let fastIndex = start
        let slowIndex = start

        for(; fastIndex < end; fastIndex++) {
            if(nums[fastIndex] < pivot) {
                const tmp = nums[slowIndex]
                nums[slowIndex] = nums[fastIndex]
                nums[fastIndex] = tmp

                slowIndex++
            }
        }

        nums[end] = nums[slowIndex]
        nums[slowIndex] = pivot

        sort(nums, start, slowIndex - 1)
        sort(nums, slowIndex + 1, end)
    }

    sort(nums, 0, nums.length-1)

    return nums
}


