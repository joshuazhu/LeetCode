export function reverseWords(s: string): string {
    const strArray = s.split(" ").filter(Boolean)
    
    let i = 0

    while(i < Math.floor(strArray.length / 2)) {
        const tmp = strArray[i]
        strArray[i] = strArray[strArray.length - i - 1]
        strArray[strArray.length - i - 1] = tmp
        
        i++
    }
    
    return strArray.join(" ")
};