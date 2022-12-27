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

// 7. Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.

let arr1 = [1, 5, 10, 20, 40, 80], arr2 = [6, 7, 20, 80, 100], arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
let n1 = 6, n2 = 5, n3 = 8
function commonElements(arr1, arr2, arr3, n1, n2, n3) {

    let i = 0; j = 0; k = 0;        // TC => O(n1+n2+n3), SC => O(1)
    let result = [];
    while (i < n1 && j < n2 && k < arr3.length) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr3[k]) {
            j++;
        }
        else {
            k++;
        }
    }
    return [...new Set(result)];

    //     let low2 = 0, high2 = n2 - 1;       // TC => O(nlogn), SC => O(1)
    //     let low3 = 0, high3 = n3 - 1
    //     let mid2, mid3;
    //     let arr = []
    //     for (let i = 0; i < n1; i++) {
    //         let search = arr1[i]
    //         let find = false;
    //         while (low2 <= high2) {
    //             mid2 = Math.floor(low2 + (high2 - low2) / 2)
    //             if (arr2[mid2] == search) {
    //                 find = true;
    //                 break;
    //             }
    //             if (arr2[mid2] < search) {
    //                 low2 = mid2 + 1;
    //             } else {
    //                 high2 = mid2 - 1
    //             }
    //         }
    //         // Re-assign the value after one times compliting
    //         low2 = 0, high2 = n2 - 1;
    //         if (find == true) {
    //             while (low3 <= high3) {
    //                 mid3 = Math.floor(low3 + (high3 - low3) / 2)
    //                 if (arr3[mid3] == search) {
    //                     arr.push(arr1[i])
    //                     break;
    //                 }
    //                 if (arr3[mid3] < search) {
    //                     low3 = mid3 + 1;
    //                 } else {
    //                     high3 = mid3 - 1
    //                 }
    //             }
    //         }
    //         find = false;
    //         low3 = 0, high3 = n3 - 1
    //     }
    //     return arr
}
console.log(commonElements(arr1, arr2, arr3, n1, n2, n3))