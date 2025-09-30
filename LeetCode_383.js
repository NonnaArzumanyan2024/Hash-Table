/*
LeetCode 383. Ransom Note

Given two strings ransomNote and magazine, determine if ransomNote can be constructed from magazine.
Each letter in magazine can only be used once in ransomNote.

Time Complexity:   O(n + m)  - iterate through magazine and ransomNote once
Space Complexity:  O(1)      - hash map stores letters (max 26 for lowercase letters)

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/



function canConstruct(ransomNote, magazine) {
  const count = {};                                     // hash map to count letters in magazine

  for (let char of magazine) {                          // count each letter in magazine
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of ransomNote) {                        // check each letter in ransomNote
    if (!count[char]) return false;                     // letter missing or used up
    --count[char];                                      // use the letter
  }

  return true;                                          // all letters found
}


// Test cases

console.log(canConstruct("a", "b"));                    // false: letter 'a' not in magazine
console.log(canConstruct("aa", "ab"));                  // false: only one 'a' in magazine
console.log(canConstruct("aa", "aab"));                 // true:  two 'a's are available
console.log(canConstruct("abc", "cbad"));               // true:  letters available in magazine
console.log(canConstruct("hello", "lloehh"));           // true:  all letters available
