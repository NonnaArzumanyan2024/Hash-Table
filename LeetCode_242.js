/*
242. Valid Anagram - Easy
--------------------------
Topic: Hash Table, String

Given two strings s and t, return true if t is an "anagram" of s, 
and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
using all the original letters exactly once.

Example:
s = "anagram", t = "nagaram"   -> true
s = "rat", t = "car"           -> false

Solution Explanation:
1. Count the frequency of each character in string s using a hash map.
2. Loop through string t and subtract frequency for each character:
   - If a character in t doesn't exist in s or count goes below 0 → not an anagram.
3. If all frequencies balance → strings are anagrams.

Time Complexity:
- O(n), where n is the length of the strings (loop through both once).

Space Complexity:
- O(1), because there are only 26 lowercase letters, so hash map size is constant.
*/



var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;          // quick check: different lengths cannot be anagrams

    const hash = {};                                  // store frequency of letters in s

    for (let i = 0; i < s.length; ++i) {              // count letters in s
        const char = s[i];
        hash[char] = (hash[char] || 0) + 1;           // increment count or initialize to 1
    }

    for (let i = 0; i < t.length; ++i) {              // subtract letters based on t
        const char = t[i];
        if (!hash[char]) return false;                // letter missing or overused
        --hash[char];                                 // decrement count
    }

    return true;                                      // all counts match → valid anagram
};


// ===== Test Cases =====
console.log(isAnagram("anagram", "nagaram"));         // true
console.log(isAnagram("rat", "car"));                 // false
console.log(isAnagram("listen", "silent"));           // true
console.log(isAnagram("aabbcc", "abcabc"));           // true
console.log(isAnagram("abc", "abcd"));                // false
