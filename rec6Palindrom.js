// 1. A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
//non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
   //Given a string s, return true if it is a palindrome, or false otherwise.........................................

let s1 = "A man, a plan, a canal: Panama"
var isPalindrome = function (s) {
    // remove all except AlphaNumeric
    let regex = /^[a-z0-9]+$/i;
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        let ch = s[i].toLowerCase();
        if (regex.test(ch)) newStr += ch;
    }
    // Approach: 1.) By loop :a.) By Multipointer,[0],[l-1]
    //2.) By recursion : b.) By slice(1,-1)
    // let str="";
    // for(let i=newStr.length-1;i>=0;i--){
    //     str+=newStr[i]
    // }
    // if(newStr==str) return true;
    // return false

    function isPal(newStr) {
        if (newStr.length < 2) return true;
        if (newStr[0] !== newStr[newStr.length - 1]) {
            return false;
        }
        return isPal(newStr.slice(1, -1))
    }
    return isPal(newStr);
};
console.log(isPalindrome(s1))

// 2.  Valid Palindrome II ........................................................................................
//Given a string s, return true if the s can be palindrome after deleting at most one character from it.

let s = "cbbcc"  //abca,  abc
var validPalindrome = function (s) {
    // Approach 1.) Multipointer TC => O(n),O(1)
    //2.) Using slice  TC => O(^2),O(1)  (time limit excided)
    let i = 0;
    let j = s.length - 1;

    function fun1(s, p, q) {
        while (p < q) {
            if (s[p] !== s[q]) return false;
            p++, q--;
        }
        return true;
    }
    function fun2(s, x, y) {
        while (x < y) {
            if (s[x] !== s[y]) return false;
            x++, y--;
        }
        return true;
    }

    while (i < j) {
        if (s[i] !== s[j]) {
            let checkLeft = fun1(s, i + 1, j);
            if (checkLeft) return true;
            let checkRight = fun2(s, i, j - 1);
            if (checkRight) {
                return true;
            }
            return false;
        }
        i++, j--;
    }
    return true;

    //     function isPal(newStr){
    //      if(newStr.length<2) return true;
    //      if(newStr[0]!==newStr[newStr.length-1]){
    //          return false;
    //      }
    //      return isPal(newStr.slice(1,-1))
    //  }
    //  let isPalindrome= isPal(s)

    //  if(isPalindrome) return true; // already palindrome string
    //  if(!isPalindrome){  // if not palindrome string
    //   for(let i=0;i<s.length;i++){
    // //    let newStr = s.replace(s[i],'')  // remove one char and check
    //     let newStr =s.slice(0, i) + s.slice(i+1);
    //    let isPalNewStr= isPal(newStr)
    //    if(isPalNewStr) return true;
    //    s=s;
    //   }
    //  } 
    //  return false;
};
console.log(validPalindrome(s))