//https://leetcode.com/problems/happy-number/

function isHappy(n: number): boolean {
    let set = new Set<number>()

    function calculate(num: number): boolean {

        if(num === 1) return true
        if(num === 0) return false
        
        let tmp = 0

        if(num < 10) {
            tmp = num * num
        } else {
            while(num > 0) {
                tmp += Math.pow((num % 10), 2)
                num = Math.floor(num / 10)
            }
        }

        if(set.has(tmp)) return false

        set.add(tmp) 
        return calculate(tmp)
    }

    return calculate(n)
};