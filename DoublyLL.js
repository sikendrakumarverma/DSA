// 1. insert node at last in doubly link list.....................................................................

function solution(a, arr, add) {
    //Write your solution here
    class linkList {
        constructor(value) {
            this.prev = null
            this.value = value;
            this.next = null
        }
    }
    let addNode = new linkList(add)
    let head = new linkList(arr[0])
    let node = head;
    for (let i = 1; i < a; i++) {
        node.next = new linkList(arr[i])
        node.next.prev = node
        node = node.next;
    }
    //console.log(head)
    let head1 = head
    if (head.value == 0) return "no element present"
    while (head && head.next !== null) {
        head = head.next
    }
    head.next = addNode
    addNode.prev = head
    //console.log(head.prev.prev.value)

    let res = [];
    res.push(head.next.value);
    while (head) {
        res.push(head.value);
        head = head.prev
    }
    //console.log(head1.value)
    let res1 = [];
    while (head1) {
        res1.push(head1.value);
        head1 = head1.next
    }
    //console.log(res,res1)
    let ans = "";
    for (let i = 0; i < res1.length; i++) {
        ans += res1[i] + " "
    }
    ans += "\n"
    for (let i = 0; i < res.length; i++) {
        ans += res[i] + " "
    }
    // console.log(ans)
    return ans
}
let arr = [10, 20, 30, 40, 50]
let add = 60
let a = arr.length
console.log(solution(a, arr, add))

// 2. insert node at first in doubly link list.....................................................................

function solution2(a, arr, add) {
    //Write your solution here
    class linkList {
        constructor(value) {
            this.prev = null
            this.value = value;
            this.next = null
        }
    }
    let addNode = new linkList(add)
    let head = new linkList(arr[0])
    let node = head;
    for (let i = 1; i < a; i++) {
        node.next = new linkList(arr[i])
        node.next.prev = node
        node = node.next;
    }

    if (head.value == 0) return "no element present"
   
    head.prev = addNode
    addNode.next = head
    let head1 = addNode;// for moving forward
    head=addNode; // for moving backword
    
    while (head && head.next !== null) { // last node
        head = head.next
    }

    let res = []; // backword
    while (head) {
        res.push(head.value);
        head = head.prev
    }
    
    let res1 = []; // forword
    while (head1) {
        res1.push(head1.value);
        head1 = head1.next
    }
    //console.log(res,res1)
    let ans = "";
    for (let i = 0; i < res1.length; i++) {
        ans += res1[i] + " "
    }
    ans += "\n" // add new line
    for (let i = 0; i < res.length; i++) {
        ans += res[i] + " "
    }
    // console.log(ans)
    return ans
}
let arr2 = [1, 2, 3, 4, 5]
let add2 = 6
let a2 = arr.length
console.log(solution2(a2, arr2, add2))

// 3. delete first node of doubly link list.....................................................................

function solution3(a, arr) {
    //Write your solution here
    class linkList {
        constructor(value) {
            this.prev = null
            this.value = value;
            this.next = null
        }
    }
    //let addNode = new linkList(add)
    let head = new linkList(arr[0])
    let node = head;
    for (let i = 1; i < a; i++) {
        node.next = new linkList(arr[i])
        node.next.prev = node
        node = node.next;
    }

    if (head.value == 0) return "no element present"

    let nextN = head.next
    nextN.prev=null;
    //addNode.next = head
    let head1 = nextN;// for moving forward
    head=nextN; // for moving backword
    
    while (head && head.next !== null) { // last node
        head = head.next
    }

    let res = []; // backword
    while (head) {
        res.push(head.value);
        head = head.prev
    }
    
    let res1 = []; // forword
    while (head1) {
        res1.push(head1.value);
        head1 = head1.next
    }
    //console.log(res,res1)
    let ans = "";
    for (let i = 0; i < res1.length; i++) {
        ans += res1[i] + " "
    }
    ans += "\n" // add new line
    for (let i = 0; i < res.length; i++) {
        ans += res[i] + " "
    }
    // console.log(ans)
    return ans
}
let arr3 = [11, 21, 31, 41, 51]
let a3 = arr.length
console.log(solution3(a3, arr3))

// 4. delete last node of doubly link list.....................................................................

function solution4(a, arr) {
    //Write your solution here
    class linkList {
        constructor(value) {
            this.prev = null
            this.value = value;
            this.next = null
        }
    }
    
    let head = new linkList(arr[0])
    let node = head;
    for (let i = 1; i < a; i++) {
        node.next = new linkList(arr[i])
        node.next.prev = node
        node = node.next;
    }

    if (head.value == 0) return "no element present"

     let head1 = head;// for moving forward
    
    while (head && head.next.next !== null) { // last 2nd node
        head = head.next
    }
    head.next=null

    let res = []; // backword
    while (head) {
        res.push(head.value);
        head = head.prev
    }
    
    let res1 = []; // forword
    while (head1) {
        res1.push(head1.value);
        head1 = head1.next
    }
    //console.log(res,res1)
    let ans = "";
    for (let i = 0; i < res1.length; i++) {
        ans += res1[i] + " "
    }
    ans += "\n" // add new line
    for (let i = 0; i < res.length; i++) {
        ans += res[i] + " "
    }
    // console.log(ans)
    return ans
}
let arr4 = [11, 21, 31, 41, 51]
let a4 = arr.length
console.log(solution4(a4, arr4))
