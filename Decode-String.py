import sys
import re


class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: int
        """
        return self.decodeStringImp(s)

    def decodeStringImp(self, input):
        nextChar = input[0:1]
        if len(input) == 0:
            return ""

        if len(input) == 1:
            if nextChar == "]" or nextChar == "[":
                return ""

            return input

        if re.search(r'[0-9]', nextChar):
            numberLength = 0
            num = ""
            for numIndex in range(0, len(input)):
                if re.search(r'[0-9]', input[numIndex: numIndex+1]):
                    num += input[numIndex: numIndex+1]
                    numberLength += 1
                else:
                    break

            stack = []
            sub_string = ""
            # in stack next '['
            for i in range(numberLength, len(input)):
                next_sub_char = input[i: i + 1]
                sub_string += next_sub_char

                if next_sub_char == '[':
                    stack.append('[')
                if next_sub_char == ']':
                    stack.pop()
                # if stack is empty, we already get the sub string inside the "[]"
                if len(stack) == 0:
                    break

            return_str = ""

            for j in range(0, int(num)):
                return_str = return_str + self.decodeStringImp(sub_string)
            return return_str + self.decodeStringImp(input[len(sub_string)+numberLength-1: len(input)])

        if re.search(r'[a-zA-Z]', nextChar):
            return nextChar + self.decodeStringImp(input[1: len(input)])

        if nextChar == "]":
            return self.decodeStringImp(input[1: len(input)])

        if nextChar == "[":
            return self.decodeStringImp(input[1: len(input)])


x = Solution()
result = x.decodeString("2[abc]3[cd]ef")
print(result)
