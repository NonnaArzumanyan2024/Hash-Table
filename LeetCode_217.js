/*
217. Contains Duplicate - Easy
------------------------------
Topic: Hash Table, Array

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Solution Explanation:
1. Use a hash table (object) to track numbers we have seen.
2. Loop through the array:
   - If the number is already in the hash → duplicate found → return true.
   - Otherwise, mark the number as seen in the hash.
3. If the loop finishes without finding a duplicate → return false.

Time Complexity:
- O(n), loop through array once.

Space Complexity:
- O(n), store each unique number in the hash.
*/



var containsDuplicate = function(nums) {                
    const hash = {};                                       // store numbers we have seen

    for (let i = 0; i < nums.length; ++i) {                // loop over each number
        if (nums[i] in hash) {                             // check if number is already seen
            return true;                                   // duplicate found
        }
        hash[nums[i]] = true;                              // mark number as seen
    }

    return false;                                          // no duplicates found
};


// ===== Test Cases =====
console.log(containsDuplicate([1,2,3,1]));                 // true   -> 1 repeats
console.log(containsDuplicate([1,2,3,4]));                 // false  -> all distinct
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));     // true   -> multiple duplicates
console.log(containsDuplicate([]));                        // false  -> empty array
console.log(containsDuplicate([5]));                       // false  -> single element
