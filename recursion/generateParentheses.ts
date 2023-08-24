// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// const generateParenthesis = (n: number): string[] => {
//   let result: string[] = [];

//   const generate = (left: number, right: number, str: string) => {
//     if (str.length === n * 2) {
//       result.push(str);
//       return;
//     }

//     if (left < n) generate(left + 1, right, str + "(");
//     if (right < left) generate(left, right + 1, str + ")");
//   };

//   generate(0, 0, "");
//   return result;
// };

// console.log(generateParenthesis(3));


const generateParenthesis = (n: number): string[] => {
  let result: string[][] = [];

  //[(), (()), ((())), (()())]

  //recursive
  
  //base case
  //1. if complelete parenthesis add to result
  //2. if number of ) > number ( return
  //3. parenthesis number > n, return


  //checking
  //1. each time, add one ( and one )


  const checkIsCompleteParenthesis = (parenthesis: string[]) => {
    let stack: string[] = []

    for(let i = 0; i < parenthesis.length; i ++) {

        if(parenthesis[i] === '(') {
            stack.unshift(parenthesis[i])
        } else {
            if(stack.length === 0) return false
            const tmp = stack.shift()
            if(tmp === '(') continue
        }
    }

    return stack.length === 0
  }

  const generate = (tmpResult: string[]) => {
      if(tmpResult.length === n*2 && checkIsCompleteParenthesis(tmpResult)) {
          result.push(tmpResult)
          return
      }
      
      if(tmpResult.length > n*2) return

      generate([...tmpResult, "("])
      generate([...tmpResult, ")"])
  }

  generate(["("])
  generate([")"])

  return result.map(v => v.join(""))

}
