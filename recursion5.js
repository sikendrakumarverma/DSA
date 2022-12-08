// 1. Print all unique element of an array .......................................................

// let arr1=[1,1,2,3,5,2,22,11,6]    // let arr=[3,2,1,3,1]
// var findUnique = function(arr) {
//         let freq= new Map()
//         for(let i=0;i<arr.length;i++){
//             if(freq.get(arr[i])==undefined){
//                 freq.set(arr[i],1)
//             }else{
//                 freq.set(arr[i],freq.get(arr[i])+1)
//             }
//         }
//         let res=[]
//         for(let pairs of freq){
//             if(pairs[1]==1){
//                 res.push(pairs[0])
//             }
//         }
//         return res
//     };
//     console.log(findUnique(arr1))

// 2. Find unique pairs of elements (inside an array ) whose sum is equal to a target k ................................

let arr2 = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1]   // (2,3),(4,1)   not (3,2)   // let arr0 = [1, 1, 1, 2, 2]  k=0 (diff==k)
let k = 5
// Approach 
// A. Binary search    => O(nlogn)
// B. Freq count method  => O(n)

var findPairs = function (arr, k) {
    arr = arr.sort((a, b) => { return a - b })
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (k == 0) {
            if (arr[i] == arr[i + 1])
                count++
            while (arr[i] == arr[i + 1]) {
                i++
            }
        }
        if (arr[i] == arr[i + 1]) {   // Ignore duplication pair
            while (arr[i] == arr[i + 1]) {
                i++
            }
        }
        //let complement = k + arr[i];   // For diff arr[i]-arr[j]==k
        let complement = k - arr[i];
        let low = i + 1;
        let high = arr.length - 1;
        let mid;
        while (low <= high) {
            mid = Math.floor(low + (high - low) / 2);
            if (arr[mid] == complement) {
                count++
                break;
            }
            else if (arr[mid] > complement) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return count
};
console.log(findPairs(arr2, k))

// B.
var findUniquePair = function (arr, K) {
    let freq = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (freq.get(arr[i]) == undefined) {
            freq.set(arr[i], 1)
        } else {
            freq.set(arr[i], freq.get(arr[i]) + 1)
        }
    }
    let obj = new Map()
    for (let pairs of freq) {
        let compliment = k - pairs[0]
        for (let pair2 of freq) {
            if (pair2[0] == compliment) {
                if (!obj.get(pair2[0])) {
                    obj.set(pairs[0], pair2[0])
                }
            }
        }
    }
    let resArr = []
    for (let pair3 of obj) {
        resArr.push(pair3)
    }
    return resArr
};
console.log(findUniquePair(arr2, k))

// 3. Check Given input is an integer or not ............................................................

let int = -78.003

//console.log(Number.isInteger(int))

function isInt(value) {
    var er = /^-?[0-9]+$/;
    return er.test(value);
}
console.log(isInt(int))

// 4. Take a no. if it multiple of 3 print "Foo",5 print "Bar", both "FooBar" and not than nothing..............

let num = 20
function print(num) {
    if (num % 3 == 0 && num % 5 == 0) return "FooBar"
    if (num % 3 == 0) return "Foo"
    if (num % 5 == 0) return "Bar"
    return " "
}
console.log(print(num))

// 5. Maximum Occuring Character............................................................................
// Given a string str. The task is to find the maximum occurring character in the string str. 
//If more than one character occurs the maximum number of time then print the lexicographically smaller character
let str = "testsample"

function count(arr) {
    let freq = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (freq.get(arr[i]) == undefined) {
            freq.set(arr[i], 1)
        } else {
            freq.set(arr[i], freq.get(arr[i]) + 1)
        }
    }
    let max = 0
    // let key = ""
    // for (let pairs of freq) {
    //     if (pairs[1] > max) {
    //         max = pairs[1]
    //         key = pairs[0]
    //     }
    //     if (pairs[1] == max) {
    //         if (pairs[0] < key) key = pairs[0]
    //     }
    // }
    // return key//`${key} ${max}`

    freq.forEach((value, key) => {
        if (value > max) {
            max = value;
            ans = key;
        }
        if (value == max) {
            if (key < ans) ans = key;
        }
    })
    return ans
}
console.log(count(str))

// 6.  Integer to Roman ...................................................................................

let num6 = 28
var intToRoman = function (num) {

    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[parseInt(num / 1000)] + C[parseInt((num % 1000) / 100)] +
        X[parseInt((num % 100) / 10)] + I[parseInt(num % 10)];

    //    const list = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    //     const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //     let result = '';

    //     // Run until we have converted the full number
    //     while (num !== 0) {
    //         // Loop though the available numerals
    //         for (let i = 0; i < list.length; i++) {
    //             // Check if the outstanding number is greater than the current numeral
    //             if (num >= valueList[i]) {
    //                 // If so, add this numeral to the result and subtract its value from the outstanding number
    //                 result += list[i];

    //                 num -= valueList[i];
    //                 //console.log(result,num)
    //                 break;
    //             }
    //         }
    //     }
    //     return result; 
};
console.log(intToRoman(num6))

// 7. Second most frequent character ...............................................................

let str7 = " aaabbcccc"
function solution(str) {
    //Write your solution here
    let obj = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!obj.has(str[i])) {
            obj.set(str[i], 1);
        } else {
            obj.set(str[i], obj.get(str[i]) + 1);
        }
    }
    let max = 0;
    let secMax = 0;
    let s = ""
    for (let pairs of obj) {
        if (pairs[1] > max) {
            secMax = max;
            max = pairs[1];
        } else {
            if (pairs[1] > secMax) secMax = pairs[1]
        }
    }
    for (let pair of obj) {
        if (pair[1] == secMax) s = pair[0]
    }
    return s
}
console.log(solution(str7))

// 8. Check if both halves of the string have same set of characters ...........................................
// Check whether it is possible to split a string from the middle which will give two halves having the same 
//characters and same frequency of each character.If the length of the given string is ODD then ignore the middle 
//element and check for the rest.

let str8 = "abcbac"     // abcaabbc
function cutInHalves(a) {
    //Write your solution here
    let l = 0;
    let r = a.length - 1
    let str1;
    let mid = Math.floor((r - l) / 2)
    if (a.length % 2 !== 0) {
        str1 = a.slice(l, mid);
    } else {
        str1 = a.slice(l, mid + 1)
    }
    let str2 = a.slice(mid + 1, r + 1)
    let m1 = new Map();
    let m2 = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (m1.has(str1[i])) {
            m1.set(str1[i], m1.get(str1[i]) + 1);
        } else m1.set(str1[i], 1);
    }
    for (let i = 0; i < str2.length; i++) {
        if (m2.has(str2[i])) {
            m2.set(str2[i], m2.get(str2[i]) + 1)
        } else m2.set(str2[i], 1)
    }
    for (let i = 0; i < str1.length; i++) {
        if (m1.get(str1[i]) !== m2.get(str1[i]))
            return "No"
    }
    return "Yes"
}
console.log(cutInHalves(str8))


