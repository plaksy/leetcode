/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
     const result = {val : 0, next : null};
     let cur = result;
     while(l1 && l2){
         if(l1.val < l2.val){
             cur.next = l1;
             l1 = l1.next;
         } else {
             cur.next = l2;
             l2 = l2.next;
         }
         cur = cur.next;
     }
     cur.next = l1 || l2;
     return result.next;
 };
