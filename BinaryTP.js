// 1. preOrder Traversal in Binary tree.....................................................................

function preOrder(root) {
    //process.stdout.write(`${root.data}`)
    if (root != null) {
        // print root data
        process.stdout.write(`${root.data} `)
        // left subtree
        preOrder(root.left);
        // right subtree
        preOrder(root.right);
    }
}

// 2. postOrder Traversal in Binary tree.....................................................................

function postOrder(root) {
    if (root != null) {
        postOrder(root.left);
        postOrder(root.right)
        process.stdout.write(`${root.data} `)
    }
}

// 3.  inOrder Traversal in Binary tree.....................................................................

function inOrder(root) {
    if (root != null) {
        inOrder(root.left);
        process.stdout.write(`${root.data} `);
        inOrder(root.right);
    }
}

// 4.  levelOrder Traversal in Binary tree.....................................................................

function levelOrder(root) {
    const queue = [];
    queue.push(root);

    while (queue.length) {
        let front = queue.shift();
        process.stdout.write(`${front.data} `);
        if (front.left) queue.push(front.left);
        if (front.right) queue.push(front.right);
    }
}

// 5. Find height(DFS) of tree.....................................................................................
class Node {
    constructor(element) {
        this.left = null
        this.element = element
        this.right = null
    }
}


function solution(postOrder, inOrder, start, end) {
    //Write your solution here
    if (start > end) return null
    var val = postOrder.pop()
    var root = new Node(val)
    if (start == end) return root
    let pos = search(inOrder, start, end, val)
    root.right = solution(postOrder, inOrder, pos + 1, end)
    root.left = solution(postOrder, inOrder, start, pos - 1)
    return root
}
function search(inOrder, start, end, val) {
    for (let i = start; i <= end; i++) {
        if (inOrder[i] == val) {
            return i
        }
    }
    return -1
}

function maxDepth(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) {
        return 0
    }
    let hleft = maxDepth(root.left)
    let hright = maxDepth(root.right)

    let max = Math.max(hleft, hright) + 1
    return max
}


function main() {
    var a = parseInt(readLine());
    if (a == 0) {
        console.log('')
    }
    else {
        var postOrder = readLine().split(' ').map(Number)
        var inOrder = readLine().split(' ').map(Number)

        var root = solution(postOrder, inOrder, 0, a - 1);
        console.log(maxDepth(root));
    }
}

// 6. Level order traversal(BFS)..........................................................................................

class Node2 {
    constructor(ele) {
        this.left = null
        this.element = ele;
        this.right = null
    }
}

function solution(postO, inO, start, end) {
    //Write your solution here
    if (start > end) return null;

    var val = postO.pop()
    var root = new Node2(val)
    if (start == end) return root;

    let pos = search(inO, start, end, val)
    root.right = solution(postO, inO, pos + 1, end)
    root.left = solution(postO, inO, start, pos - 1)
    return root;
}
function search(inO, start, end, val) {
    for (let i = start; i <= end; i++) {
        if (inO[i] == val) return i;
    }
    return -1;
}
function levelOrder(root) {
    console.log(root)
    if (root == null) return;
    console.log(root)
    var queue = [];
    queue.push(root)
    var result = ''
    while (queue.length != 0) {
        let front = queue.shift()
        result = result + front.element + " "

        if (front.left != null) queue.push(front.left)
        if (front.right != null) queue.push(front.right)
    }
    return result
}

//function main() {
var a = 6
var po = "1 0 2 9 3 5"
// var in = "1 2 0 5 3 9"
if (a == 0) {
    console.log('')
}
else {
    var postOrder = po.split(' ').map(Number)
    // var inOrder = readLine().split(' ').map(Number)
    var inOrder = [1, 2, 0, 5, 3, 9]
    var root = solution(postOrder, inOrder, 0, a - 1);
    console.log(levelOrder(root));
}
//}

// 7.  Maximum Depth of Binary Tree...................................................................................
//Given the root of a binary tree, return its maximum depth.

let root = [3, 9, 20, null, null, 15, 7]  //Output: 3
var maxDepth = function (root) {
    // Base Condition
    if (root == null) return 0;
    // Base Condition if not any child
    if (root.left == null && root.right == null) return 1;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    // Induction
    return Math.max(left, right) + 1;

    // let que=[]
    // que.push(root)
    // //console.log(que)
    // while(que.length){
    //     var current=que.shift()
    //     //console.log(que,current)
    //     if(current.left){
    //         que.push(current.left)
    //     }
    //     if(current.right){
    //         que.push(current.right)
    //     }
    //     //console.log(current.val)
    // }
    // return current.val


    //  if(root==null) return 0
    //  console.log(root.val)
    // // console.log(root.left)
    //  maxDepth(root.left)

    //  maxDepth(root.right)
};
console.log(maxDepth(root))

// 8. Search in a Binary Search Tree
//You are given the root of a binary search tree (BST) and an integer val.
//Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a 
//node does not exist, return null.

let root = [4, 2, 7, 1, 3], val = 2  //Output: [2,1,3]
var searchBST = function (root, val) {

    let curr = root;
    while (curr) {
        if (curr.val === val) {
            return curr;
        }
        if (curr.val > val) { //left
            curr = curr.left;
        } else {
            curr = curr.right;  //right root.val<val
        }
    }
    return curr;
};
console.log(searchBST(root));

// 9. Binary Tree Level Order Traversal
 //Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

let root = [3,9,20,null,null,15,7] //Output: [[3],[9,20],[15,7]]
var levelOrder = function (root) {
    // APPROACH: 1.) By BFS
            // 2.) By DFS

// 1. 
if(root == null)
return [];

let q = []; //create a queue
let answer = [];
q.push(root);
while(q.length != 0){

let levelNodesList = [];
let nodesAtCurrLevel = q.length;

for(let i = nodesAtCurrLevel;i>0;i--){
    let currNode = q.shift(); //pop from queue from front end
    levelNodesList.push(currNode.val);

    if(currNode.left != null)
        q.push(currNode.left);
   
    if(currNode.right != null)
        q.push(currNode.right);
}
answer.push(levelNodesList);
}
return answer; //TC:O(n) //SC:o(k) where k is max no of nodes at any level


// // 2. Divided in two parts: 1.Height Finding and Level Traversal 
//    let answer = [];
//    if(root == null)
//        return [];

//    let height = findHeight(root); // Height of tree(Number of level)

//    for(let i=1 ;i<= height;i++){
//            let levelArr = [];
//            traversal(root, i, levelArr);
//            answer.push(levelArr);
//    }
//    return answer;
// };

// const findHeight = ( root) => {

//    if(root == null){
//        return 0;
//    }
//    let left = findHeight(root.left);
//    let right = findHeight(root.right);

//    if(left > right)
//        return left+1;
//    else
//        return right+1;
// }

// const traversal = (root, level, levelArr) => { // Level order traversal
//    if(root == null){
//        return;
//    }
//    if(level == 1)
//        levelArr.push(root.val);

//    else if(level > 1){
//        traversal(root.left, level-1, levelArr);
//        traversal(root.right, level-1, levelArr);
//    }

};
console.log(levelOrder(root));

// 10. Binary Tree Zigzag Level Order Traversal
//Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to 
  //right, then right to left for the next level and alternate between).

 let root10 = [3,9,20,null,null,15,7] // Output: [[3],[20,9],[15,7]]

var zigzagLevelOrder = function(root) {
    if(root == null)
       return [];

   let q = []; //create a queue
   let answer = [];

   let leftToRight = true;// for maintaining direction and starting from    left to right, false denotes right to left
   q.push(root);
   while(q.length != 0){


       let levelNodesList = [];
       let nodesAtCurrLevel = q.length;
      
       for(let i = nodesAtCurrLevel;i>0;i--){
           let currNode = q.shift();// pop(remove) from 1st

           if(leftToRight == true)
               levelNodesList.push(currNode.val);// back(last) add[3,.....]
            else
               levelNodesList.unshift(currNode.val);//1st(start) add[..,9,20]

            if(currNode.left != null)
               q.push(currNode.left);
          
           if(currNode.right != null)
               q.push(currNode.right);
       }

       leftToRight = !leftToRight;// change direction(t=f(!t),f=t,t=f,....)
       answer.push(levelNodesList);
   }
   return answer;
 
};
console.log(zigzagLevelOrder(root10));

// 11. Average of Levels in Binary Tree

let root11 = [3,9,20,null,null,15,7] //Output: [3.00000,14.50000,11.00000]
//Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
//Hence return [3, 14.5, 11].

var averageOfLevels = function(root) {
    // APPROACH: 1.) By BFS
            // 2.) By DFS

// 1. 
    if(root == null)
       return [];

   let q = []; //create a queue
   let answer = [];
   q.push(root);
   while(q.length != 0){

       let sum = 0;
       let nodesAtCurrLevel = q.length;
      
       for(let i = nodesAtCurrLevel;i>0;i--){
           let currNode = q.shift(); //pop from queue from front end
           sum+= currNode.val;

           if(currNode.left != null)
               q.push(currNode.left);
          
           if(currNode.right != null)
               q.push(currNode.right);
       }
       answer.push(sum/nodesAtCurrLevel);
   }
   return answer; //TC:O(n) //SC:o(k) where k is max no of nodes at any level

};
console.log(averageOfLevels(root11))

// 12. Binary Tree Paths
 //Given the root of a binary tree, return all root-to-leaf paths in any order. A leaf is a node with no children.

let  root = [1,2,3,null,5] // Output: ["1->2->5","1->3"]
var binaryTreePaths = function(root) {
    if(root == null)
        return [];
    let answer = [];
    findPath(root, answer, "");
  
    return answer;
 };
  
 const findPath = (root, answer, pathString) =>{
  
    if(root.left == null && root.right == null)
        answer.push(pathString+root.val);
   
    if(root.left != null)
        findPath(root.left,answer, pathString+root.val+"->");
       
    if(root.right != null)
        findPath(root.right,answer, pathString+root.val+"->");
  
 }
 console.log(binaryTreePaths(root));

 // 13. Symmetric Tree.....................................................

 var isSymmetric = function(root) {
    
    let res=true;
    function isMirror( root1, root2) {
        if (!root1 && !root2){ 
            return;
        }
        if (root1 == null || root2 == null || root1.val !== root2.val){ 
            res= false;
            return;
        }
        
        isMirror(root1.left, root2.right) 
        isMirror(root1.right, root2.left) ;
        return res;
    }
    isMirror(root,root)
    return res;
};
