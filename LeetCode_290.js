/*
LeetCode 290. Word Pattern

Given a pattern and a string s, determine if s follows the same pattern.
Here, "follow" means a one-to-one mapping between letters in pattern and words in s.

Time Complexity:  O(n)  - iterate through each character/word once
Space Complexity: O(n)  - store mappings for characters and words

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", s = "dog dog dog dog"
Output: false
*/



function wordPattern(pattern, s) {
  const words = s.split(" ");                                     // split string s into words
  
  if (pattern.length !== words.length) return false;              // lengths must match

  const mapPatternToWord = {};                                    // mapping from pattern char -> word
  const mapWordToPattern = {};                                    // mapping from word -> pattern char

  for (let i = 0; i < pattern.length; ++i) {
    const char = pattern[i];                                      // current character in pattern
    const word = words[i];                                        // current word in s

    // check pattern -> word mapping
    if (mapPatternToWord[char] !== undefined) {
      if (mapPatternToWord[char] !== word) return false;          // mapping conflict
    } else {
      mapPatternToWord[char] = word;                              // create new mapping
    }

    // check word -> pattern mapping
    if (mapWordToPattern[word] !== undefined) {
      if (mapWordToPattern[word] !== char) return false;          // mapping conflict
    } else {
      mapWordToPattern[word] = char;                              // create new mapping
    }
  }

  return true;                                                    // all characters and words match
}


// Test cases
console.log(wordPattern("abba", "dog cat cat dog"));              // true:  a->dog, b->cat
console.log(wordPattern("abba", "dog cat cat fish"));             // false: b->cat then b->fish
console.log(wordPattern("aaaa", "dog cat cat dog"));              // false: a cannot map to both dog and cat
console.log(wordPattern("abba", "dog dog dog dog"));              // false: a->dog, b->dog (conflict)
console.log(wordPattern("abc", "one two three"));                 // true:  a->one, b->two, c->three
console.log(wordPattern("abc", "one one one"));                   // false: b->one conflicts
