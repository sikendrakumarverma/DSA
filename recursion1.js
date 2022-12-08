
// ek code commnet kro or ek code chalao

// 1. is program me fibonacci ke last 2 element jod kar bhej rahe he 
// jese fibonacci 1,1,2,3,5,8,13,21
// hamne 5 bheja he to 5 3 or 2 ko jodd kar bana he 
// ye sawal leet code par bi he 
// function fibo(n){
//   if(n == 0 ) return 0
//   if(n<=2) return 1
//   return fibo(n-1) + fibo (n-2)
// }
// let result = fibo(8)
// console.log(result)



// 2.  next question ka anser idhar he 

// let n = [8,1,5];
// let len = n.length
// let i = 0
// let mul = 1
// function fibo(n,i){
//   console.log(i)
// //  i++
//   mul *= n[i]*n[i+1]   
//   if(i == len-2) return mul
//   return fibo(n,++i)
// }

// let result = fibo(n,i)
// console.log(result)

// 3. next idhar he 

// let n = [3,5,2,8]
// function fibo(n){
//   if(n.length == 0) return 1
//   console.log(n)
//   return n[0]*fibo(n.splice(1))
//   //splice har bar ek index ko delete karta jayega 
// }
// let result = fibo(n)
// console.log(result)



// 4.  next question idahr he 

// is function me power function ka kam recursion se kar rahe he
//  function pow(b,exp){
//    if(exp== 0) return 1
//    console.log(b,exp)
//    return b * pow(b,exp-1)
//  }
//  let result = pow(2,6)
//  console.log(result)

// 5. Change first element of array of string.................................................
// let i= 0
// function changeEle(str){
    
//     if(i==str.length-1){return str}
//      //if(i<str.length){
//         str[i]=str[i].split("")
//          str[i][0]="H"
//           str[i]= str[i].join("")
//          i++
//         return changeEle(str)
//      //}

//     // OR Iterative
//     //  let arr=[]
//     //  for(i;i<str.length;i++){
//     //     //console.log(str[i][0])
//     //     str[i]=str[i].replace("h","H")
//     //     arr.push(str[i])
//     //     // OR
//     //     //str[i]=str[i].split("")
//     //    //str[i][0] = "H"
//     //     //str[i]= str[i].join("")
//     // }
//     // return arr
//     // //return str
// }
// let str=["hi","hello","helo"]
// console.log(changeEle(str))

// 6. Check Palindrome number using recursion ...........................................

// function solution(str) {
//     //Write your solution here
//       //console.log(typeof str)
//   //     let start=0
//   //     let end=str.length-1
//   //     if(start==end) return 1
//   //     if(str[start]==str[end]){
//   //         start++
//   //         end--
          
//   //         return solution(str)
//   //     }
//       if(str.length==1 || str.length==0) return 1
//       if(str[0]!==str[str.length-1]) return 0
//           return solution(str.slice(1,-1))
//   }
//   let st="121121"
//   console.log(solution(st))

  // 7. Reverse a number using recursion ........................................

//   var num= 0
// function solution(a) {
//   //Write your solution here
//    if(a==0) return num
//     let lastDigit=a%10
//     //console.log(lastDigit)
//     a=Math.floor(a/10)
//     //console.log(a)
//     num=num*10+lastDigit
//      //console.log(num)
//     return solution(a)
// }
// let n=1084
// console.log( solution(n))

// 8. Flatten an array.....................................................................................

let arr=[0,0,[1,5,9],[10,11,13],[12,13,15]]
function flatArray(arr){
  let flat=[];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])==false){
      flat.push(arr[i]);
    }else{
      flat=flat.concat(flatArray(arr[i]))
    }
  }
  return flat;
}
console.log(flatArray(arr))



