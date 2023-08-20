const reverseString = (s: string[]): void => {

    const reverse = (index: number, s: string[]) => {
        if(index >= s.length / 2) {
            return s
        }

        const temp = s[index]
        s[index] = s[s.length - index -1]
        s[s.length - index - 1] = temp

        return reverse(index + 1, s)
    }

    reverse(0, s)
};
