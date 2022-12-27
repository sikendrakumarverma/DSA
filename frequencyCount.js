// 1.  Find All Anagrams in a String...............................................................

let s1 = "cbaebabacd"
let p = "abc"

var findAnagrams = function (s, p) {

    function checkAnagram(s, t) {
        if (s.length !== t.length) return false;
        let obj = {}
        for (let i = 0; i < s.length; i++) {
            if (!obj[s[i]]) {
                obj[s[i]] = 1;
            } else {
                obj[s[i]]++;
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (!obj[t[i]]) {
                return false;
            } else {
                obj[t[i]]--;
            }
            if (obj[t[i]] == 0) {  // remove key 
                delete obj[t[i]];
            }
        }
        return true;
    };

    let str = ""
    for (let i = 0; i < p.length; i++) {   // till p string size
        str += s[i];
    }   //console.log(str)

    let arr = []
    let ind = 0;
    if (checkAnagram(str, p)) arr.push(0)  // check anagram 
    for (let i = p.length; i < s.length; i++) {  // sliding window ,one char add and one char remove
        str += s[i]; //console.log(str)
        str = str.slice(1)
        ind++; //console.log(str)
        if (checkAnagram(str, p)) arr.push(ind);
    }
    return arr;
};
console.log(findAnagrams(s1, p))

// 1. Count all pairs with given sum(k)...........................................................................

let arr1 = [1, 1, 1, 1], n = arr1.length, k = 2    //O/P=6   arr=[1, 5, 7, -1, 5] k=6   O/P=3
function getPairsCount(arr, n, k) {
    //code here
    // APPROACH:
    // 1.Brute Neasted  TC => O(N^2)
    // 2. Array.sort    TC => O(NlogN)
    // 3. Using map     TC => O(N)
    let ans = 0
    let map = new Map()
    for (let i = 0; i < n; i++) {
        let x = arr[i]
        let compli = k - x
        if (map.has(compli)) {
            ans += map.get(compli)
        }
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    return ans
}
console.log(getPairsCount(arr1, n, k))

// 2. Given an array of integers nums, return the number of good pairs......................................
//A pair (i, j) is called good if nums[i] == nums[j] and i < j.

let nums = [1, 2, 3, 1, 1, 3]  // O/P=4    arr1 = [1, 1, 1, 1]  O/P=6
var numIdenticalPairs = function (nums) {
    let n = nums.length
    let ans = 0
    let map = new Map()
    for (let i = 0; i < n; i++) {
        let x = nums[i]

        if (map.has(x)) {
            ans += map.get(x)
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    return ans
};
console.log(numIdenticalPairs(nums))

// 3. Given an array of integers nums, sort the array in increasing order based on the frequency of the values............ 
//If multiple values have the same frequency, sort them in decreasing order.

let arr3 = [1, 1, 2, 2, 2, 3]  // o/p=[3,2,2,3,3,3]      arr=[2,3,1,3,2]   o/p=[1,3,3,2,2]
var frequencySort = function (s) {
    s = s.sort((a, b) => a - b) // sort array
    //let s1=[];
    let map = new Map();
    for (let i = s.length - 1; i >= 0; i--) {  // freq count
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let arr = [...map].sort((a, b) => a[1] - b[1])  // value of freq in acsen
    let p = 0; // accurate ans array pointer
    let j = 0;  // map pointer
    while (j < arr.length) {
        let k = 0 // map value pointer
        while (k < arr[j][1]) {
            //s1.push(arr[j][0])
            s[p] = arr[j][0]
            p++;
            k++;
        }
        j++;
    }
    return s;
};
console.log(frequencySort(arr3))

// 4.  Sort Characters By Frequency............................................................

let s = "tree"  // eert
var frequencySort = function (s) {
    let s1 = ""
    let map = new Map();
    for (let i = s.length - 1; i >= 0; i--) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let arr = [...map].sort((a, b) => b[1] - a[1])
    let j = 0;
    while (j < arr.length) {
        let k = 0
        while (k < arr[j][1]) {
            s1 += arr[j][0]
            k++;
        }
        j++;
    }
    return s1;
};
console.log(frequencySort(s))

// 5. Given a string s, check if it can be constructed by taking a substring of it and............................... 
//appending multiple copies of the substring together.


let s5 = "abab"   // true
var repeatedSubstringPattern = function (s) {
    if (s.length == 1) return false;

    for (let i = 0; i < s.length - 1; i++) {
        let str1 = s.slice(0, i + 1)
        let str = str1
        while (str.length <= s.length) {
            if (str == s) return true;
            str += str1
        }
    }
    return false;

    //     let map= new Map()
    //    for(let i=0;i<s.length;i++){
    //        map.set(s[i],(map.get(s[i]) || 0)+1);
    //    } 
    //    let subStrLen=map.size
    //    if(subStrLen==1) return true;
    //    for(let i=0;i<subStrLen-1;i++){
    //        if(map.get(s[i])!==map.get(s[i+1])) return false;
    //    }
    //    return true;
};
console.log(repeatedSubstringPattern(s5))