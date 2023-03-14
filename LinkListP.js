// 1.  Merge Two Sorted Lists........................................................................................

let list1 = [1, 2, 4], list2 = [1, 3, 4] //Output: [1,1,2,3,4,4]
var mergeTwoLists = function (list1, list2) {
    let newHead = new ListNode(0);
    let temp = newHead;

    while (list1 != null && list2 != null) {

        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        }

        else {
            temp.next = list2;
            list2 = list2.next;
        }

        temp = temp.next;
    }

    while (list1 != null) {
        temp.next = list1;
        list1 = list1.next;
        temp = temp.next;
    }

    while (list2 != null) {
        temp.next = list2;
        list2 = list2.next;
        temp = temp.next;
    }
    return newHead.next; //TC: o(n+m)= linear= O(n) //SC: o(n+m)


    //    if (!list1) return list2;
    //    if (!list2) return list1;
    //    let list3= [ ]
    //    let l1=0
    //    let l2=0
    //    let l3=0
    //    while(l1<list1.length && l2<list2.length){
    //        if (list1[l1] <= list2[l2]) {
    //            list3[l3]=list1[l1]
    //            l1++
    //        } else {
    //          list3[l3]=list2[l2]
    //            l2++
    //     }
    //        l3++
    //    }
    //     // while(l1<list1.length || l2<list2.length) {
    //     //      list3[l3] = list1[l1] ||  list3[l3] = list2[l2]
    //     //      l1++ ||  l2++
    //     //      l3++
    //     // }
    //     return list3
};
//console.log(mergeTwoLists(list1,list2))

// 2. Middle of the Linked List..................................................................................
//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

let head = [1, 2, 3, 4, 5] // Output: [3,4,5]
var middleNode = function (head) {
    //Approach: 1.) Multipoiter

    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

};
console.log(middleNode(head))

// 3. 141. Linked List Cycle
//Given head, the head of a linked list, determine if the linked list has a cycle in it.

let head3 = [3, 2, 0, -4], pos = 1 //Output: true
var hasCycle = function (head) {
    // Approach: Ussing slow and fast concept

    let fast = head;
    let slow = head;

    while (fast != null && fast.next != null) {

        fast = fast.next.next;
        slow = slow.next;

        if (slow == fast)
            return true;
    }

    return false;
};
console.log(hasCycle(head3))

// 4.  Sort List.............................................................................................
//Given the head of a linked list, return the list after sorting it in ascending order.

let head4 = [4, 2, 1, 3] //Output: [1,2,3,4]

var sortList = function (head) {
    // Approach : 1. Merge sort
    //base -> if only 1 or less node exist
    if (head == null || head.next == null)
        return head;

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = null;

    let list1 = sortList(head);
    let list2 = sortList(slow);

    return mergeLL(list1, list2);
};
// merge two list 
const mergeLL = (list1, list2) => {

    let newMergedList = new ListNode(0);

    let temp = newMergedList;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        }

        else {
            temp.next = list2;
            list2 = list2.next;
        }

        temp = temp.next;
    }

    while (list1 != null) {
        temp.next = list1;
        list1 = list1.next;
        temp = temp.next;
    }

    while (list2 != null) {
        temp.next = list2;
        list2 = list2.next;
        temp = temp.next;
    }

    return newMergedList.next;
};
console.log(sortList(head4))

// 5.  Remove Nth Node From End of List........................................................................
//Given the head of a linked list, remove the nth node from the end of the list and return its head.

let head5 = [1, 2, 3, 4, 5], n = 2 //Output: [1,2,3,5]
var removeNthFromEnd = function (head, n) {
    // Approach : Ussing two pointer
    if (head == null)
        return null;

    const newHead = new ListNode(0);
    newHead.next = head;

    let fast = newHead;
    let slow = newHead;

    for (let i = 1; i <= n + 1; i++) {// running fast Nth distance before starting slow
        fast = fast.next;
    }
    while (fast != null) { // running both with same speed but fast ahead Nth
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return newHead.next;

    // let fast = head, slow = head
    // for (let i = 0; i < n; i++) fast = fast.next
    // if (!fast) return head.next
    // while (fast.next) fast = fast.next, slow = slow.next
    // slow.next = slow.next.next
    // return head
};
console.log(removeNthFromEnd(head5));

// 6. 25. Reverse Nodes in k-Group..............................................................Hard
//Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
//k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
//You may not alter the values in the list's nodes, only nodes themselves may be changed.

let head6 = [1, 2, 3, 4, 5], k = 2 //Output: [2,1,4,3,5]
var reverseKGroup = function (head, k) {
    let curr = head;
    let count = 0;
    while (curr != null && count != k) {// making Kth Group
        curr = curr.next;
        count++;
    }

    if (count == k) {
        curr = reverseKGroup(curr, k);// making Kth Group recursively

        while (count-- > 0) { // reverse direction
            let temp = head.next;
            head.next = curr;
            curr = head;
            head = temp;
        }

        head = curr;

    }
    return head;

};
console.log(reverseKGroup(head6))

// 6. B.) Swap Nodes in Pairs....................................................................................

let headB = [1, 2, 3, 4] //Output: [2,1,4,3]
var swapPairs = function (head) {
    if (head == null)
        return null;

    let curr = head;
    let count = 0;

    while (count != 2 && curr != null) {
        curr = curr.next;
        count++;
    }

    if (count == 2) {
        curr = swapPairs(curr);

        while (count != 0) {
            let temp = head.next;
            head.next = curr;
            curr = head;
            head = temp;

            count--;
        }

        head = curr;
    }
    return head;

};

// 7. Odd Even Linked List.............................................................................................
//Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even 
//indices, and return the reordered list.

let head7 = [1, 2, 3, 4, 5] //Output: [1,3,5,2,4]
var oddEvenList = function (head) {
    // Approach: Two pointer
    if (head == null)
        return null;
    let oddNodePointer = head;
    let evenNodePointer = head.next;
    let evenNodeHead = evenNodePointer;

    while (evenNodePointer != null && evenNodePointer.next != null) {//even ahead by odd
        oddNodePointer.next = oddNodePointer.next.next;// moving by two node
        evenNodePointer.next = evenNodePointer.next.next;

        oddNodePointer = oddNodePointer.next;//continue forward
        evenNodePointer = evenNodePointer.next;
    }

    oddNodePointer.next = evenNodeHead;

    return head;

};
console.log(oddEvenList(head7))

// 8. Swapping Nodes in a Linked List................................................................................
//You are given the head of a linked list, and an integer k.Return the head of the linked list after 
//swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

let head8 = [1, 2, 3, 4, 5], k8 = 2 //Output: [1,4,3,2,5]
var swapNodes = function (head, k) {
    if (head == null)
        return null;

    let fast = head;
    let slow = head;

    let FirstKthNode = null;
    let LastKthNode = null;

    for (let i = 1; i < k; i++) {
        fast = fast.next;
    }

    FirstKthNode = fast;

    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next
    }
    LastKthNode = slow;

    let temp = FirstKthNode.val;
    FirstKthNode.val = LastKthNode.val;
    LastKthNode.val = temp;

    return head;

};

// 9. Add Two Numbers....................................................................................................

let l1 = [2, 4, 3], l2 = [5, 6, 4]  // Output: [7,0,8]  Explanation: 342 + 465 = 807.
var addTwoNumbers = function (l1, l2) {

    if (l1 == null && l2 == null)
        return null;
    else
        return recursion(l1, l2, 0);
};
// we add from starting of link list because actually we given in reverse form of num. 
var recursion = (l1, l2, carry) => {
    let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
    let nextCarry = Math.floor(sum / 10);
    let nodeValue = sum % 10;

    if (l1 || l2 || carry)
        return new ListNode(nodeValue, recursion(l1 && l1.next || null, l2 && l2.next || null, nextCarry));
    else
        return null;
}
console.log(addTwoNumbers(l1, l2));

