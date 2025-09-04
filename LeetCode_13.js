/*
13. Roman to Integer - Easy
---------------------------
Topic: Hash Table, String

Roman numerals are represented by seven symbols:
I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.

Rules:
1. Normally, values are added: VI = 5 + 1 = 6.
2. But if a smaller value comes before a larger one, it is subtracted:
   IV = 5 - 1 = 4, IX = 10 - 1 = 9.

Given a Roman numeral string s, convert it to an integer.

Solution Explanation:
1. Store the Roman symbols and their values in a hash.
2. Loop through the string from left to right:
   - If current symbol is smaller than the next -> subtract it.
   - Else -> add it.
3. Return the total.

Time Complexity:
- O(n), we process each character once.

Space Complexity:
- O(1), hash is fixed size (7 symbols).
*/



var romanToInt = function(s) {                  
    const hash = {                               // Roman symbols to values
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000 
    };
    
    let total = 0;                               // store final result

    for (let i = 0; i < s.length; ++i) {         // loop over each character
        if (hash[s[i]] < hash[s[i + 1]]) {       // check if we need to subtract
            total -= hash[s[i]];
        } else {                                 // otherwise add value
            total += hash[s[i]];
        }
    }

    return total;                                // return converted integer
};


// ===== Test Cases =====
console.log(romanToInt("III"));                  // 3
console.log(romanToInt("IV"));                   // 4
console.log(romanToInt("IX"));                   // 9
console.log(romanToInt("LVIII"));                // 58   -> L(50) + V(5) + III(3)
console.log(romanToInt("MCMXCIV"));              // 1994 -> M(1000) + CM(900) + XC(90) + IV(4)
