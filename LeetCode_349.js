/*
349. Intersection of Two Arrays - Easy
--------------------------------------

Given two integer arrays nums1 and nums2, return an array of their intersection.  
Each element in the result must be unique and you may return the result in any order.

Time Complexity:
- Creating Set from nums1 -> O(n)
- Creating Set from nums2 -> O(m)
- Iterating over set1 -> O(n)
Overall: O(n + m)

Space Complexity:
- Set1 and Set2 store unique values -> O(n + m)
- Result array -> O(min(n, m))
Overall: O(n + m)
*/



function task(nums1, nums2) {
    let set1 = new Set(nums1);            // Create a set from nums1 (unique elements only)
    let set2 = new Set(nums2);            // Create a set from nums2 (unique elements only)
    let result = [];                      // Store intersection elements

    for (let num of set1) {               // Loop through each element in set1
        if (set2.has(num)) {              // If num also exists in set2 -> add to result
            result.push(num);
        }
    }

    return result;                        // Return the intersection array
}


// Test cases 
console.log(task([1,2,2,1], [2,2]));      // Output: [2]      Basic duplicate case
console.log(task([4,9,5], [9,4,9,8,4]));  // Output: [9,4]    Multiple intersections
console.log(task([1,3,5], [2,4,6]));      // Output: []       No common elements
console.log(task([], [1,2,3]));           // Output: []       One array empty
console.log(task([1,2,3], [1,2,3]));      // Output: [1,2,3]  Both arrays same
