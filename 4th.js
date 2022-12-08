// 1. Given an array of integers and a number K, find the smallest element in array greater than or equal to K. If such element exists in the array, display it otherwise display "-1"

// function findSmallestGreaterFromK(arr) {
//     let k = 5
//     let a = 8
//     for (let i of arr) {
//         if (i >= k) {
//             return i
//         }
//     }
//     return "-1"
// }
// console.log(findSmallestGreaterFromK([1, 3, 4, 7, 8, 9, 9, 1]))


// 2. Given an array A of N positive integers, find the number of distinct pairs (A[i], A[j]) whose sum exists in the given array for all 0 ≤ i < j < N.
//Note: While repeating pairs will not be counted again. And we can’t make a pair using the same elements again. Eg : (2, 1) and (1, 2) will be considered as only one pair. 

// function countDistinctPairSumAndMatch(a,arr) {
//     arr.sort( function(a,b){return a-b})
//           let map = new Map(); //save in key and value format
//           let count=0
//          for(let i=0;i<a-1;i++){
//               for(let j=i+1;j<a;j++){
//                 // key(i,j) and value(i+j)
//                 map.set(arr[i]+","+arr[j],arr[i]+arr[j])
//                 //console.log(map)
//                 //console.log(map.values())
//                   }
//               }
//           let newArr= new Set(arr); // Remove duplicate
//           //console.log(newArr)
//           for( i of newArr){
//               for( j of map.values()){ // compare
//                   if(i==j) count++        
//               }
//           } 
//           return count;
//       }
//           var v = "1 5 6 4 -1 5 10"
//           var a =7 // v.length
//           var arr=v.split(" ").map(Number)
//           var res = countDistinctPairSumAndMatch(a,arr);
//           console.log(res);
      



//3. Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.

// function solve(s, t) {
//    while(s.length > 0) {
//     let  position = s.indexOf(t)
//       if( position == -1)
//          break
//       s = s.replace(t, "", 1)
//     }
//    if(s.length== 0) {
//     return "yes"
//    }
//    return "No"
// }
// let s ="ccodede"
// let t="code"
// console.log(solve(s, t))

// // 4.  const str1 = 'Mozilla';

// console.log(str.substr(1, 2));
// // expected output: "oz"
// let res= str.slice(2)
// console.log(res);
// console.log(str)

// let str = "try_me";

// 5. Given a string S containing a number of words. If the count of words in the string S is even then reverse its even position’s words else reverse its odd position, push reversed words at the starting of a new string and append the remaining words as it is in order.

// function reverseArray(arr,len) {
//     for( let i=0;i<len;i++) {
//         if(len % 2==0){
//             if(i % 2!=0) {
//                 var cut =arr.splice(i,1)
//                 let reverse=cut[0].split("").reverse().join("")
//                 arr.unshift(reverse)
//             }
//         } else {
//             if(i % 2==0){
//                 var cut =arr.splice(i,1)
//                 let reverse=cut[0].split("").reverse().join("")
//                 arr.unshift(reverse)
//             }
//         }
//     }
//     return arr.join(" ")
// }
// let a="Ashis Yadav Abhishek Rajput Sunil Pundir sikendra";
// let arr= a.split(" ")
// let len=arr.length
// let res= reverseArray(arr,len)

// console.log(res)

// 6. A given string of how many substrings are divisible by 6

let str="4806"
let arr=[]
for (let i=0;i<str.length-1;i++){
    for (let j=i+1;j<str.length+1;j++){
      //let arr1=  str.slice(i,j)
        arr.push(str.slice(i,j))
        //console.log(arr)
    }
}
//console.log(arr)
let sum1=0
for(let i=0;i<arr.length;i++){
    let sum = arr[i].split("").reduce((x,y)=>x+y,0)
    // here we check last from 2 and sum of all from 3 because who is divisible by 2 and 3 whichis also from 6
    if(arr[i][arr[i].length-1] % 2==0 && sum % 3==0  ){
     sum1++;
    }
}
console.log(sum1)

// // 7. Integer and big-integer

// let s="77777777777777777"
// let sum =0
// for(let i=0;i<s.length;i++){
//     sum+= parseInt(s[i])
//     //console.log(sum)
// }
// let s2=parseInt(s)
// console.log(typeof s2)
