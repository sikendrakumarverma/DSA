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