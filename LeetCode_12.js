/*
12. Integer to Roman - Medium
-----------------------------
Topic: Hash Table

Given an integer, convert it to a Roman numeral.

Roman numerals are represented by seven symbols:
I (1), V (5), X (10), L (50), C (100), D (500), M (1000).

Rules:
1. Numbers are formed by combining symbols and adding their values.
2. Symbols placed after larger symbols are added (VI = 6).
3. Symbols placed before larger symbols are subtracted (IV = 4).
4. Input is always between 1 and 3999.

Examples:
Input:  3
Output: "III"

Input:  58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3 → LVIII

Input:  1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90, IV = 4 → MCMXCIV

Complexity:
Time:  O(1) -> constant operations since maximum value is 3999
Space: O(1) -> only fixed mappings used
*/


var intToRoman = function(num) {
    // Hash table: integer values → Roman numeral symbols
    const map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    // Array of values in descending order (greedy approach)
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = "";                  // final Roman numeral string

    // Loop through each value (largest to smallest)
    for (let val of values) {
       
        // While the number is still larger than or equal to current value
        while (num >= val) {
            result += map[val];        // Append Roman numeral symbol
            num -= val;                // Reduce number by that value
        }
    }

    // Return the constructed Roman numeral string
    return result;
};


// Test Cases
console.log(intToRoman(3));             // "III"       -> 1+1+1
console.log(intToRoman(58));            // "LVIII"     -> 50 + 5 + 3
console.log(intToRoman(1994));          // "MCMXCIV"   -> 1000 + 900 + 90 + 4
console.log(intToRoman(944));           // "CMXLIV"    -> 900 + 40 + 4
console.log(intToRoman(3999));          // "MMMCMXCIX" -> 1000+1000+1000+900+90+9
