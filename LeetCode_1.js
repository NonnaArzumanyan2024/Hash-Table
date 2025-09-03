/*
1. Two Sum - Easy
-----------------
Topic: Array, Hash Table

Given an array of integers nums and an integer target, return the indices of 
the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Return the answer in any order.

Examples:
1. nums = [2,7,11,15], target = 9  -> [0,1]
2. nums = [3,2,4],     target = 6  -> [1,2]
3. nums = [3,3],       target = 6  -> [0,1]

1. We use a hash table (object) to remember numbers we have seen.
2. For each number nums[i], calculate diff = target - nums[i].
3. If diff is already in the hash, it means we found two numbers 
   (nums[i] and diff) that add up to target.
   → return their indices.
4. If not, store the current number with its index in the hash.
5. Keep looping until we find the pair.

Time: O(n) 
Space: O(n)
*/



var twoSum = function(nums, target) {
    const hash = {};                                    // stores number -> index

    for (let i = 0; i < nums.length; ++i) {
        let diff = target - nums[i];                    // find the needed pair

        if (diff in hash) {
            return [hash[diff], i];                     // found the solution
        }

        hash[nums[i]] = i;                              // store current number
    }
};


// ===== Test Cases =====
console.log(twoSum([2,7,11,15], 9));    // [0,1]
console.log(twoSum([3,3], 6));          // [0,1]
console.log(twoSum([1,5,3,7], 8));      // [1,2] (5 + 3)
console.log(twoSum([0,4,3,0], 0));      // [0,3] (0 + 0)
console.log(twoSum([-3,4,3,90], 0));    // [0,2] (-3 + 3)
