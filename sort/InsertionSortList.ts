//https://leetcode.com/problems/insertion-sort-list/editorial/

function insertionSortList(head: ListNode | null): ListNode | null {
    let resultHead = new ListNode(-1)

    let currentNode = head

    while(currentNode !== null) {
        let prev = resultHead

        while(prev.next !== null && prev.next.val < currentNode.val) {
            prev = prev.next
        }

        let next = currentNode.next
        currentNode.next = prev.next
        prev.next = currentNode
        
        currentNode = next
    }

    return resultHead.next
};