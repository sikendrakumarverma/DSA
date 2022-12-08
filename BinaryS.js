// 1. Binary search Normal .............................................................

// const func = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1;
//     let mid;

//     while (low <= high) {
//         mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] == target) {
//             return mid;
//         }

//         else if (arr[mid] < target) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     return -1  // if target is not present in array
// }
// let array = [1, 2, 3, 4, 5, 5, 6, 7];
// let target1 = 6;
// console.log(func(array, target1))

// 2. Given a sorted array which contain some repeating elements, //target .
//find out starting and ending index of the target.

// let arr = [1, 4, 5, 6, 7, 7, 7, 8, 9, 9];
// let target = 7  // OUTPUT=4,6

// let arr2 = [1, 4, 5, 6, 7, 7, 7, 8, 9, 9];
// let target2 = 3 //OUTPUT = -1,-1

// let arr3 = [1, 4, 5, 6, 7, 8, 9, 9];
// let target3 = 7 // OUTPUT = 4,4

// const func2 = (arr, target) => {
//     let n = arr.length;
//     let low = 0;
//     let high = n - 1;
//     let mid;
//     let leftOcc = -1;
//     let rightOcc = -1;

//     // [1,4,5,6,7,7,7,7,7,7,8,9,9]
//     while (low <= high) {
//         mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] == target) {
//             leftOcc = mid;
//             high = mid - 1; // move left to find out ,target is present in any other index in starting
//         }

//         else if (arr[mid] < target) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     // Again we check in right site

//     low = 0;
//     high = n - 1;

//     while (low <= high) {
//         mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] == target) {
//             rightOcc = mid;
//             low = mid + 1;  // move left to find out ,target is present in any other index in starting
//         }

//         else if (arr[mid] < target) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     let index = []
//     index.push(leftOcc)
//     index.push(rightOcc)

//     return index
//     //console.log( leftOcc, rightOcc)
// }
// console.log(func2(arr, target));  //  TC : O(logn)  SC: O(1)

// 3. Search target element in Rotated Sorted Array I all distinct element ...............................................

// let arr1 = [8, 9, 1, 2, 3, 4, 5, 7];//sorted array after rotation
// let target = 5
// // There is an integer array arr1 sorted in ascending order (with distinct values).

// const func3 = (arr, target) => {
//     let n = arr.length;
//     let low = 0;
//     let high = n - 1;
//     let mid;
//     while (low <= high) {
//         //[8,9,10,11,12,13,14,15,1,2,3,4,5,7] , target = 3
//         mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] == target)
//             return mid;

//         else if (arr[low] <= arr[mid])  // find out sorted part of array
//         {
//             if (target < arr[mid] && target >= arr[low])  // check target is exist in sorted part
//             {
//                 high = mid - 1;
//             }
//             else {
//                 low = mid + 1;
//             }
//         }

//         else if (arr[mid] <= arr[high])  // find out sorted part of array
//         {
//             if (target > arr[mid] && target <= arr[high])  // check target is exist in sorted part
//             {
//                 low = mid + 1

//             }
//             else {
//                 high = mid - 1;
//             }
//         }
//     }
//     return -1;  // if target is not present in array
// }
// console.log(func3(arr1, target));

// 4. Search in Rotated Sorted Array II repeatingelement ..........................................................

let arr4 = [1, 0, 1, 1, 1];
let target4 = 0

//Linear Search -> for loop -> O(n)

//Binary Search  => O(logn)
const func4 = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {

        mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target)
            return true;

        else if (arr[mid] < arr[high] || arr[low] > arr[mid]) {
            if (target > arr[mid] && target <= arr[high])
                low = mid + 1;
            else {
                high = mid - 1;
            }
        }
        else if (arr[low] < arr[mid] || arr[mid] > arr[high]) {
            if (target >= arr[low] && target < arr[mid])
                high = mid - 1;
            else
                low = mid + 1;
        } else {
            low++; // arr[low] === arr[high] === arr[mid]
        }
    }
    return false;
}
console.log(func4(arr4, target4))


// 5. Single Element in a Sorted Array ........................................................

// //Pair Index Property
// //From the start the duplicates elements start with even(0) and end with odd(1)
// // once the unique element occurs then
// //the way will change to start with odd and end with even
// // Case 1 : if mid != mid + 1 and mid != mid - 1
// // found the answer

// // [1, 1, 2, 2, 3, 4, 4]
// //  0  1  2  3  4  5  6
// // Case 2 : if the middle index is odd (here mid = 3)
// // if mid == mid - 1 then the answer will be on the right side
// // else left side

// // [1, 1, 2, 3, 3, 4, 4, 8, 8]
// //  0  1  2  3  4  5  6  7  8
// // Case 3 : if the middle index is even (here mid = 4)
// // if mid == mid - 1 then answer will on the left side
// // else right side

// var singleNonDuplicate = function (nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     let mid;

//     while (start <= end) {

//         mid = Math.floor(start + (end - start) / 2);
//         // Case 1
//         if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
//             return nums[mid];
//         }
//         // Case 2 & 3 : Partition of array using Pair Index Property
//         if ((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 != 0 && nums[mid] == nums[mid - 1])) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return -1;
// };
// let nums=[1, 1, 2, 3, 3, 4, 4, 8, 8]
// console.log(singleNonDuplicate(nums))

// 6. Find Peak Element in logn TC .................................................................................

let a = [2, 4, 5, 1, 7, 8]     //let a = [1,2,3,1];

const func = (array) => {
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (low <= high) {

        mid = Math.floor(low + (high - low) / 2);

        if (low == high)
            return low;

        else if (array[mid] < array[mid + 1])
            low = mid + 1;

        else {
            high = mid;
        }
    }
}
console.log(func(a));  //TC : O(logn)   //SC: O(1)


