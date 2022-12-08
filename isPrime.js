// 1. Check given number is prime or not ..........................................................................

let num = 4
function isPrimeNum(num) {
    //Write your solution here
    if (num <= 1) return 0;
    let isPrime = true;
    for (let i = 2; i < num; i++) {   // O(n) => TC,  O(1) => SC (iterate till n-1 )
        //console.log(i)
        if (num % i == 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime == true) {
        return 1;
    } else {
        return 0;
    }
}
console.log(isPrimeNum(num))

// OR

function isPrimeImprove(num) {
    //Write your solution here
    if (num <= 1) return 0;  // 1 is neighter prime nor composite
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {   // O(sqrt of n) => TC,  O(1) => SC (iterate till sqrt of n )
        //console.log(i)
        if (num % i == 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime == true) {
        return 1;
    } else {
        return 0;
    }
}
console.log(isPrimeImprove(num))

// 2. Print all prime number till given num.........................................................................

let num2 = 50
function printPrime(num) {    // O(n*sqrt of n) => TC  , O(1) => SC
    let prime = []
    for (let i = 2; i <= num; i++) {        // O(n) => TC  
        if (isPrimeImprove(i)) {     // O(sqrt of n)
            //if(isPrimeNum(i)){      // O(n)
            prime.push(i)
        }
    }
    return prime
}
//console.log(printPrime(num2))

// OR   BY SEIVE Algorithm which is most improve algorithm of print prime num........................................

 // O(nloglogn) => TC , O(n) => SC

function seiveAlgo(num2) {   
    // create a boolean array "prime[0..n]" and
    // initialise all entries it as true. A value in prime[i]
    //will finally be false if i is not a prime ,else true.
    const prime = new Array(num2+1).fill(true);  // Hashing
    //let prime = Array.from({ length: num2 + 1 }, (_, i) => true);
    //console.log(prime)
    for (let p = 2; p * p <= num2; p++) {
        // if prime[p] is not changed , than it is a prime
        if (prime[p] == true) {
            // update all multiples of p
            for (let i = p * p; i <= num2; i += p) {
                prime[i] = false;
            }
        }
    }
    // print all prime number
    let res = []
    for (let i = 2; i <= num2; i++) {
        if (prime[i] == true) {
            res.push(i)
        }
    }
    //console.log(prime)
    return res;
}
console.log(seiveAlgo(num2))
