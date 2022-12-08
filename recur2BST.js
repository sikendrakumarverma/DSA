// // 1. Factorial ...............................................

// const factorial = (n) => {
//       if(n==1)
//             return 1;
//       return n * factorial (n-1); 
// }

// // 2. Power of number ............................................

// let number = 8 
// let pow = 7
// pow(8,7) = 8* pow(8,6) 

// const power = (number, x ) => {
    
//     if(x == 1)
//         return number;
//     else
//         return number * power(number, x-1);
// }

// console.log(power(8,3));

// // 3. find if the postive number is in power of 2 or not using recursion ..................................
// // Ex- 16 = pow(2,4) -> true
// // 24 = -> false

const isInPowOfTwo = (n) => {

    // OR
    if(n== 1)
    return  true;
  let rem= n/2
  console.log(rem)
  function reminder(rem){
    if(rem==1) return true
    if(rem<1) return false
    rem=rem/2
    return reminder(rem)
  }
  return reminder(rem)
  //if(rem%2==0) return true
  //return false
    
//     if(number == 1)
//       return  true;
//     return recursive(number, 2);
// }

// const recursive = (number, x) => {
//     if(x == number)
//         return true;
//     else if(x > number)
//         return false;
//     else
//         return recursive(number, x* 2);
}



const f2 = (number, x) => {
    if(x == number || number == 1)
        return true;
    else if(x > number)
        return false;
    else
        return f2(number, x* 2);
}


n = 512
console.log(f2(64, 2));
console.log(isInPowOfTwo(1024));

// // 4. Binary tree ................................................................

// class BTNode {
//         constructor(value){
//             this.value = value;
//             this.left = null;
//             this.right = null;
//         }
// }

// rootNode = new BTNode(1);
// rootNode.left = new BTNode(2);
// rootNode.right =  new BTNode(3);
// rootNode.left.left =  new BTNode(4);
// rootNode.left.right =  new BTNode(5);
// rootNode.right.right= new BTNode(7)
// //console.log(rootNode)

// //Do pre-order traversal of Given binary tree using recursion

// const preOrderTraversal = (node) => {

//     if(node == null)
//         return;
//     console.log(node.value);
//     preOrderTraversal(node.left);
//     preOrderTraversal(node.right);
// }

// const inOrderTraversal = (node) => {

//     if(node == null)
//         return;
//     inOrderTraversal(node.left);
//     console.log(node.value);
//     inOrderTraversal(node.right);
// }

// const postOrderTraversal = (node) => {

//     if(node == null)
//         return;
//     postOrderTraversal(node.left);
//     postOrderTraversal(node.right);
//     console.log(node.value);
// }


// //preOrderTraversal(rootNode);
// //inOrderTraversal(rootNode);
// postOrderTraversal(rootNode);

// 5. Reverse the input sentance without using any built-in function

// Iteration

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello world'));

// Recursion
var newString = "";
var len=0
function reverseString(str) {
  if(len==str.length) return newString  
  newString=str[len]+newString
  len++
    return reverseString(str)
}
console.log(reverseString('hello world'));

