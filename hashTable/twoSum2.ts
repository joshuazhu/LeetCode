//https://leetcode.com/problems/two-sum-iii-data-structure-design

class TwoSum {
    map: Map<number, number>

    constructor() {
        this.map = new Map<number, number>()
    }

    add(number: number): void {
        if(this.map.get(number) === undefined) {
            this.map.set(number, 1)
        }else {
            this.map.set(number, this.map.get(number)! + 1)
        }
        console.log(this.map)
    }

    find(value: number): boolean {
        for(let [number, _] of this.map) {
            let remains = value - number

            if(remains === number) {
                if(this.map.get(number)! >1) return true
            } else {
                if(this.map.get(number)! > 0 && this.map.get(remains)! > 0) return true
            }

        }
        
        return false
    }
}