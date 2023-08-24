//https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2804/

function totalNQueens(n: number): number {
    let board: number[][] = []
    let queen: number[][] = []

    let numberOfResults = 0

    for(let i = 0; i < n; i ++) {
        board[i] = []
        queen[i] = []
    }

    const directions: [number, number][] = [
        //left up
        [-1, -1],
        //right up
        [-1, 1],
        //left down
        [1, -1],
        //right down
        [1, 1]
    ]


    function updateBoard(attack: number[][], indexX: number, indexY: number) {
        // n, m

        for(let i = 0; i < board.length; i ++) {
            attack[indexX][i] = 1
        }

        for(let j = 0; j < attack.length; j++) {
            attack[j][indexY] = 1
        }

        directions.forEach(direction => {
            let i = indexX, j = indexY

            while(i >= 0 && i < n && j >= 0 && j < n) {
                attack[i][j] = 1
                i+=direction[0]
                j+=direction[1]
            }
        })

        return attack
    }

    function placeQueen(attack: number[][], q: number[][], queenIndex: number) {
        
        if(queenIndex === n) {
            numberOfResults++
            return
        }

        for(let i = 0; i < n; i++) {
            if(!attack[queenIndex][i]) {
                const bp = attack.map(a => a.slice())
                q[queenIndex][i] = 2
                updateBoard(attack, queenIndex, i)
                placeQueen(attack, q, queenIndex+1)
                attack = bp
                q[queenIndex][i] = 0
            } 
        }
    }

    placeQueen(board, queen, 0)
    return numberOfResults
};

totalNQueens(4)