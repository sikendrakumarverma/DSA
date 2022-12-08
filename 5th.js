// // 1. Remove all occurrences of word
// //  Given a string S and a word W, remove all the occurrences of the word W in the input string S

// let s= " code coder coders "
// let w ="coder"
// let l=s.length
// let b=s.split(" ")
// //console.log(l)
// //console.log(b)
// for (let i=0;i<b.length;i++){
//     if(b[i]==w){
//         b.splice(i,1)
       
//     }
    
// }
// console.log(b.join(" "))

// // 2. Find length of string without using inbuilt string method

// function strLength(s) {
//     var length = 0;
//     while (s[length] !== undefined){
//       length++;
//     } 
//     return length;
//   }
  
//   console.log(strLength(" sikendra  k")); // 5
//   //console.log(strLength("")); // 0

// // 3.

// /* A Naive recursive implementation of
//     0-1 Knapsack problem */
     
    // A utility function that returns
    // maximum of two integers
    function max(a, b)
    {
         return (a > b) ? a : b;
    }
  
    // Returns the maximum value that can
    // be put in a knapsack of capacity W
    function knapSack(W, wt, val, n)
    {
  
        // Base Case
        if (n == 0 || W == 0)
            return 0;
  
        // If weight of the nth item is
        // more than Knapsack capacity W,
        // then this item cannot be
        // included in the optimal solution
        if (wt[n - 1] > W)
            return knapSack(W, wt, val, n - 1);
  
        // Return the maximum of two cases:
        // (1) nth item included
        // (2) not included
        else
            return max(val[n - 1] +
            knapSack(W - wt[n - 1], wt, val, n - 1),
            knapSack(W, wt, val, n - 1));
    }
       
    let val = [ 60, 100, 45 ,10 ,20 ];     
    let wt = [ 10 ,20 ,45 ,68 ,23];
       let W = 50;
    let n = val.length;
 
    console.warn(knapSack(W, wt, val, n));

    // function countUnique(arr,n)
    // {
 
    //     // Set to store unique pairs
    //     let s = new Set();
 
    //     // Make all possible pairs
    //     for (let i = 0; i < n; i++){
    //         for (let j = 0; j < n; j++){
    //             s.add((arr[i], arr[j]));
    //             console.warn(s);
    //         }    
    //     // Return the size of the set
    //     }
        
    //     return Math.pow(s.length,2);
    // }
 
    // // Driver code
    // let arr = [ 12 ,3 ,67 ,3 ,445];
    // let n = arr.length;
 
    // console.warn(countUnique(arr, n));
     

    // //..............................
    // function countUnique(arr,n)
    // {
    // let s = new Set();
 
    //     // Make all possible pairs
    //     for (let i = 0; i < n; i++){
    //         for (let j = 0; j < n; j++){
    //             s.add((arr[i]+","+ arr[j]));
    //             console.warn(s);
    //         }    
    //     // Return the size of the set
    //     }
        
    //     return s.size;
    // }
 
    // // Driver code
    // let arr = [ 45 ,45, 45 ,45 ,45 ,45];
    // let n = arr.length;
 
    // console.warn(countUnique(arr, n));


  