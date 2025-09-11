/*
387. First Unique Character in a String - Easy
----------------------------------------------
Topic: Hash Table, String

Given a string `s`, find the first non-repeating character in it
and return its index. If it does not exist, return -1.

Rules:
1. Consider lowercase English letters only.
2. If multiple characters are unique, return the **first** one.

Examples:
Input:  "leetcode"
Output: 0
Explanation: 'l' is the first character that appears only once.

Input:  "loveleetcode"
Output: 2
Explanation: 'v' is the first unique character.

Input:  "aabbcc"
Output: -1
Explanation: No unique character exists.

Complexity:
Time:  O(n) -> two passes over the string
Space: O(n) -> hash table stores frequency of characters
*/



var firstUniqChar = function(s) {
    let hash = {};              // create empty hash table to store character frequencies

    // Step 1: Count frequency of each character
    for (let char of s) {
        hash[char] = (hash[char] || 0) + 1;    // increment count
    }

    // Step 2: Find the first character with frequency 1
    for (let i = 0; i < s.length; ++i) {
        if (hash[s[i]] === 1) {      // first unique character
            return i;                // return its index
        }
    }

    // Step 3: If no unique character found, return -1
    return -1;
};


// Test Cases
console.log(firstUniqChar("leetcode"));        // 0  -> 'l'
console.log(firstUniqChar("loveleetcode"));    // 2  -> 'v'
console.log(firstUniqChar("aabbcc"));          // -1 -> no unique character
console.log(firstUniqChar("z"));               // 0  -> 'z'
console.log(firstUniqChar("ccddabc"));         // 4  -> 'a'
