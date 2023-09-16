/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head

    const list = reverseList(head.next)
    head.next.next = head
    head.next = null 
    return list
};


/*
var reverseList = function(head) {
    let list = null
    let current = head
    while(current){
        let next = current.next
        current.next = list
        list = current
        current = next
    }

    return list
};
 */