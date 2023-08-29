//https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1209/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
  }
}

//Recursive
function isPalindrome(head: ListNode | null): boolean {
    if(!head || !head.next ) return true
    let firstNode: ListNode | null = head

    function recursive(head: ListNode | null): boolean {
        if(!head) return true

        if(!recursive(head.next)) return false
        if(firstNode!.val !== head.val) return false

        firstNode = firstNode!.next

        return true
    }

    return recursive(head)
};

//Iteration
function isPalindrome(head: ListNode | null): boolean {

}