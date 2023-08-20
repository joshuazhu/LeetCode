function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) {
        return head
    }

    const firstHead = head;
    const secondHead = head.next

    firstHead.next = swapPairs(secondHead.next)
    secondHead.next = firstHead

    return secondHead
}
