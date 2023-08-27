//https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1209/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
  }
}

function isPalindrome(head: ListNode | null): boolean {
    let frontendNode: ListNode | null = head
    function recursiveCheck(currentNode): boolean {
        if(!currentNode) return true

        if(!recursiveCheck(currentNode.next)) return false

        if(currentNode.val !== frontendNode!.val) return false
        
        frontendNode = frontendNode!.next

        return true
    }

    return recursiveCheck(head)
};