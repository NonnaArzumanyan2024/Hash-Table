/*
String Compression using Hash Table - Medium
--------------------------------------------
Topic: Hash Table, String

Problem:
Given a string `str`, compress it using a hash table:
1. Count the frequency of each character.
2. Build a new string:
   - If a character occurs once → just write the character.
   - If a character occurs more than once → write count + character.

Example:
Input:  "aaabbc"
Output: "3a2b1c"  (or "3a2bc" if we skip count 1)

Input:  "abcd"
Output: "abcd"

Complexity:
Time:  O(n) -> iterate over string twice
Space: O(n) -> hash table stores counts
*/



function compressWithHash(str) {
    let hash = {};                             // create empty hash table
    let result = "";                           // final compressed string

    // Step 1: Count frequency of each character
    for (let char of str) {
        hash[char] = (hash[char] || 0) + 1;    // increase count
    }

    // Step 2: Build compressed string
    for (let char in hash) {
        if (hash[char] === 1) {
            result += char;                    // if count 1 → just char
        } else {
            result += hash[char] + char;       // else count + char
        }
    }

    return result;
}

// Test Cases
console.log(compressWithHash("aaabbc"));     // "3a2b1c"
console.log(compressWithHash("abcd"));       // "abcd"
console.log(compressWithHash("zzzyyyx"));    // "3z3y1x"
console.log(compressWithHash("a"));          // "a"
console.log(compressWithHash("bbbcccaaa"));  // "3b3c3a"
