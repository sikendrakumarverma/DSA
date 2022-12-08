// 1. Three sum .................................................................................................

let arr1 = [-1, 0, 1, 2, -1, -4]      // O/P= [[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
    let result = []
    // Atfirst we sort because here not necessory to maintained index of element 
    // sort numbers in ascending order to use two pointer approach
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1
        let end = nums.length - 1
        // since we need total sum as 0 positive will not be solution
        if (nums[i] > 0) break;  // Beacase arr sorted
        while (start < end) {
            if (nums[i] + nums[start] + nums[end] === 0) {
                // if found valid triplet then push in result
                result.push([nums[i], nums[start], nums[end]])

                //after the using the element,we will move ahead of all of its duplicates
                while (nums[start] === nums[start + 1]) start++
                while (nums[end] === nums[end - 1]) end--
                start++
                end--
            }
            else if (nums[i] + nums[start] + nums[end] < 0) {
                start += 1;
            } else {
                end -= 1;
            }
        }
        //to avoid duplicacy of outer for loop element
        while (i < nums.length - 3 && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return result
};
console.log(threeSum(arr1))    //  //TC : O(n^2)  //SC: O(n)

// 2. 3Sum Closest .....................................................................................
//sorting+ 2pointer

let arr2 = [-1, 2, 1, -4]    // O/P = -1+2+1=2
let target = 1;

const threeSumClosest = (arr, target) => {

    arr.sort((a, b) => a - b);
    let diff = Number.MAX_VALUE;
    let closestSum = 0;

    for (let i = 0; i < arr.length - 2; i++) {

        if (i > 0 && arr[i] == arr[i - 1])
            continue;

        let low = i + 1;
        let high = arr.length - 1;

        while (low < high) {
            let sum = arr[i] + arr[low] + arr[high];

            if (sum == target)
                return sum;

            else if (sum < target)
                low++;
            else
                high--;

            let localDiff = Math.abs(target - sum);
            if (localDiff < diff) {
                diff = localDiff;
                closestSum = sum;
            }
        }
    }
    return closestSum;
}
console.log(threeSumClosest(arr2, target));     //TC: O(nlog+n^2)  //SC: O(1)

// 3. kth-largest-element-in-an-array ............................................................................
    // Quick select   Largest or Smallest

let arr3 = [3, 2, 3, 1, 2, 4, 5, 5, 6];   // O/P = 4
let k=4
//      [1,2,2,3,3,4,5,5,6];
// Kth Largest = (n-k )th smallest 
//kth Smallest
const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
const partition = (arr, low, high) => {
    let pivot_element = arr[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot_element) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}
const kthLargestElement = (arr, low, high, k) => {
    let resultIndex = arr.length - k;
    //let resultIndex = k-1;

    while (low < high) {
        let pivot_index = partition(arr, low, high);
        if (resultIndex == pivot_index)
            return arr[pivot_index];

        if (resultIndex < pivot_index)
            high = pivot_index - 1;
        else
            low = pivot_index + 1;
    }
    return arr[low];
}      //kth smallest-
let low=0;
let high=arr3.length-1
console.log(kthLargestElement(arr3, low, high, k))      //TC: Average O(n)

