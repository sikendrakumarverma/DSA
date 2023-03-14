// 1. Valid Parentheses...............................................................................................
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

let s = "()[]{}"   // Output: true
var isValid = function (s) {
    //    if (s.length % 2 !== 0 ) return false;
    //     let str = s.trim().split('');
    //     let temp = []; // stack
    //      //console.log(temp,str)
    //     for(let i of str){
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
    //     // return temp.length > 0 ? false: true;
    //     return temp.length ==0;

    let stack = [];  // use stack for storing opening brackets.

    for (let i = 0; i < s.length; i++) {

        let character = s.charAt(i); //arr[i]

        switch (character) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if (character !== stack.pop()) { return false; }
        }
    }
    return stack.length == 0;
};
console.log(isValid(s))

// 2. Next Greater Element I.........................................................................................
//The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]   // Output: [-1,3,-1]
var nextGreaterElement = function (nums1, nums2) {
    let resultMap = new Map();//take map for store ele. and it's greater ele
    let stack = []; // used stack for findind greater element

    for (let i = 0; i < nums2.length; i++) {

        let n = stack.length;

        while (stack.length != 0 && nums2[i] > stack[n - 1]) {
            resultMap.set(stack.pop(), nums2[i]);
            n = stack.length;
        }
        stack.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {  // finding greater element
        nums1[i] = resultMap.get(nums1[i]) || -1;// if exist otherwise -1.
    }

    return nums1;
};
console.log(nextGreaterElement(nums1, nums2));

// 3. 503. Next Greater Element II..................................................................................

let nums = [1, 2, 1] //Output: [2,-1,2]
var nextGreaterElements = function (nums) {
    // Approach: 1.) Using stack
    let stack = [];
    let n = nums.length;
    let resultArr = new Array(n).fill(-1);// initialise all with -1(false)

    for (let i = 0; i < n * 2; i++) { // till 2 times(5*2=10) because loop

        let number = nums[i % n];//for indexing after n-1 again continue with 0 
        let stackLen = stack.length;
        while (stackLen !== 0 && number > nums[stack[stackLen - 1]]) {//i=1,case 2 > nums[stackLen[1-1]]=> 2>nums[stackLen[0]]=> 2>nums[0]=> 2>1 (yes)
            resultArr[stack.pop()] = number;//Reassign -1 to actual num on ind
            stackLen = stack.length;//Reassign the len because we deleted
        }

        if (i < n) {
            stack.push(i); //pushing index of str.
        }
    }

    return resultArr;  //TC: O(2n-1) ~ O(n) //SC: O(n)+O(n) = O(n)

};
console.log(nextGreaterElements(nums))

// 4. Removing Stars From a String...........................................................................

let s4 = "leet**cod*e" //Output: "lecoe"
var removeStars = function (s) {
    //Approach: 1.) Using stack
    let stack = [];

    let n = s.length;

    for (let i = 0; i < n; i++) {
        let incomingCharacter = s[i];

        if (stack.length != 0 && incomingCharacter == '*') {
            stack.pop();
        }

        if (incomingCharacter != '*') {
            stack.push(incomingCharacter);
        }
    }
    let ans = stack.join("");

    return ans; //TC: O(n) //SC: O(n)
};
console.log(removeStars(s4));

// 5. 2211. Count Collisions on a Road.................................................................................

let directions = "RLRSLL"  // Output: 5
var countCollisions = function (directions) {
    // Approach: 1.) Using stack

    let count = 0;
    let stack = [];

    for (let i = 0; i < directions.length; i++) {

        let stackSize = stack.length;
        let current = directions.charAt(i);

        // on stack R and current L than head to head collision and final static
        if (stackSize != 0 && stack[stackSize - 1] == 'R' && current == 'L') {
            stack.pop();//remove
            count += 2;
            current = 'S';// static
            stackSize = stack.length;//reassignlen
        }
        // on stack S and current L
        else if (stackSize != 0 && stack[stackSize - 1] == 'S' && current == 'L') {
            count += 1;
            current = 'S';
        }
        // Because stack have >1 dire. i.e, runing cars >1 in same dire.(RRRS)
        while (stackSize != 0 && stack[stackSize - 1] == 'R' && current == 'S') {
            count += 1;
            stack.pop();
            stackSize = stack.length;
        }

        stack.push(current);// in last we add the result
    }
    return count;  //TC: O(n) //SC: O(n)
};
console.log(countCollisions(directions));

// 6. 735. Asteroid Collision

let asteroids = [5, 10, -5] // Output: [5,10]
var asteroidCollision = function (a) {
    // Approach: 1.) Using stack
    let n = a.length;
    let stack = [];

    for (let i = 0; i < n; i++) {

        if (a[i] > 0)// right(+ve sign) direction running cars
            stack.push(a[i]);
        else {// left(-ve) direction running cars

            let stackLength = stack.length;
            // Because stack have >1 dire. i.e, runing cars >1 in same dire.(RRRS)
            while (stackLength != 0 && stack[stackLength - 1] > 0 && stack[stackLength - 1] < -a[i]) {//5 on stack and curr -10(10) 5<10=10(result) 
                stack.pop();
                stackLength = stack.length;
            }
            // same weight make []
            if (stackLength != 0 && stack[stackLength - 1] == -a[i]) {
                stack.pop();
            }
            //10 on stack and curr -5(5) 10>5=10(result) not pop
            else if (stackLength != 0 && stack[stackLength - 1] > -a[i]) {
                continue;
            }
            else {
                stack.push(a[i]);
            }
        }
    }
    return stack;  //TC: O(n) //SC: O(n)
};
console.log(asteroidCollision(asteroids));

// 7. Trapping Rain Water
 //Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

let  height = [0,1,0,2,1,0,1,3,2,1,2,1] //Output: 6
var trap = function(height) {
    // Approach: 1.) Stack
    
         let stack = []
          let total = 0
          
           for (let i=0;i<height.length;i++){
               let stackLen = stack.length;
    // if left piller exist and right piller graeter than left piller than possibility to water
               while (stackLen > 0 && height[stack[stackLen-1]] < height[i]){ 
                  let poppedIdx = stack.pop(); // gap piller 
                
                   stackLen = stack.length;
                   if (stack.length == 0)// if true than no possible because left piller not exist
                       break;
                      
                   let heightVal = Math.min(height[stack[stackLen-1]], height[i]) - height[poppedIdx];// calculate breath(b)
     
                   let length = i - stack[stackLen-1] - 1;// length(l)
                   //console.log(i, heightVal, length);
                   total += heightVal * length;//Area=l*b
               }
               stack.push(i);//current index for future right piller
           }
           return total;
     
    };
    console.log(trap(height));