/*
202. Happy Number - Easy
------------------------
Topic: Hash Set

A happy number is defined by the following process:
- Start with any positive integer n.
- Replace the number by the sum of the squares of its digits.
- Repeat this process until n equals 1 (happy), 
  or it loops endlessly in a cycle which does not include 1 (unhappy).

Return true if n is a happy number, and false if not.

Solution Explanation:
1. Use a Set to remember numbers we have already seen.
   - If we see the same number again → cycle detected → not happy.
2. Keep transforming n into the sum of the squares of its digits.
3. Stop when n becomes 1 (happy) or we detect a cycle (unhappy).

Time Complexity: 
- Each transformation reduces n towards a small cycle (≤ 243).
- In the worst case, each step computes sum of digits → O(log n).
- Overall time is O(log n).

Space Complexity:
- We store visited numbers in a Set.
- At most O(log n) different numbers before a repeat.
- Space = O(log n).
*/



var isHappy = function(n) {                     // main function to check if a number is happy
    const seen = new Set();                     // create a Set to store numbers we have seen

    while (n !== 1 && !seen.has(n)) {           // keep looping while n is not 1 (not happy yet) and we haven't already seen this number (to avoid cycles)
        seen.add(n);                            // mark current number as visited
        n = getNext(n);                         // calculate the next number (sum of squares of digits)
    }

    return n === 1;                             // return true if we ended at 1, else false (cycle found)
};

function getNext(n) {                           // helper function: compute the sum of squares of digits of n
    let sum = 0;                                // store sum of squared digits

    while (n > 0) {                             // process each digit of n
        let digit = n % 10;                     // extract the last digit
        sum += mySqr(digit);                    // square it and add to sum
        n = Math.floor(n / 10);                 // remove the last digit
    }

    return sum;                                 // return the new number
}

function mySqr(n) {                             // helper function: square a number
    return n * n;                               // return square of n
}


// ===== Test Cases =====
console.log(isHappy(19));                       // true   -> 1^2+9^2=82 -> 8^2+2^2=68 -> 6^2+8^2=100 -> 1^2=1
console.log(isHappy(2));                        // false  -> enters cycle: 2 -> 4 -> 16 -> 37 -> ... -> 2 again
console.log(isHappy(7));                        // true   -> eventually reaches 1
console.log(isHappy(20));                       // false  -> falls into cycle
console.log(isHappy(1));                        // true   -> already 1
