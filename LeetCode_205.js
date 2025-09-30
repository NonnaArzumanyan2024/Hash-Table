/*
LeetCode 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t, with a one-to-one mapping.

Time Complexity:  O(n)  - iterate through each character once
Space Complexity: O(n)  - store mappings for characters

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
*/



function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;                    // if lengths are different, cannot be isomorphic

  const mapST = {};                                           // mapping from characters in s to characters in t
  const mapTS = {};                                           // mapping from characters in t to characters in s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];                                       // current character in s
    const charT = t[i];                                       // current character in t

    // check if there is already a mapping for charS -> charT
    if (mapST[charS] !== undefined) {
      if (mapST[charS] !== charT) return false;               // existing mapping does not match, return false
    } else {
      mapST[charS] = charT;                                   // create new mapping from charS to charT
    }

    // check if there is already a mapping for charT -> charS
    if (mapTS[charT] !== undefined) {
      if (mapTS[charT] !== charS) return false;               // existing mapping does not match, return false
    } else {
      mapTS[charT] = charS;                                   // create new mapping from charT to charS
    }
  }

  return true;                                                // all characters match the one-to-one mapping
}


// Test cases
console.log(isIsomorphic("egg", "add"));                      // true:  e->a, g->d
console.log(isIsomorphic("foo", "bar"));                      // false: second o cannot map to r
console.log(isIsomorphic("paper", "title"));                  // true:  p->t, a->i, e->l, r->e
console.log(isIsomorphic("ab", "aa"));                        // false: a->a, b cannot also map to a
console.log(isIsomorphic("abcd", "mnop"));                    // true:  each character maps uniquely
