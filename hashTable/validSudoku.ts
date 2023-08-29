//https://leetcode.com/problems/valid-sudoku/

function isValidSudoku(board: string[][]): boolean {
    let rowMapArr: Set<string>[] =  []
    let colMapArr: Set<string>[] = []
    let boxMapArr: Set<string>[] = []

    Array(9).fill(0).forEach((_, i) => {
        rowMapArr[i] = new Set<string>()
        colMapArr[i] = new Set<string>()
        boxMapArr[i] = new Set<string>()
    })

    for(let i = 0; i < 9; i ++) {
        for(let j = 0; j < 9; j ++) {
            const currentVal = board[i][j]

            if(currentVal === ".") continue

            if(rowMapArr[i].has(currentVal)) return false
            rowMapArr[i].add(currentVal)

            if(colMapArr[j].has(currentVal)) return false
            colMapArr[j].add(currentVal)

            const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3) 
            if(boxMapArr[boxIndex].has(currentVal)) return false
            boxMapArr[boxIndex].add(currentVal)
        }
    }


    return true
};