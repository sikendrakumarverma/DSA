// 2517. Maximum Tastiness of Candy Basket............................................................................
//You are given an array of positive integers price where price[i] denotes the price of the ith candy and a positive integer k.
//The store sells baskets of k distinct candies. The tastiness of a candy basket is the smallest absolute difference of 
//the prices of any two candies in the basket.
//Return the maximum tastiness of a candy basket.

 let price = [13,5,1,8,21,2], k = 3 //Output: 8
var maximumTastiness = function(price, k) {
    // Approach :!.) Binary search: Because we know the max testiness and min testiness by given constraints.
    
        price=price.sort((a,b)=>{return a-b})
         let n=price.length;
           
        function isPossible(mid,price ,k){ // calculate diff of kth candies is equal to target or not
            let prev=price[0]; // min no.
            let count=1;
        for (let i = 1; i < n; i++) {
            if(price[i]- prev >= mid){
                count++;
                prev=price[i];
            }
           if(count>=k) return 1;// true;
         }
             
            return 0; // false;
        }
        
        let ans=0;
        let low = 0;
        let high = price[n-1]-price[0] ; // no. of maxTestiness; // 21-1=20
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2); // find probability of being testiness
    
            let possibility = isPossible(mid, price,k);
    
            if (possibility) {  // check approximate testiness is exist or not
                ans=mid;
                low = mid + 1;// increase testiness because we have to return max
            }
            else
                high = mid - 1;// move in left half of price
        }
    
        return ans;
    };
    console.log(maximumTastiness(price,k));

//  875. Koko Eating Bananas ....................................................

let piles = [3, 6, 7, 11], h = 8  //  o/p = 4
var minEatingSpeed = function (piles, h) {
    // Approach:- 1.) Binary Search: Beacause we have given min. no. of      banana in a basket(piles) 1 and max also(max ele. of piles(11,30))
    // piles is no. basket and basket is no. of bananas
    // we also given no. of basket(piles) <= h so if we start eating max no. of bananas of piles(basket) speed than we can eat comletilly within h.
    // But we have find min. no. of bananas eating speed that eat all within h. 
    // [1.......11]so we cosider approx(mid) and compare completilly eat or not

    function calculateTimeTaken(speed, piles) {
        let time = 0;
        for (let j = 0; j < piles.length; j++) {
            // 3/mid ,6/mid ..... ceil(1.2,2.7...= 2,3)
            time += Math.ceil(piles[j] / speed);
        }
        return time;
    }

    let maxPileSize = 0; // no. of bananas
    let minSpeed = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > maxPileSize)
            maxPileSize = piles[i];
    }   //speed range. [1......maxPileSize].  banana/hour

    let low = 1;
    let high = maxPileSize; // 11,30,30
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        let timeTaken = calculateTimeTaken(mid, piles);

        if (timeTaken <= h) {  // check we eat anymore min speed of eating
            minSpeed = mid;
            high = mid - 1;  // decrease eating speed rate
        }
        else
            low = mid + 1;  // // increase eating speed rate
    }

    return minSpeed;
};
console.log(minEatingSpeed(piles, h));

// 1. You are given an integer array heights representing the current order that the students are standing in. 
//Each heights[i] is the height of the ith student in line (0-indexed)..................................................
//Return the number of indices where heights[i] != expected[i].

let heights = [1, 1, 4, 2, 1, 3]  // Output: 3
var heightChecker = function (arr) {
    // Approach: 1.) arr.sort  TC => O(NlogN), O(1)
    //2.) Using hashing TC => O(N), O(n) Because we have given constrants max height is 100 fit.

    //     let orgArr=[...arr];
    //     arr.sort((a,b)=>{return a-b});
    //     let j=0;
    //     let ans=0;
    //     for(let i=0;i<arr.length;i++){
    //         if(orgArr[i]!=arr[j]) {
    //             ans++;
    //         }
    //         j++;
    //     }
    //   return ans;

    let hashArr = new Array(101).fill(0);

    for (let i = 0; i < arr.length; i++) {
        hashArr[arr[i]]++;
    }
    let indexOfHashArr = 0;
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {

        while (hashArr[indexOfHashArr] == 0) {
            indexOfHashArr++;
        }
        if (arr[i] != indexOfHashArr) {
            ans++;
        }
        hashArr[indexOfHashArr]--;
    }
    return ans;
};
console.log(heightChecker(heights));

// 2. You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats 
//where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, 
//provided the sum of the weight of those people is at most limit.
//Return the minimum number of boats to carry every given person........................................................

let people = [1, 2], limit = 3  // Output: 1

var numRescueBoats = function (people, limit) {
    // Approach: 1.) Sorting algo : Because if we separate all max weight people together and min weight people together 
    // than we combined max and min and check limit of boat
    // Also given constraint 1 <= people[i] <= limit

    people.sort((a, b) => a - b);

    let low = 0;
    let high = people.length - 1;
    let boatsCount = 0;

    while (low <= high) {

        if (people[low] + people[high] <= limit) {
            boatsCount++;
            low++;
            high--;
        } else {
            high--;
            boatsCount++;
        }
    }
    return boatsCount;    //TC: nlogn+n //SC: O(1)

};
console.log(numRescueBoats(people, limit))

// 3. Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an 
// array of the non-overlapping intervals that cover all the intervals in the input.

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] // Output: [[1,6],[8,10],[15,18]]
var merge = function (intervals) {
    // Approach: 1.) Sorting algo : Because if we sort intervals[i] a/c to  start element in ascending order than easy to 
                                      //find out overlapping intervals

    let answer = [];
    //if(a[0] != b[0]){ a[0]-b[0]}else{ a[1] - b[1])}  
    intervals.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    let prevWindow = intervals[0];
    answer.push(prevWindow);

    for (let i = 0; i < intervals.length; i++) {

        let currWindow = intervals[i];

        if (currWindow[0] <= prevWindow[1]) {
            prevWindow[1] = Math.max(currWindow[1], prevWindow[1]);
        }

        else {
            answer.push(currWindow);
            prevWindow = currWindow;
        }
    }

    return answer;  //TC: nlogn +n //SC: O(n*2) -> o(n)

};
console.log(merge(intervals))

// 4. Minimum Moves to Equal Array Elements II
//Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
//In one move, you can increment or decrement an element of the array by 1.

let nums = [1, 2, 3]  // Output: 2

var minMoves2 = function (nums) {
    // Approach: 1.) Sorting algo : Because if we calculate median(not average because avg not always present in array or
    // more Take more steps) element of array(sorted array of arr[mid]) that takes min steps.
    nums.sort((a, b) => a - b);

    let n = nums.length;

    let median = nums[Math.floor(n / 2)]; // calculate median

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.abs(nums[i] - median); // calculate how many step required to reach(by increament or dec) median value.
    }

    return ans;

};
console.log(minMoves2(nums))

// 5. You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. 
       //Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal........................
    // The chemistry of a team is equal to the product of the skills of the players on that team.

 let skill = [3,2,5,1,3,4]   // Output: 22  
var dividePlayers = function(skill) {
    // Approach : 1.) Using map : By finding compliment
               // 2.) Sorting
   
        let map = new Map();
      let n = skill.length;
      let totalSum = 0;
    
      if(n%2!==0) return -1;  // if odd no. of players
   
      for(let i=0;i<n;i++){
          totalSum+= skill[i];
          map.set(skill[i] , (map.get(skill[i]) || 0) +1);
      }
      let countOfGroup = n/2;  // 6/2
      if(totalSum % countOfGroup != 0 )//check sum of skills odd or even if odd not possible to equally divide all group(18/3)
          return -1;
     
      let eachGroupSum = totalSum/countOfGroup;  // 6(total) i.e, (18/3)
    
      let sumOfGroupsProd = 0;
    
      for(let i = 0;i<n;i++){
         
          let complement = eachGroupSum - skill[i]; // total-self (6-3=3)
    
          if( !map.has(complement) || map.get(complement) <=0)
              return -1;
         
         sumOfGroupsProd += complement * skill[i];
    
          map.set(complement , map.get(complement) -1);
      }
     // sum/2 Because every iteration calculate but we have n/2 teams
      return sumOfGroupsProd/2;      //TC: O(N) //SC: O(N)
    
   // skill.sort((a,b) => a-b);
    
      // let n = skill.length;
      // let low = 0;
      // let high = n-1;
      // let eachGrpSum = skill[0] + skill[n-1];
      // let ans = 0;
    // while(low < high){
      //         if(skill[low] + skill[high] == eachGrpSum )
      //             ans+= skill[low] * skill[high];
    
      //         else{
      //             return -1;
      //         }
      //         low++;high--;
      // }
      // return ans;  //TC: O(nlogn + n/2) ~ O(nlogn) //SC: O(1)
    
   };
   console.log(dividePlayers(skill));

   // 6.Given an array of integers citations where citations[i] is the number of citations a researcher received for 
        //their ith paper, return compute the researcher's h-index.............................................................
        //If there are several possible values for h, the maximum one is taken as the h-index.

   let   citations = [3,0,6,1,5]   //Output: 3   
   var hIndex = function(citations) {
    // Approach : 1.)Using Hash: Becuase we have to return h index(any no.) that have atleast h diagram in h books and 
                                 //less h diagram in remaining books. 
       let n = citations.length;
       let freqCounter = new Array(n+1).fill(0);//till n+1(n)
     
       for(let i =0;i< n;i++){
     
           if(citations[i] > n)//because length of hash is n than store in last
               freqCounter[n]++;
           else
            freqCounter[citations[i]]++;
       }  
     
       let totalPapers = 0;
       for(let i=n;i>=0;i--){
     
               totalPapers += freqCounter[i];
               if(totalPapers >= i)
                   return i;
        }
    };
    console.log(hIndex(citations))

    // 7. Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that
         // is missing from the array................................................................................

 let nums7 = [3,0,1]  // Output: 2 

    var missingNumber = function(nums) {
        // Approach: 1. By Iteration TC => O(n),O(1)
                  // 2. By cyclic Sort TC => O(n),O(n)
                  // 3. By sort TC => O(nlogn),O(1)
          // 1.        
        //   var sum = 0;
        //   for (let i = 0; i < nums.length; i++) {
        //     sum += i + 1 - nums[i]; // n*(n+1/2)- arr element sum
        //   }
        //   return sum;
        
          // 2.
           let n = nums.length;
         
               //cyclic sort : [0,n] ,[1,n]
               for(let i=0;i<n;){
                   let correctIndex = nums[i]; // if [1,n] than a[i]-1
                   if(nums[correctIndex] != nums[i]){ // swap and sitting correct pos
                           let temp = nums[i];
                           nums[i] = nums[correctIndex];
                           nums[correctIndex] = temp;
                    }else
                        i++;
               }
               // console.log(nums) [0,1,undefined,3]
               //finding missing number
               for(let i=0; i< n;i++){
                       if(nums[i] != i)
                           return i;
               }
         
            return n;  // if already sorted
        
        
            // 3.
            // nums.sort((a, b) => a-b);
            // for(var i=0; i < nums.length; i++){
            //     if( i !== nums[i]) return i;
            // }
            // return nums.length;
                
        };
        console.log(missingNumber(nums7))

// 8. Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the 
    //range [1, n] that do not appear in nums......................................................................

 let nums8 = [4,3,2,7,8,2,3,1]   // Output: [5,6]

var findDisappearedNumbers = function(a) {
    // Approach : 1.) By cyclic sort    
          let n = a.length;
    
          //cyclic sort // [1,n]
          for(let i=0;i<n;){
              let correctIndex = a[i]-1;
              if(a[correctIndex] != a[i]){
                      let temp = a[i];
                      a[i] = a[correctIndex];
                      a[correctIndex] = temp;
               }else
                  i++;
          }
          //console.log(a);
    
          let ans = [];
          for(let i=0;i<n;i++){
               if(a[i] != i+1)
                  ans.push(i+1);
          }
    
       return ans;
   
   };
   console.log(findDisappearedNumbers(nums8))

// 9. 