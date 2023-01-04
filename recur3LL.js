
// 1. Reverse a LinkedList using recursion , given is headNode .....................................

class LinkedListNode {
    // let arr = [];
    constructor(value){
        this.value = value;
        this.next = null//(next == null || next == undefined) ? null: next;
    }
    
    func(x,y){
        return x+y;
    }
}

let headNode = new LinkedListNode(10);
headNode.next = new LinkedListNode(20);
headNode.next = new LinkedListNode(23);
//headNode.next.next = new LinkedListNode(30);
//headNode.next.next.next = new LinkedListNode(40)
 console.log(headNode.next.next);

// 2. Reverse a linked list ......................................................................

const reverseFunc = (headNode) => {
    
    if(headNode == null || headNode.next == null) // stop rec call stack
        return headNode;
    
    let newHead = reverseFunc(headNode.next); // head i.e, newhead=w and fall back 4 to 3 head  Now new head 3
    headNode.next.next = headNode;// here 3(head)ka next 4 or 4 ka next null hai or usme 3 ko dal do new head value i.e,Assign
    headNode.next = null;
    
    return newHead;
}

// console.log("Reversed LinkedList");
// console.log(reverseFunc(headNode));

// OR By Loop
function solution(a,arr) {
    //Write your solution here
      class linkList{
          constructor(value){
              this.value=value;
              this.next=null
          }
      }
      let head= new linkList(arr[0])
      let node=head;
     for(let i=1;i<a;i++){
         node.next= new linkList(arr[i])
         node=node.next;
     }
      if(head.value==0) return "no element present"
          // 1. Reverse LL by recursion
         // 2. Reverse LL by loop
      let prev=head;
      let currentNode=head.next
      while(currentNode){
          let nextNode=currentNode.next;
          currentNode.next=prev;
          prev=currentNode;
          currentNode=nextNode
      }
      head.next=null;
     
      let newHead=prev;  // reversed LL
      let res=[];
      while(newHead){
          res.push(newHead.value);
          newHead=newHead.next
      }
      return res.join(" ")
  }
  let arr=[10,20,30,40,50]
  let a=arr.length
  console.log(solution(a,arr))

  // 3. Delete last node in singly linked list.........................................................................

  function solution(a,head) {
    //Write your solution here
      let list =linkList(head)
      let headNode =list
      let res=[]
      if(headNode.next==null) return "no element present"
      while(headNode && headNode.next!=null){
          if(headNode.next.next==null){
              headNode.next=null
          }
          res.push(headNode.value)
          headNode=headNode.next
      }
      return res.join(" ")
  }

  // 4. Delete head node in singly linked list.......................................................................

  function solution(a,head) {
    //Write your solution here
      class linkList{
          constructor(value){
              this.value=value
              this.next=null
          }
      }
      let headNode=new linkList(head[0])
      let node= headNode
      for(let i=1;i<a;i++){
          node.next=new linkList(head[i])
          node=node.next
      }
      let current= headNode.next
      let nextNode=current;
      head.next=null
      if(current==null) return "no element present"
      let res=[]
      while(nextNode){
          res.push(nextNode.value)
          nextNode=nextNode.next
      }
      return res.join(" ")
  }
  

// 5. Remove Node OR Remove Linked List Elements .................................................................

var removeElements = function(head, val) {
   
    while(head!=null && head.value==val){ // if head and head.next are equal and that value than
        head=head.next;
    }
        if(head==null) return head;     // if empty head 
        let ptr= head//new ListNode(0,head);  // dummy node
        while(ptr.next!=null){
                if(ptr.next.value==val){
                    ptr.next=ptr.next.next;
                    //continue;
                }else{
                   ptr=ptr.next;
                }
        }
        return head;
};
let val=6
let head=headNode
console.log(removeElements(head,val))


// 6. leetcode Add 2 non- negative linkedList where digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// class LinkedListNode {
//     // let arr = [];
//     constructor(value, next){
//         this.value = value;
//         this.next = (next == null || next == undefined) ? null: next;
//     }
// }

// let head1 = new LinkedListNode(1);
// head1.next = new LinkedListNode(2);
// head1.next.next = new LinkedListNode(8);


// let head2 = new LinkedListNode(7);
// head2.next = new LinkedListNode(8);
// head2.next.next = new LinkedListNode(4);
// console.log(head1,head2)

// const addLinkedList = (head1, head2) => {
 
//    const recursiveFunc = (head1, head2, carry) => {
//        let currSum = (head1 && head1.value || 0 )  +  (head2 && head2.value || 0 ) + carry;
       
//        let currCarry = Math.floor(currSum/10);
//        let currNodeValue = currSum%10;
       
//        return (head1 || head2 || carry) ? 
//         new LinkedListNode(currNodeValue, recursiveFunc(head1 && head1.next || null , head2 && head2.next || null, currCarry))  : null;
//    }
   
   
//    return recursiveFunc(head1, head2, 0);
// }

// let newLLHead = addLinkedList(head1, head2);


// while(newLLHead != null){
//    console.log(newLLHead.value);
//    newLLHead = newLLHead.next;
// }

// 5. All power set or sub-array of an array .......................................

// function printPowerSet(arr,index,current){
//     if(index==arr.length){
//       console.log(current)
//       return;
//     }
//     printPowerSet(arr,index+1,current)
//     let [...t]=current
//     t.push(arr[index])
//     printPowerSet(arr,index+1,t)  
//   }
  
//   let arr=[1,2,3,4]
//  printPowerSet(arr,0,[])
