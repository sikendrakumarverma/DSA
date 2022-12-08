// 1. Reverse a word of a sentance ......................................................

var reverseWords = function (sen) {

    //     function reverse(str){
    //         if(str.length==0) return ""
    //         return reverse(str.slice(1))+str[0]
    //     }

    //     let words=sen.split(" ")
    //     for(let i=0;i<words.length;i++){
    //         words[i]=reverse(words[i])
    //     }
    //     return words.join(" ")

    const arr = sen.split('');
    let i = 0;

    for (let j = 1; j <= arr.length; j++) {
        if (arr[j] === ' ' || j === arr.length) {
            let k = j - 1;
            while (i < k) {
                const temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
                i++;
                k--;
            }
            i = j + 1;
        }
    }

    return arr.join('');
};
let sen = "hi to all"
console.log(reverseWords(sen))

// Q. Compare two character greater than or smaller than .............................................

let s="abcde"
let c="e"
for(let i = 0; i < s.length; i++){
    if (s[i] < c){
        //console.log("hi")
    }
}

// 2. print the duplicate elements of an array .................................................

// // Given an integer array nums of length n where all the integers of nums are in the 
// //range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice
// // If all +ve element of array

// var findDuplicates1 = function(arr) {
// let ans=[ ]
//    for(let i=0;i<arr.length;i++){
//        let x = Math.abs(arr[i])
//        let index= x-1
//        if(arr[index] < 0){ 
//             ans.push(x)
//        } else {
//            arr[index]=arr[index]*-1
//        }
//    }
//     return ans    // O(n) => TC, // O(1) =>SC
// }
// let arr1=[4,3,2,7,8,2,3,1]
// console.log(findDuplicates1(arr1))

var findDuplicates = function(arr) {
    let freq= new Map()
    for(let i=0;i<arr.length;i++){
        if(freq.get(arr[i])==undefined){
            freq.set(arr[i],1)
        }else{
            freq.set(arr[i],freq.get(arr[i])+1)
        }
    }
    let res=[]
    for(let pairs of freq){
        if(pairs[1]>1){
            res.push(pairs[0])
        }
    }
    return res
};
let arr=[3,2,1,3,1]
console.log(findDuplicates(arr))

// 4. Swape two variable without using extra space.............................................................

function solution(a, b) {
    a = a + b
    b = a - b
    a = a - b
    return `${a} ${b}`
}
let a = 10
let b = 5
console.log(solution(a, b))

// 4. Swape two variable without using extra space.............................................................

function swap(a, b) {
    //[a,b]=[b,a]
    a = a + b                          // HiGoodBy  , len=8(a)
    b = a.slice(0, (a.length - b.length))   // 0,2(a(8)-b(6))    len=2(b) slice starting to till 2 
    a = a.slice(b.length - a.length)      // 2(smaller w.r. a)-a(8)   slice from last because -ve value i.e, -6
    return `${a}  ${b}`
}
let s1 = "Hi"
let s2 = "GoodBy"
console.log(swap(s1, s2))

// 5. Reverse array without using extra space ...............................................................

// 6. Rotate an array by given d times..............................................................

let arr6=[12,3,6,2,9,11]   // let arr6=[9,11,12,3,6,2]  
let d=2

function rotate1(arr, d) {
    let arr1 = arr.splice(arr.length - d, d)
    arr = arr1.concat(arr)
    return arr
}
//console.log(rotate1(arr6, d));

function rotate(arr,d){
    //arr=arr.reverse()      // 1. reverse All array
    if(arr.length==1) return arr
    let k=arr.length-1
    for(let i=0;i<k;i++){
        arr[i]=arr[i]+arr[k]
        arr[k]=arr[i]-arr[k]
        arr[i]=arr[i]-arr[k]
        k--
       }
    let j=d-1
    for(let i=0;i<j;i++){      // 2. reverse till d
     arr[i]=arr[i]+arr[j]
     arr[j]=arr[i]-arr[j]
     arr[i]=arr[i]-arr[j]
     j--
    }
     k=arr.length-1
    for(let i=d;i<k;i++){      // 3. reverse  from d+1 to end 
        arr[i]=arr[i]+arr[k]
        arr[k]=arr[i]-arr[k]
        arr[i]=arr[i]-arr[k]
        k--
       }
    return arr
}
console.log(rotate(arr6,d))   // O(n) TC,   O(1) sc

// 7. Given an array of repeating element , return most repeated element .................................

let arr7 = [4, 6, 12, 2, 3, 12, 3, 12,3,3]
function repeatEle(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let key = str[i]
        if (!obj[key]) {
            obj[key] = 1
        } else { obj[key] = obj[key] + 1 }
    }
    let arr = Object.values(obj)
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }

    for (key in obj) {
        if (obj[key] == max) return key
    }
}
console.log(repeatEle(arr7))

// 8. Find the max sum of any two element in an array....................................................

let arr8=[123,4,67,2,34]   // 67+34=101  
// A.) arr.sort()   => O(nlogn)  Not corret
// B.) loop  => O(n)

function maxSum(arr){
    let firstMax= -Infinity
    let sectMax= -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstMax) {
            sectMax=firstMax
            firstMax=arr[i]
        }else{
            if(arr[i]>sectMax){
                sectMax=arr[i]
            }
        }
    }
    return firstMax+sectMax
}
console.log(maxSum(arr8))

//9. Count pairs with given sum ......................................................................
//   Given an array of N integers, and an integer K, 
//   find the number of pairs of elements in the array whose sum is equal to K.

let arr9=[1, 5, 7, 1]      // arr=[1, 1, 1, 1],k=2   o/p=6
let k=6
let n=arr9.length
function findpairSum(arr,n,k){
let ans=0
let map= new Map()
for(let i=0;i<n;i++){
    let x=arr[i]
    let compli=k-x
    if(map.has(compli)){
        ans+=map.get(compli)
    }
    if(map.has(x)){
        map.set(x,map.get(x)+1)
    }else{
        map.set(x,1)
    }
}
return ans
}
console.log(findpairSum(arr9,n,k))