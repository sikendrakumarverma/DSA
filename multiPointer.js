// 1. Given an integer array of only 0 and 1, segregate them.......................................................
//all 0 should be on left side and all 1 should be on right side

// Aproach

// // A. sort the arr

// arr.sort((a,b) => a-b);//increasing
// arr.sort((a,b) => b-a);//decreasing
// // T.C : O(nLogn)

// // B. Using for loop 
//     // countOf0++ = 6
//     // countOf1++ = 7

//     // O(n)
//     // for(0-6)
//     // arr.push(0)
//     // for(7-14)
//     // arr.push(1)

// let arr = [0,1,1,1,0,1,0,1,0,0,0,1];
// //let ans = [0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1];

// const segregate = (arr) => {
//     let n = arr.length;
//     let left = 0;
//     let right = n-1;

//     while(left<right){

//         while(arr[left] == 0 && left< right)
//           { 
//               left++;
//             }
//         while(arr[right] == 1 && left< right)
//          {   right--;}

//         if(left< right){
//             arr[left] = 0;
//             arr[right] =1;
//             left++;
//             right--;
//         }
//     }
//     console.log(arr);
// }

// segregate(arr);

// // TC : O(n)
// // SC : O(1)


// 2. given 0,1,2 , segregate them ........................................................................
//Dutch National Flag problem

// let arr1 = [1,0, 1, 1, 2, 1, 0, 2, 1, 0];

// //1. arr.sort(a,b=>a-b);
// //2. freq of 0,1,2  -> TC: O(n)+o(n)
// //3.


// const func = (arr) => {
//     let n = arr.length;
//     let left = 0;
//     let right = n - 1;
//     let mid = 0;
//     let temp;

//     while (mid <= right) {

//         if (arr[mid] == 0) {
//             temp = arr[mid];
//             arr[mid] = arr[left];
//             arr[left] = temp;

//             left++;
//             mid++;
//         }
//         else if (arr[mid] == 2) {
//             temp = arr[mid];
//             arr[mid] = arr[right];
//             arr[right] = temp;
//             right--;
//         }

//         else
//             mid++;
//     }

//     console.log(arr1);
// }
// //TC : O(n)
// //SC : O(1)
// func(arr1);

// 3. Merge Two Sorted Arrays ...................................................................

// let a1 = [2, 3, 5, 7, 8, 0, 0, 0, 0]
// let n1 = 5
// let a2 = [1, 4, 8, 9]
// let n2 = 4
// const func = (a1, a2, n1, n2) => {
//     let r = n1 + n2 - 1;
//     let p = n1 - 1;
//     let q = n2 - 1;
//     //console.log(a1);
//     while (q >= 0) {
//         if (p >= 0 && a1[p] > a2[q]) {
//             a1[r] = a1[p];
//             r--;
//             p--;
//         } else {
//             a1[r] = a2[q];
//             r--;
//             q--;
//         }
//     }
//     console.log(a1);
// }
// func(a1, a2, n1, n2);   //TC: O(n1+n2) //SC: O(1)

// 4. Two Sum II - Input Array Is Sorted return an array with index -> [3,5] .........................................

let arr = [2, 4, 5, 6, 7, 8, 16];
let target = 14;
// Approach
// A.) Brute Force O(n^2)     // C.) Binary Search  TC: O(n* logn)

// B.) Two Pointer O(n)      

var twoSum = function (arr, target) {

    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        }
        if (sum > target) {
            right -= 1;
            //continue;
        } else
            left += 1;
    }
}
console.log(twoSum(arr, target))
// C.) Binary Search  TC: O(n* logn)

const func = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        let low = i + 1;
        let high = arr.length - 1;
        let mid;
        while (low <= high) {
            mid = Math.floor(low + (high - low) / 2);

            if (arr[mid] == complement) {
                return [i, mid];
            }
            else if (arr[mid] > complement) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
}
console.log(func(arr, target));


