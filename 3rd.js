// // 1. Array manipulations and sum
//// Approach: Sort the array. Traverse the array considering that the value of K is equal to the current element and then check if sum of the previous elements + (K * number of remaining elements) = S. If yes then print the value of K, if no such element found then print -1 in the end.
//// Below is the implementation of the above approach: 
    
//     let arr=[45, 6, 34 ,21, 38] 
//     let size= 5
//     let N= 105

 
//     // Sorting the array in increasing order
//     //sort(arr, arr + size);
//    let asscen= arr.sort(function(a, b){return a - b});
//    //console.log(asscen)
//     let temp_sum = 0;
//  console.log(temp_sum)
//     // Loop through all the elements of the array
//     for (let i = 0; i < asscen.length; i++) {
//         temp_sum += asscen[i];
 
//         // Checking if sum of array equals N
//         if (N - temp_sum == asscen[i] * (size - i - 1)) {
//             console.log(asscen[i]);
//             break;
//         } else {
//             console.log("-1");
//         break
//         }
//     }

// 2. Count array elements that divide sum of all other elements
// Approach: Run two-loop from 0 to N, calculate the sum of all elements except the current element and if this element divides that sum, then increment the count.
// Below is the implementation of the above approach: 

// let arr=[3, 10, 4, 6, 7]
// let n=5
// let count = 0;
//     for (let i = 0; i < n; i++) {
 
//         // Initialize sum to 0
//         let sum = 0;
//         for (let j = 0; j < n; j++) {
 
//             // If current element and the
//             // chosen element are same
//             if (i == j)
//                 continue;
 
//             // Add all other numbers of array
//             else
//                 sum += arr[j];
//         }
 
//         // If sum is divisible by the chosen element
//         if (sum % arr[i] == 0)
//             count++;
//     }
 
//     // Return the count
//     console.log (count);

// 3. Given a sorted array (with unique elements), find whether there exists an element(say X) which is exactly half of the sum of all the elements of the array including X.



// function solution(a,arr) {
//     //Write your solution here
//       let add=arr.reduce((a,b)=>a+b) // calculate sum of array like loop
//       console.log(add)
//       let half=add/2
//       let find=arr.filter(a=>a==half)
//       if(find.length>0){
//           return "Yes"
//       }
//       return "No"
//   }
//       var a = 3
//       var v="1 2 3"
//       const arr=v.split(" ").map(Number)
//       var res = solution(a,arr);
//       console.log(res);
// 5.  Self practice..............................................................................

//  const arr1 = ["Cecilie", "Lone","Emil", "Tobias", "Linus"];
// // const arr2 = ["Emil", "Tobias", "Linus"];
// // const arr3 = ["Robin"];

// // const children =arr2.concat( arr3);
// // console.log(children)
// let s2="EmilTobiasLinusCecilieLone"
// var f = [ ]
// for(let i=0;i<2;i++){

// f.push(arr1[i])
// console.log(f)  
// }

// var s = []
// for(let i=2;i<arr1.length;i++){

// s.push(arr1[i])

//   }
// let data1= s.concat(f)
// //console.log(data1.join(""))
//   if(data1.join("")==s2){
//     console.log("yes")
//   }  

//  6.  SCOPE AND DESTRUCTURE
console.log(x)
//var x = 5

function sum(a,b){
  var x = 5
  //console.log(x)
return a+b
}
//console.log(x)




let res=sum(5,3)
