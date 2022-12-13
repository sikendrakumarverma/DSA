// 1.  Find All Anagrams in a String...............................................................

let s = "cbaebabacd"
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
    for (let i = 0; i < p.length; i++) {
        str += s[i];
    }
    //console.log(str)
    let arr = []
    let ind = 0;
    if (checkAnagram(str, p)) arr.push(0)
    for (let i = p.length; i < s.length; i++) {
        str += s[i];
        //console.log(str)
        str = str.slice(1)
        ind++;
        //console.log(str)
        if (checkAnagram(str, p)) arr.push(ind);
    }
    return arr;
};
console.log(findAnagrams(s,p))

// 2. Add Binary .........................................................

let a="11";    // o/p= "100"
let b="1"
var addBinary = function(a, b) {
    let carry=0;
    let i=0;
    let alen=a.length;
    let blen=b.length;
    let result="";
    while(i<alen || i<blen || carry!==0 ){
    let x=0
  if(i<alen && a[alen-1-i]=="1" ) x=1;
  let y=0;
  if(i<blen && b[blen-1-i]=="1") y=1;
  let sum= x+y+carry
  result=sum%2+result
   carry=Math.floor(sum/2)
  i++;
  }
 return result;
};
console.log(addBinary(a,b))

// 3. Self Dividing Numbers .................................................................................

let left=1
let right=22
var selfDividingNumbers = function(left, right) {
    let arr=[];
    // let div=true;
    // while(left<=right){
    //     let str=""+left;
    //     let i=0;
    //     while(i<str.length){
    //         let num= parseInt(str[i]);
    //         if(left % num !==0){
    //             div = false;
    //         }
    //         i++;
    //     }
    //     if(div==true) arr.push(left)
    //     left++;
    // }

    for(let i=left; i<=right; i++) {
        let num = i;
        while(num) {
            let x = num%10;
            if(x == 0) break;
            if(i % x != 0) break;
            num=Math.floor(num / 10);
        }
        if(num == 0) arr.push(i);
    }
    return arr;
};
console.log(selfDividingNumbers(left,right))

