// 1. Bubble sort ..................................................................................
let arr1 = [24, 4, 3, 85, 5, 9, 6]
// function bubSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let swap=true;
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 arr[j]=arr[j]+arr[j+1]
//                 arr[j+1]=arr[j]-arr[j+1]
//                 arr[j]=arr[j]-arr[j+1]
//                 swap=false;
//             }
//         }
//         if(swap==true) break;
//     }
//     return arr
// }
// console.log(bubSort(arr1))    // O(n^2)  => TC

const InprovedbubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped == false)
            break;
    }
    return arr1
}
console.log(InprovedbubbleSort(arr1))  //TC: O(n^2) //Best Case TC: Omega (n) or O(n) //SC: O(1)

// 2. Merge sort ....................................................................................................

// A.)............................
let arr = [24, 4, 3, 85, 5, 9, 6]
if (arr.length == 1) return arr
let left = 0
let right = arr.length - 1
function mergeSort(arr, left, right) {

    if (left >= right) { return; } //returns recursively

    var mid = left + parseInt((right - left) / 2)
    //let mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
    return arr
}
// arr1=[left......mid]
// arr2=[mid+1.....right]
function merge(arr, left, mid, right) {
    let arr1 = []
    let arr2 = []
    // Logic
    let lenArr1 = mid - left + 1
    let lenArr2 = right - mid
    // Copy the data of arr in arr1 and arr2
    for (let i = 0; i < lenArr1; i++) {
        arr1[i] = arr[left + i]
    }
    for (let j = 0; j < lenArr2; j++) {
        arr2[j] = arr[mid + 1 + j]
    }
    let a = 0   // Index of arr1
    let b = 0   // Index of arr2
    let c = left  // Index of arr
    // Merging of arr1 and arr2 into arr in sorted form
    while (a < lenArr1 && b < lenArr2) {
        if (arr1[a] <= arr2[b]) {
            arr[c] = arr1[a]
            a++
        } else {
            arr[c] = arr2[b]
            b++
        }
        c++
    }
    while (a < lenArr1) {
        arr[c] = arr1[a]
        a++
        c++
    }
    while (b < lenArr2) {
        arr[c] = arr2[b]
        b++
        c++
    }
}
//console.log(mergeSort(arr, left, right))

// B.)........................................
if (arr.length == 1) return arr
function mergeSort2(arr, left, right) {

    if (left >= right) { return; } //returns recursively

    let mid = left + parseInt((right - left) / 2)
    //let mid = Math.floor((left + right) / 2)
    mergeSort2(arr, left, mid)
    mergeSort2(arr, mid + 1, right)
    merge2(arr, left, mid, right)
    return arr
}
// arr1=[left......mid]
// arr2=[mid+1.....right]
function merge2(arr, left, mid, right) {
    let mergeArr = new Array()
    let index1 = left  // Index of arr1
    let index2 = mid + 1  // Index of arr2
    let mergeIndex = 0 // Index of mergeArr(temp array)

    // Copy the data of arr in arr1 and arr2
    // Merging of arr1 and arr2 into temp array in sorted form
    while (index1 <= mid && index2 <= right) {
        if (arr[index1] <= arr[index2]) {
            mergeArr[mergeIndex] = arr[index1]
            index1++
        } else {
            mergeArr[mergeIndex] = arr[index2]
            index2++
        }
        mergeIndex++
    }
    while (index1 <= mid) {    // if element left in left part of array i.e, array1
        mergeArr[mergeIndex] = arr[index1]
        index1++
        mergeIndex++
    }
    while (index2 <= right) {   // if element left in right part of array i.e, array2
        mergeArr[mergeIndex] = arr[index2]
        index2++
        mergeIndex++
    }
    // copy the elment of temp array in original array
    let k = left
    for (let i = 0; i < mergeArr.length; i++) {
        arr[k] = mergeArr[i]
        k++
    }
}
//console.log(mergeSort2(arr, left, right))

// C.) ..............................................................................

var sortArray = function (arr) {

    function merge(arr1, arr2) {
        const output = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                output.push(arr1[i++]);
            } else {
                output.push(arr2[j++])
            }
        }
        while (i < arr1.length) {
            output.push(arr1[i++])
        }
        while (j < arr2.length) {
            output.push(arr2[j++])
        }
        return output;
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid))
        return merge(left, right);
    }
    return mergeSort(arr)
};
//console.log(sortArray(arr))

// 3. Insertion Sort .....................................................................................

let arr3 = [12, 11, 13, 5, 6];    // arr3 = [5,2,7,2,9,6,2,11,4];

const insertionSort = (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];   // temp variable
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;

    }
    return arr3
}
console.log(insertionSort(arr3));

//TC: O(n^2) //TC: Best TC : Omega (n) -> already sorted array //SC: O(1)

// 4. Selection Sort.....................................................................

let arr0=[20,12,53,3]
function selectionSort(arr){
let selectIn;
for(let i=0;i<arr.length;i++){
    selectIn=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[selectIn]){
            selectIn=j
        }
    }
    let temp=arr[selectIn]
    arr[selectIn]=arr[i]
    arr[i]=temp
}
return arr
}
console.log(selectionSort(arr0))

// 5. Quick Sort ......................................................................................

let arr4 = [5, 2, 7, 2, 9, 6, 2, 11, 4];

const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const partition = (arr, low, high) => {

    pivot_element = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {

        if (pivot_element > arr[j]) {

            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

const quickSort = (arr, low, high) => {

    if (low < high) {
        let pivot_index = partition(arr, low, high);
        quickSort(arr, low, pivot_index - 1);
        quickSort(arr, pivot_index + 1, high);
    }
    return arr
}
let low=0;
let high=arr4.length-1
console.log(quickSort(arr4, low, high));  // O(n^2)=> TC ,O(n)=> SC (not use any auxilary data stucture but call stack)

// 6. Counting sort Or RELATIVE SORT.................................................................................
      // Applicable for fix array length and fix array element range.

let ar1 = [2,3,1,3,2,4,6,7,9,2,19]; 
let ar2 = [2,1,4,3,9,6]; 

const relativeSort = (arr1,arr2) => {
    const hash = new Array(1001).fill(0);  // Hashing 
    
    for(let i =0;i<arr1.length;i++){
        hash[arr1[i]]++;
    }
    let indexSortedArray = 0;
    for(let i =0;i<arr2.length;i++){
        
        while(hash[arr2[i]] > 0){  //100*n
            arr1[indexSortedArray] = arr2[i];
            indexSortedArray++;
            hash[arr2[i]]--;
        }
    }
    for(i=0;i<1001;i++){  //hash array   if element left to sort in arr1
        while(hash[i]>0){  
          arr1[indexSortedArray] = i;
          hash[i]--;
          indexSortedArray++
      }
    }
    return arr1;
}
console.log(relativeSort(ar1, ar2));         //TC: O(n+m)  //SC: O(1)

// 7. Cyclic Sort For fix range [0,n],[1,n]

let nums=[3,0,1,4]
var missingNumber = function(nums) {
       let n = nums.length;
     
           //cyclic sort : [0,n] ,[1,n]
           for(let i=0;i<n;){
               let correctIndex = nums[i]-1; // if [1,n] than a[i]-1
               if(nums[correctIndex] != nums[i]){ // swap and sitting correct pos
                       let temp = nums[i];
                       nums[i] = nums[correctIndex];
                       nums[correctIndex] = temp;
                }else
                    i++;
           }
            console.log(nums) // [0,1,undefined,3,4]
           //finding missing number
           for(let i=0; i< n;i++){
                   if(nums[i] != i)
                       return i;
           }
     
        return n;  // if already sorted
    };
console.log(missingNumber(nums))
