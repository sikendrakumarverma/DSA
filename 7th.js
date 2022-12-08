// 1. Remove duplicate from an array ...........................................

// var deleteDuplicates = function (head) {
//   let set = []
//   for (let i = 0; i < head.length; i++) {
//     if (head[i] !== head[i + 1]) {
//       console.log(head[i])
//       set.push(head[i])
//     }
//   }
//   return set
// }
// let head = [1, 1, 2, 3, 3]
// console.log(deleteDuplicates(head))
// OR .......................................................................

// var deleteDuplicates = function(head) {
//   let set= []
//   for(let i=0;i<head.length;i++){
//       if(head[i]!=head[i+1]){
//       set.push(head[i])
//       }
//   }
//   return set

// };
// let head=[1,1,2]
// console.log(deleteDuplicates(head))

// 2. Remove duplicate from a string ...........................................

// var removeDuplicates = function (s) {
//   let res = [s[0]];
// 	for (let i=1; i<s.length; i++) {
// 		if (s[i] === res[res.length-1]){ 
//       res.pop();
//     }else res.push(s[i])
// 	}
// 	return res.join('');
// } 
// let s="aababaab"
// console.log(removeDuplicates(s))

// 3. Find most frequent even number ..............................................

// var mostFrequentEven = function(nums) {
//   nums=nums.filter((ele)=> ele%2==0)
//   if(nums.length==0){ return -1}
//    //if(nums.length==1){ return nums[0]}
//   let obj={}
//   if(Math.max(...nums)==0 && Math.min(...nums)==0){ return 0}
//    for(let i=0;i<nums.length;i++){
//        if(!obj[nums[i]]){
//           obj[nums[i]]=1;
//        }else{
//          obj[nums[i]]++;  
//        }
//    }
//    let val=Object.values(obj)
//    let max= Math.max(...val)

//    for(let key in obj){
//     if(max ===obj[key]){
//         return key;
//     }
//   }
//   //  if(obj[0]==max){ return 0}
//   // return max
// };
// let nums=[1,2,2,3,4,4,5]
// console.log(mostFrequentEven(nums))

// 4. Find longest distinct character substring .............................................................

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

// 6. Find missing number in an array ,number should be contain in array 0 to upto array.length ..............................

// var missingNumber = function (nums) {
//   var sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += i + 1 - nums[i];
//   }
// return sum;
// };
// let nums=[3,0,2,1]
// console.log(missingNumber(nums))

// OR
// nums.sort((a, b) => a-b);
    // for(var i=0; i < nums.length; i++){
    //     if( i !== nums[i]) return i;
    // }
    // return nums.length;

// 7. Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
      // such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

var threeSum = function(nums) {
    let i=0
	let result=[]
    // sort numbers in ascending order to use two pointer approach
	nums.sort((a,b)=>a-b)

	while(i<nums.length-2){
			let start = i+1
			let end = nums.length-1
            // since we need total sum as 0 positive will not be solution
			if (nums[i] > 0) break
			while(start < end){
				if(nums[i]+nums[start]+nums[end] === 0){
					// if found valid triplet then push in result
					result.push([nums[i],nums[start],nums[end]])

					//after the using the element,we will move ahead of all of its duplicates
					while( nums[start] === nums[start+1]) start++
					while( nums[end] === nums[end-1]) end--
                    start++
                    end--
				}
				else if(nums[i]+nums[start]+nums[end]<0){
					 start+=1;
				 }
				else{
					end-=1;
				}
			}
		 //to avoid duplicacy 
		while(i<nums.length-3 && nums[i]===nums[i+1]) {          
				i+=1;
		}
		i+=1
		}
	return result
};
let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))

// 8. Given an array of integers arr and an integer k, return the number of unique k-diff pairs in the array.
// arr[i]-arr[j]==k

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
        let complement = k + arr[i];
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
let arr0 = [1, 1, 1, 2, 2]
let k = 0
console.log(findPairs(arr0, k))

// 9. 


// var longestPalindrome = function (s) {
//   let obj = {}
//   let subSt=""
//   if (s.length == 1) { return s }
//   let j=s.length
//   for (let i = 0; i < s.length; i++) {
//     //for (let j = i+1; j < s.length; j++) {
//        subSt = s.slice(i, j)
//       console.log(subSt)
//       let subS1 = subSt.split("").reverse().join("")
//       if (subSt == subS1) {
//         return subSt
//       }
//     }
//   //}
// };
// let s = "babad"
// console.log(longestPalindrome(s))