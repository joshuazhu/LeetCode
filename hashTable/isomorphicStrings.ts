//https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
    const sArr = s.split("")
    const tArr = t.split("")

    if(sArr.length !== tArr.length) return false

    let mapS = new Map<string, string>()
    let mapT = new Map<string, string>()

    for(let i = 0; i < sArr.length; i++) {
        if(!mapS.has(sArr[i])) mapS.set(sArr[i], tArr[i])
        
        if(!mapT.has(tArr[i])) mapT.set(tArr[i], sArr[i])

        if(mapS.get(sArr[i]) !== tArr[i] || mapT.get(tArr[i]) !== sArr[i]) return false
    } 

    return true
};