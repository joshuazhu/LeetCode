//https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s: string): number {
    const sArr = s.split("")

    if(sArr.length === 0) return 0
    if(sArr.length === 1) return 1

    let slowIndex = 0
    let fastIndex = 1

    let set = new Set<string>()
    set.add(sArr[slowIndex])

    let result = 0

    while(fastIndex < sArr.length) {
        const current = sArr[fastIndex]
        if(!set.has(current)) {
            set.add(current)
            result = (fastIndex - slowIndex + 1) > result ? (fastIndex - slowIndex + 1) : result
            fastIndex ++
            continue
        }

        set.delete(sArr[slowIndex])
        slowIndex++
    }

    return result
};