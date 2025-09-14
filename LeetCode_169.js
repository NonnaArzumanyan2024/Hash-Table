/*
169. Majority Element - Easy
-----------------------------

Given an array nums of size n, return the majority element. 
The majority element is the element that appears more than ⌊n / 2⌋ times.  
You may assume that the majority element always exists in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2

Time Complexity:
- O(n) -> single pass using frequency counter

Space Complexity:
- O(n) -> storing counts in an object
*/



var majorityElement = function(nums) {
    const hash = {};                                      // frequency counter

    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1;                 // Increase count for this number

        if (hash[num] > nums.length / 2) {                // If current number exceeds n/2, return immediately
            return num;
        }
    }

    return -1;                                            // The problem guarantees majority element exists
}


// Test cases
console.log(majorityElement([3,2,3]));                    // 3
console.log(majorityElement([2,2,1,1,1,2,2]));            // 2
console.log(majorityElement([1]));                        // 1
console.log(majorityElement([6,5,5]));                    // 5
console.log(majorityElement([7,7,7,8,8]));                // 7
