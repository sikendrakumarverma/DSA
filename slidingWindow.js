// 1. Maximum Number of Vowels in a Substring of Given Length.............................................

let str="abciiidef"
let k=3
function check(ch){
    if(ch=='a'||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
       return true
       }
    return false
}
var maxVowels = function(s, k) {
    let count=0
    let maxCount=0
    for(let i=0;i<k;i++){
        if(check(s[i])){
            count++
        }
    }
    maxCount=Math.max(maxCount,count)
    for(let i=k;i<s.length;i++){
        if(check(s[i-k])){
            count--
        }
        if(check(s[i])){
            count++
        }
        maxCount=Math.max(maxCount,count)
    }
    return maxCount
};
console.log(maxVowels(str,k))

// 2.  Longest Substring Without Repeating Characters........................................................

let str1="abcabcbb"
var lengthOfLongestSubstring = function(s) {
  
    let start = 0;
    let end =0
    let maxLen = 0;    
    const uniqCh = new Set();
        while(end<s.length){
            if(!uniqCh.has(s[end])){
               uniqCh.add(s[end])
               end++
               maxLen=Math.max(maxLen,uniqCh.size)
              }else{
                  uniqCh.delete(s[start])
                  start++
              }
        }
      return maxLen;  
};
console.log(lengthOfLongestSubstring(str1))

// 3. Find longest distinct character substring .............................................................

// var longestDupSubstring = function (s) {
//   let map = new Map()
//   let subStObj = {}
//   let start = 0
//   let end = 0
//   let maxLen = 0
//   for (end; end < s.length; end++) {
//     if (!map[s[end]]) {
//       map[s[end]] = 1
//       let subStr = s.slice(start, end + 1)
//       subStObj[subStr.length] = subStr
//       maxLen = Math.max(maxLen, subStr.length)
//     } else {
//       while (s[start] !== s[end]) {
//         s = s.replace(s[start], '')
//         start++;
//       }
//       map.delete(map[s[end]])
//     }
//   }
//   return subStObj[maxLen]
// };
// let s="banana"
// console.log(longestDupSubstring(s))

// 4. Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can 
 //flip at most k 0's.

 let nums4 = [1,1,1,0,0,0,1,1,1,1,0], k4 = 2 // Output: 6 Explanation: [1,1,1,0,0,1,1,1,1,1,1]

var longestOnes = function(nums, k) {
    let map = new Map();

   let maxLength = 0;
   let left =0;
   for(let right = 0;right< nums.length; right++){  
       let element = nums[right];
       map.set(element, (map.get(element) || 0) +1);// count freq

       //condition check (At most k o's in a substring than valid substring)
       // else decrease substring size from start(increase left)
       while(map.get(0) > k && left<=right){
           map.set(nums[left], map.get(nums[left]) -1);
           left++;
       }
       maxLength = Math.max(maxLength, right-left +1);
   }

   return maxLength; //TC: O(n) //SC: O(2) ~ O(1)

};
console.log(longestOnes(nums4,k4))

// 5. Find substrings whose sum of ASCII value is divisible by K ..................................................

// function ASCI(str,k){
//   let sum=0
//   let count=0
//   if(str.length<k) return 0
//   for(let i=0;i<k;i++){
//     sum+= str[i].charCodeAt()
//   }
//   if(sum % k ==0){
//     count++;
//   }
//   for(let i=k;i<str.length;i++){
//     sum-=str[i-k].charCodeAt()
//     sum+=str[i].charCodeAt()

//     if(sum % k ==0){
//       count++;
//     }
//   }
//   return count
// }
// let str="bcgabc"
// let k=3
// console.log(ASCI(str,k))