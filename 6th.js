// // // Find the 1's complement of N
// // .............................................................................
// // function onesComplement(n)
// // {
// //     let v = [];
// //     let n1=0

// //     // convert to binary representation
// //     while (n != 0) {
// //         v.push(n % 2);
// //         n = Math.floor(n / 2);
// //         console.log(v,n)
// //     }
// //     v.reverse();

// //     // change 1's to 0 and 0's to 1
// //     for (var i = 0; i < v.length; i++) {
// //         if (v[i] == 0)
// //             v[i] = 1;
// //         else
// //             v[i] = 0;
// //     }

// //     // convert back to number representation
// //     let two = 1;
// //     for (let i = v.length - 1; i >= 0; i--) {
// //         n = n + v[i] * two;
// //         two = two * 2;
// //     }
// //     return n;
// // }

// // // Driver code
// // let n = 5;
// // console.log(onesComplement(n));

// // // This code is contributed by phasing17

// // // OR
// // function findComplement(num) {
// //     let ans = 0;
// //     for (let i = 0; num > 0; i++) {
// //         ans += Math.pow(2, i) * (!(num % 2));
// //         num = Math.floor(num / 2);
// //     }

// //     return ans;
// // }

// // // Driver code

// // let N = 9;
// // console.warn(findComplement(N));

// // 2. Remove vowel from lowerCase string

// function shortcut(string) {

//     if (string == string.toLowerCase()) {
//         string = string.split("")

//         let str = []
//         for (let i = 0; i < string.length; i++) {
//             let reg = /[aeiou]/gi
//             if (!reg.test(string[i])) {
//                 str.push(string[i])

//             }
//         }
//         return str.join("");
//     } else {
//         return string;
//     }
// }
// let string = "HELL"
// let res = shortcut(string)
// console.log(res) // hll
// //..........................OR................................................................
// function shortcut(string) {
//     return string
//         .split('')
//         .filter(str => !'aeiou'.includes(str))
//         .join('')
// }
// console.log(shortcut("hello"))

// // ................................................OR......................................................

// const str = 'hello world';
// const noVowels = str.replace(/[aeiou]/gi, '');

// console.log(noVowels); // 👉️ hll wrld

// // ...................................................................
// // 3. Count of positive and sum of negative of an array

// function countPositivesSumNegatives(input) {
//     // your code here

//     if (input == null) return []
//     if (input.length == 0) return []
//     // console.log(input)
//     let count = 0
//     let sum = 0
//     let res = []
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             count++
//         }
//         if (input[i] < 0) {
//             sum += input[i]
//         }
//     }
//     // console.log(typeof sum,count)
//     res.push(count)
//     res.push(sum)
//     return res //count.concat(sum)
// }
// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// console.log(countPositivesSumNegatives(input))
// // ..................OR......................................................
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// // 4. Add two arrays elements

// function addArrays(array1, array2) {
//     //console.log(array1, typeof array1, array2, typeof array2)
//     if (array1.length == 0 || array1[0] == 0) { return array2 }
//     if (array2.length == 0 || array2[0] == 0) { return array1 }
//     let s1=""
//     let s2=""
//     for(let i=0;i<array1.length;i++){
//         s1= s1 + array1[i]

//     }
//     for(let i=0;i<array2.length;i++){
//         s2= s2 + array2[i]
//     }
//     let arrayToNumber1 = BigInt(s1)//(l1.join(''));
//     let arrayToNumber2 = BigInt(s2)//(l2.join(''));
//     // let arrayToNumber1 = parseInt(array1.join(''));
//     // let arrayToNumber2 = parseInt(array2.join(''));
//     let res = arrayToNumber1 + arrayToNumber2;
//     let final = String(res)

//     return final.split("").map(Number).reverse()
// }
// let array1 = [2, 4, 3]
// let array2 = [5, 6, 4]
// let res = addArrays(array1, array2)
// console.log(res)

// 5. Given target(d) times remove intial element of given array and push in last

// function rotateLeft(d, arr) {
//     // Write your code here
//     for (let i = 0; i < d; i++) {
//         arr[arr.length] = arr[i]
//     }
//     let k = 0
//     function remove() {
//         if (k < d) {
//             for (let j = 0; j < arr.length; j++) {
//                 arr[j] = arr[j + 1]
//             }
//             arr.length = arr.length - 1
//             k++
//             remove(k)
//         }
//     }
//     remove()

//     return arr;

// }
// let d = 4
// let arr = [1, 2, 3, 4, 5]
// console.log(rotateLeft(d, arr))

// 6. Add two numbers with target and that numbers inderx ...............................................

// function twoSum(nums, target) {
//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j]
//             if (sum == target) {
//                 arr.push(i)
//                 arr.push(j)
//                 return arr
//             }
//         }
//     }
// };
// let nums = [2, 7, 11, 15]
// let target = 9
// console.log(twoSum(nums, target))

// 7. find missing character(from All 26) in a given string .....................................

// function solution(str) {
//     //Write your solution here
//     let arr1 = "abcdefghijklmnopqrstuvwxyz"
//     let arr = arr1.split("")
//     str = str.split("")

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (str[i] == arr[j]) {
//                 arr[j] = ""
//             }
//         }
//     }
//     return arr.join("")
// }
// let str = "The quick brown fox jumps over the";
// let res1 = solution(str);
// console.log(res1);

// let x=  10//-121
// let y= x.reverse()
// console.log(x,y)

// 8. A number is palindrom or not without converting in string .....................................

// var isPalindrome = function (x) {
//     var reverse = 0;
//     var divider = x;
//     while (divider > 0) {
//         const reminder = divider % 10;
//         reverse = reverse * 10 + reminder;
//         divider = Math.floor(divider / 10);
//     }
//     return reverse == x;
// };
// let num1 = -121
// console.log(isPalindrome(num1));

// 9. Convert roman to numbers .....................................................

// var romanToInt = function(s) {
//     // Create an obj with the conversions
//     //const obj = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
//     const obj= {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
//     let result = 0
//     let splitted = s.split('')//.map(key => obj[key])
//    for(let i=0;i<splitted.length;i++){

//     let roman=splitted[i] 
//     splitted[i]= obj[roman]

//    }
//    // Iterate splitted
//     // Do the subtraction when next num is lower than current num
//     // Otherwise, add current num to the result variable
//     for (let i = 0; i < splitted.length; i++) {
//       //splitted[i] < splitted[i + 1] ? result -= splitted[i] : result += splitted[i]
//       if(splitted[i] < splitted[i + 1]) { result -= splitted[i]
//       } else{ result += splitted[i]}
//     }
//     return result
//   }
//   let s="III"
//   console.log(romanToInt(s))

// 10. Reverse the vowels of a string

// var reverseVowels = function(s) {
//     s= s.split("")
//    // console.log(s)
//     let vowel=["a","e","i","o","u","A","E","I","O","U"]
//     let i=0
//     let j=s.length
//    // let temp;
//     for( i;i<=j;i++){

//         if(vowel.includes(s[i])){
//            // console.log(s[i])
//             for( j;j>=i;j--){

//                 if(vowel.includes(s[j])){
//                     //console.log(s[j])
//                    let temp= s[i]
//                     s[i]=s[j]
//                     s[j]=temp
//                     j--
//                     break;
//                 }
//             }
//         }
//     }
//     return s.join("")
// };
// let s= "leetcode"
// console.log(reverseVowels(s))

// 11. Find the frequency of digits in a number/String

// function solution(str) {
//     //Write your solution here
//     let arr = str.split('').sort()
//     let obj = {}

//     for (let item of arr) {
//         if (item != " ") {
//             obj[item] = (obj[item] || 0) + 1
//         }
//     }
//     let ans = ""
//     for (let chr in obj) {
//         ans = ans + (`${chr} ${obj[chr]}`) + "\n"
//         //console.log(ans)
//     }
//     return ans
// }
// let str = "12553451"//"hello world"
// console.log(solution(str))

// 12. Find the element having different frequency than other array elements

// function solution(str) {
//     //Write your solution here
//       str= str.split(" ")
//       let obj={}
//       for(let i=0;i<str.length;i++){
//           let key=str[i]
//           if(!obj[key]){obj[key]=1
//           } else{ obj[key] = obj[key] + 1 }
//       }
//       let arr= [...new Set(Object.values(obj))]
//       let str1=[...new Set(str)]
//       let comp = 0
//       let comp1 = 0
//       for(let i=0;i<str1.length;i++){  // compare which digit frequency is distict i.e, repeatable
//          if( obj[str1[i]]== arr[0]){
//              comp++;
//          }else{
//              comp1++
//              }
//       }
//       if(comp>comp1){let a= Object.keys(obj).find(k=>obj[k]===arr[1]) // finding distinct frequency(unique) key from obj
//       return a       
//        } else{ return Object.keys(obj).find(k=>obj[k]===arr[0])}
//   }
//   let str= "1 1 2 2 3"
//   console.log(solution(str))

// 13. Merge two sorted list ............................................................

// var mergeTwoLists = function(list1, list2) {
    // list1=list1.filter((x) => x > 0)
    // list2=list2.filter((x) => x>0)
    // if (!list1) return list2;
    // if (!list2) return list1;
    // let list3=[]
    // let l1=0
    // let l2=0
    // let l3=0

    // while(l1<list1.length || l2<list2.length){
    //     if (list1[l1] <= list2[l2]) {
    //         list3[l3]=list1[l1]
    //         l1++
    //     } else {
    //       list3[l3]=list2[l2]
    //         l2++
    //  }
    //     l3++
    // }
    // //  while(l1<list1.length || l2<list2.length) {
    // //       list3[l3] = list1[l1] || list2[l2]
    // //       l1++ ||  l2++
    // //       l3++
    // //  }

//     //  OR  .................................
//     let m=3
//     let n=3
//     let k=0
//     for(let l=m;l<m+n;l++){
//      list1[l]=list2[k]
//       k++
//     }
//     list1=list1.sort((a,b)=> {return a-b})


//      return list1
//  };
//  let list1=[1,2,3,0,0,0]
//  let list2=[2,5,6]
//  console.log(mergeTwoLists(list1,list2))

// 14. check valid parenthesis ........................................................................

//  var isValid = function(s) {
//     if (s.length % 2 !== 0 ) return false;
//      let str = s.trim().split('');
//      let temp = [];

//      for(let i of str){
//         if(i == '(' || i=='{' || i=='['){
//             temp.push(i);

//         }
//         if(i==')'){
//             if(temp.pop() != '(') return false;
//         }
//         if(i=='}'){
//             if(temp.pop() != '{') return false;
//         }
//         if(i==']'){
//             if(temp.pop() != '[') return false;
//         }
//     };
//      return  true//temp.length > 0 ? false: true;

//  };
//  let s= "()"
//  console.log(isValid(s))

// 15. Remove duplicate number ..................................................................


// var removeDuplicates = function (nums) {
//     let arr = [];
//     let i = 0
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != nums[j + 1]) {
//             //arr.push(nums[j])
//             arr[i] = nums[j]
//             i++;
//         }
//     }
//     return arr;
// };
// let nums = [1, 1, 2]
// console.log(removeDuplicates(nums))

// 16. Search an element from a sorted array and if not than inseart in coorect sequence ......................

// var searchInsert = function(nums, target) {
//     let start=0
//     let end=nums.length-1
//     let index= undefined
//     while(start<=end){
//         let mid= Math.floor((start+end)/2)
        
//         if(nums[mid]===target){ 
//             index= mid
//             break;
//         }
        
//         if(nums[mid]<target){
//           start= mid+1
//         }else{
//             end= mid-1
//         }
//     }
//     for(let j=0;j<nums.length;j++){
//         if(target-nums[j]==1){ 
//                index= j+1
//                 break;
//             }
//         }
//     if(index=== undefined){return -1}
//     return index;
// };
// let nums=[1,3,4,5,6]
// let target=7
// console.log(searchInsert(nums,target))

// 17. Length of last word ........................................................... 

// var lengthOfLastWord = function (s) {
//     let length = s.length - 1;
//     let counter = 0;
//     while (s[length] === " ") {
//       length--;
//     }
//     while (s[length] !== " ") {
//       if (s[length] === undefined) break
//       counter++;
//       length--;
//     }
//     return counter
//   };
//   let s= "   fly me   to   the moon  "
// console.log(lengthOfLastWord(s))
//   //Built-In Method
  
//   var lengthOfLastWord = function (s) {
//     s = s.trimRight().split(" ");
//     return s[s.length - 1].length
//   };


