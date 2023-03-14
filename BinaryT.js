/* Binary Tree Traversals: 
Tree Traversal algorithms can be classified broadly into two categories: 
Depth-First Search (DFS) Algorithms 
Breadth-First Search (BFS) Algorithms 
 
 
Tree Traversal using Depth-First Search (DFS) algorithm can be further classified into three categories: 
 
 
Preorder Traversal (current-left-right: Visit the current node before visiting any nodes inside the left or right subtrees. Here, the traversal is root – left child – right child. It means that the root node is traversed first then its left child and finally the right child. 
Inorder Traversal (left-current-right): Visit the current node after visiting all nodes inside the left subtree but before visiting any node within the right subtree. Here, the traversal is left child – root – right child.  It means that the left child is traversed first then its root node and finally the right child. 
Postorder Traversal (left-right-current): Visit the current node after visiting all the nodes of the left and right subtrees.  Here, the traversal is left child – right child – root.  It means that the left child has traversed first then the right child and finally its root node. 
 
 
Tree Traversal using Breadth-First Search (BFS) algorithm can be further classified into one category: 
 
Level Order Traversal:  Visit nodes level-by-level and left-to-right fashion at the same level. Here, the traversal is level-wise. It means that the most left child has traversed first and then the other children of the same level from left to right have traversed.  
Let us traverse the following tree with all four traversal methods: 

Binary Tree 
Pre-order Traversal of the above tree: 1-2-4-5-3-6-7 
In-order Traversal of the above tree: 4-2-5-1-6-3-7 
Post-order Traversal of the above tree: 4-5-2-6-7-3-1 
Level-order Traversal of the above tree: 1-2-3-4-5-6-7  */


//javascript program for different tree traversals  

/* Class containing left and right child of current 
   node and key value*/
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
// Root of Binary Tree 
var root = null;

/* 
 * Given a binary tree, print its nodes according to the "bottom-up" postorder 
 * traversal. 
 */
function printPostorder(node) {
    if (node == null)
        return;

    // first recur on left subtree 
    printPostorder(node.left);

    // then recur on right subtree 
    printPostorder(node.right);

    // now deal with the node 
    console.log(node.key + " ");
}

/* Given a binary tree, print its nodes in inorder */
function printInorder(node) {
    if (node == null)
        return;

    /* first recur on left child */
    printInorder(node.left);

    /* then print the data of node */
    console.log(node.key + " ");
    /* now recur on right child */
    printInorder(node.right);
}

/* Given a binary tree, print its nodes in preorder */
function printPreorder(node) {
    if (node == null)
        return;

    /* first print data of node */
    console.log(node.key + " ");
    /* then recur on left subtree */
    printPreorder(node.left);

    /* now recur on right subtree */
    printPreorder(node.right);

}
function levelOrder(root){  // DFS
    const queue=[];
    queue.push(root);
    
    while(queue.length){
        let front=queue.shift();
        process.stdout.write(`${front.data} `);
        if(front.left) queue.push(front.left);
        if(front.right) queue.push(front.right);
    }
}
// Driver method 


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Preorder traversal of binary tree is <br/>");
printPreorder(root);

console.log("Inorder traversal of binary tree is <br/>");
printInorder(root);

console.log("Postorder traversal of binary tree is <br/>");
printPostorder(root); 

/*.......................................................................................................................*/
// 12th Jan, 2023
 
 
// Binary Search Tree is a node-based binary tree data structure which has the following properties:  
// The left subtree of a node contains only nodes with keys lesser than the node’s key. 
// The right subtree of a node contains only nodes with keys greater than the node’s key. 
// This means everything to the left of the root is less than the value of the root and everything to the right of the root is greater than the value of the root. Due to this performing, a binary search is very easy. 
// The left and right subtree each must also be a binary search tree.   
// There must be no duplicate nodes(BST may have duplicate values with different handling approaches) 

// Handling approach for Duplicate values in the Binary Search tree: 
// You can not allow the duplicated values at all. 
// We must follow a consistent process throughout i.e either store duplicate value at the left or store the duplicate value at the right of the root, but be consistent with your approach. 
// We can keep the counter with the node and if we found the duplicate value, then we can increment the counter 
 
 
 
// 1. How to search a key in given Binary Tree? .........................................................................
 
 let key = 2;
// A utility function to search 
// a given key in BST 
function search(root, key) { 
    // Base Cases: root is null 
    // or key is present at root 
    if (root == null || 
        root.key == key) 
        return root; 
  
   // Key is greater than root's key 
    if (root.key < key) 
       return search(root.right, key); 
  
    // Key is smaller than root's key 
    return search(root.left, key); 
} 
 
 
// 2. Insertion of a key(Node) : ................................................................................
 
// javascript program to demonstrate 
// insert operation in binary 
// search tree 
    /* 
     * Class containing left and right child of current node and key value 
     */ 
    class Node { 
      
constructor(item) { 
            this.key = item; 
            this.left = this.right = null; 
        } 
    } 
  
    // Root of BST 
    var root = null; 
  
    // This method mainly calls insertRec() 
    function insert(key) { 
        root = insertRec(root, key); 
    } 
  
    /* 
     * A recursive function to insert a new key in BST 
     */ 
    function insertRec(root , key) { 
        //If the tree is empty, return a new node  
        if (root == null) { 
            root = new Node(key); 
            return root; 
        } 
        /* Otherwise, recur down the tree */ 
        if (key < root.key) 
            root.left = insertRec(root.left, key); 
        else if (key > root.key) 
            root.right = insertRec(root.right, key); 
  
        /* return the (unchanged) node pointer */ 
        return root; 
    } 
  
    // This method mainly calls InorderRec() 
    function inorder() { 
        inorderRec(root); 
    } 
  
    // A utility function to 
    // do inorder traversal of BST 
    function inorderRec(root) { 
        if (root != null) { 
            inorderRec(root.left); 
            console.log(root.key+"<br/>"); 
            inorderRec(root.right); 
        } 
    } 
  
// Driver Code 
  
        /* Let us create following BST 
              50 
           / 	\ 
          30  	70 
         /  \	/  \ 
       20   40  60   80 */ 
        insert(50); 
        insert(30); 
        insert(20); 
        insert(40); 
        insert(70); 
        insert(60); 
        insert(80); 
  
        // print inorder traversal of the BST 
        inorder(); 

