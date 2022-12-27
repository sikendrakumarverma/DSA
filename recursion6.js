// 1.

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

// 4. Reverse a integer .......................................................

let x = -123456789103
var reverse = function (x) {
    // Approach- 1.) By dividing and multiplying
    // 2.) By converting its into string or array 

    // 1. Approach 
    let num = 0;
    function reverseNum(x) {
        if (x == 0) return num;
        let lastDigit = x % 10;
        x = Math.floor(x / 10)
        num = num * 10 + lastDigit
        return reverseNum(x)
    }

    if (x >= 0) {

        let num1 = reverseNum(x)
        return num1
    } else {   // for negative integer 
        x2 = Math.abs(x)
        // function reverseNum2(x2){
        //     if(x2==0) return num;
        //     let lastDigit=x2%10;
        //     x2=Math.floor(x2/10)
        //     num=num*10 +lastDigit
        //     return reverseNum2(x2)
        //     }
        let num2 = reverseNum(x2)
        return num2 * -1

    }
}
console.log(reverse(x))

// Algo Used 

// 1. we take int 
// 2. we divide by 10 for calculating reminder
// 3. we store  reminder in a variable i.e, last digit
// 4. we calculate divider by dividing 10 and reassign int from divider
// 5. call recursion with new int i.e, decreasing int
// 6. we give base case of recursion for stop recursion loop 
// 7. we store reverse int in a variable
// 8. we also multiply by 10 for increasing int because we dividing by 10 for decreasing int

// 5. 


