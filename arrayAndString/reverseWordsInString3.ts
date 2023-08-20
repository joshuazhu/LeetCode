function reverseWords(s: string): string {
    const reverseString = (ss: string): string =>  {
        const sArr = ss.split("")
        let i = 0; 

        while(i < Math.floor(sArr.length / 2)) {
            const tmp = sArr[i]
            sArr[i] = sArr[sArr.length - i - 1]
            sArr[ss.length - i - 1] = tmp 
            
            i++
        }
        
        

        return sArr.join("")
    }

    const strArray = s.split(" ")

    for(let i = 0; i < strArray.length; i++) {
        strArray[i] = reverseString(strArray[i])
    }

    return strArray.join(" ")
};