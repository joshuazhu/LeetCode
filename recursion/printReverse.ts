export const printReverse = (str: string) => {
    const print = (i: number, str: string) => {
        if(i === str.length) {
            return
        }

        print(i+1, str)
        console.log(str[i])
    }

    print(0, str)
}

printReverse('abcdef')