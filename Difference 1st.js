//calculate the difference of an array of first and last element
// array = [1 ,1 ,1 ,1 ];
// let lastD = array.pop();
// let diff = lastD - array[0];
//  let ans=Math.abs(diff)
// console.log(ans);

// 2. Multiply the elements of anarray
// array = [4, 2, 3,1 ];
// let sum=1
// for(let i in array) {
//    let sum=sum*array[i];
// //  sum.push(sum)
// }
// console.log(sum)

// 3. Rotate array in right side

// let array=[10,20, 30,40, 50,60, 70,80, 90, 100]
// let n=3

//  for (let i=0; i<n;i++){
//     let last = array.pop();
//     array.unshift(last);

//  }
//  console.log(...array)

// 4.largest gap

// let array=[56 ,7 ,8 ,54 ,23 ,2 ,3 ]
// var diffs = [];
// for(let i=1;i<array.length;i++) {
//    for(let j=0;j<array.length;j++) {
      
//       if(array[i] > array[j]){
//          diffs.push(array[i]-array[j]);
//      }
//    }
// }
// console.log(diffs)
// let result1=Math.max.apply( Math, diffs );
// console.log(result1)

//4. copy the elements of one array to another
// let array=[5 ,6 ,7 ,8]
// let copy=array
// console.log(copy)

//5. prime number

// function primeNum(num) {
     
//     let result = [];
//     let flag = 0;
//     for (let i = 0; i < num.length; i++) {
//         let n = num[i]
//         for (let j = 2; j < n; j++) {
//             if (n % j == 0) {
//                 flag = 1
//                 break
//             }
//         }
        
//         if (flag === 0 && n != 1) {
//             result.push(n)
//         }
//         else {
//             flag = 0
//         }

//     }
//     return result
// } 

// let num = [2 ,2 ,2, 2]
// // let num = [9 ,8 ,7 ,6 ,5]
// // let num = [1, 1, 1, 1, 1, 1]// O/P []expected

// let res = primeNum(num)
// console.log(res)

//6. Delete from index

// let array=[10, 20, 30, 40, 50]// Remove Element in Array given index no.
// let n=1
// let array1=array.splice(n,1)
// console.log(array)

// 6. Deleete elements of array multiply by 5

let array=[2,3,4,7,320]
let array1=array.filter(elements=>elements % 5 != 0)
console.log(array1)