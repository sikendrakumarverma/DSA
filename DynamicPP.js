// 1. Fibonacci Number.............................................................................................

let n1=10;
var fib = function(n) {
    // Approach: 1.) Dynamic prog. TC=> O(N) SC=> O(N)
              // 2.) Recursion    TC=> O(!N) SC=> O(1) 
    
         let storeArr=[0,1,1];
         for(let i=3;i<=n;i++){
             storeArr[i]=storeArr[i-1]+storeArr[i-2];
         }
         return storeArr[n];
    
    // 2.
    //   if(n == 0 ) return 0
    //   if(n<=2) return 1
    //   return fib(n-1)+fib(n-2)
    };
    console.log(fib(n1));

// 2. You are climbing a staircase. It takes n steps to reach the top....................................................
 //Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

let n2=3;
var climbStairs = function(n) {
    let dp=[0,1,2]
    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n];
};
console.log(climbStairs(n2))

// 3.  Counting Bits................................................................................................
//Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 
//1's in the binary representation of i.

let n = 2  // Output: [0,1,1] // Explanation: 0 --> 0 ,1 --> 1, 2 --> 10
var countBits = function (n) {
    // Approach: 1.) Dynamic Programing  TC=> O(n) SC=>O(n)
    //            2.) Brute force   TC=> O(nlogn) SC=>O(n)

    let ans = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            let ind = Math.floor(i / 2)
            ans[i] = ans[ind];
        } else {
            let ind = Math.floor(i / 2)
            ans[i] = ans[ind] + 1;
        }
    }
    return ans;

    // // 2.)
    // let ans=new Array(n+1).fill(0);
    //    for(let i=0;i<=n;i++){
    //        let num=i;// num=0;
    //        let count=0;

    //        while(num){
    //            count+=Math.floor(num%2);//1+1+0+
    //            num=Math.floor(num/2);
    //        }
    //        ans[i]=count;
    //    } 
    //    return ans;

};
console.log(countBits(n));