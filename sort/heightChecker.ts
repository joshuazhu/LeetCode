//https://leetcode.com/explore/learn/card/sorting/694/comparison-based-sorts/4484/


function heightChecker(heights: number[]): number {
    const occurency: {[key : number]: number} = {}
    
    heights.forEach((v) => occurency[v] = !occurency[v] ? 1 : occurency[v] + 1)

    let currentHeight = 0
    let res = 0

    for(let i = 0; i < heights.length; i ++) {
        while(!occurency[currentHeight]) currentHeight++
        console.log(currentHeight, heights[i])

        if(currentHeight !== heights[i]) res ++
 
        occurency[currentHeight] --
        
    }

    return res
};