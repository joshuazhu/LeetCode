/*
  Given a string, convert it to an integer without using the builtin str function. You are allowed to use ord to convert a character to ASCII code.

  Consider all possible cases of an integer. In the case where the string is not a valid integer, return None.

  Here's some starting code:

  def convert_to_int(s):
    # Fill this in.

  print(convert_to_int('-105') + 1)
  # -104
*/

const convertToInt = s => {
  if(s.length === 0)
    return;

  const currentChar = s[0];

  if(s.length === 1 && currentChar === "-")
    return;

  if(currentChar === "-") {
    return -parseStringToInt(copyString(1, s.length - 1, s));
  }

  return parseStringToInt(s);
}

const parseStringToInt = s => {
  if(s === "")
    return 0;

  const currentCharASCValue = s[0].charCodeAt();

  if(currentCharASCValue < 48 || currentCharASCValue > 57)
    return;

  const currentCharInt = (currentCharASCValue - 48) * Math.pow(10, s.length - 1);

  return currentCharInt + parseStringToInt(copyString(1, s.length - 1, s));
}

const copyString = (front, length, string) => {
  let copiedString = "";

  for(let i = front; i < front + length; i ++) {
    copiedString += string[i];
  };

  return copiedString;
}