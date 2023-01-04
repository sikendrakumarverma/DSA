// 1. 875. Koko Eating Bananas ....................................................

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

// 2. Find peak element in a array......................................................................................

// 3.Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
    //such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum...................................

 let nums = [1,4,3,2]  //Output: 4

var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b); //because combined all min togather and max tg.

    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) {  // make pair of 2 ele. (1,2),(3,4)

        maxSum += nums[i]; // calculate sum of min ele. of all pairs (1+3)

    }

    return maxSum;
};
console.log(arrayPairSum(nums))

// 4.  Peak Index in a Mountain Array.........................................................................................

let arr = [0,10,5,2]   //Output: 1
var peakIndexInMountainArray = function(arr) {
    // Approach : 1.) Binary Search
               // 2.) By loop: By comparing i,i+1 && i-1
               // 3.) By Math.max : return index of max element 
    
      let n = arr.length;
       let low = 0;
       let high = n-1;
     
       while(low < high){
             let mid = low + Math.floor((high-low)/2);
     
             if(arr[mid] < arr[mid+1]){
               low = mid+1;
             }else{
               high = mid;
             }
       }
     
       return low;  //TC: O(logn) //SC: O(1)
      
    };
    console.log(peakIndexInMountainArray(arr))