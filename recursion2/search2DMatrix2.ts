
// https://leetcode.com/problems/search-a-2d-matrix-ii/editorial/
function searchMatrix(matrix: number[][], target: number): boolean {
    const search = (left: number, up: number, right: number, down: number ): boolean => {
        if(left > right || up > down) return false

        if(matrix[up][left] > target || matrix[down][right] < target) return false

        let mid = left + Math.floor((right-left) / 2)

        let row = up
        
        while(row <= down && matrix[row][mid] <= target) {
            if(matrix[row][mid] === target) {
                return true
            }
            row ++
        }

        return search(left, row, mid-1, down) || search(mid+1, up, right, row-1)
    }

    return search(0, 0, matrix[0].length-1, matrix.length-1)
};