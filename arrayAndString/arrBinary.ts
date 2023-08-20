function addBinary(a: string, b: string): string {

    if(a === "") return b
    if(b === "") return a

    const aArr: string[] = a.split("")
    const bArr: string[] = b.split("")

    let results: string[] = []
    let indexA = aArr.length - 1 
    let indexB = bArr.length - 1
    let needAddOne = false

    while(indexA >= 0 || indexB >= 0) {
        const currentA = Number(indexA < 0 ? "0" : aArr[indexA])
        const currentB = Number(indexB < 0 ? "0" : bArr[indexB])

        console.log(currentA)
        console.log(currentB)

        //0,0 or 1, 1
        if((currentA ^ currentB) === 0) {
            //0, 0
            results.unshift(needAddOne ? "1" : "0")
            needAddOne = currentA === 1
        } else { //0,1 or 1,0
            results.unshift(needAddOne ? "0": "1")
            needAddOne = needAddOne
        }

        indexA--
        indexB--
    }

    return results.join("")
};

["1", "2"].shift()