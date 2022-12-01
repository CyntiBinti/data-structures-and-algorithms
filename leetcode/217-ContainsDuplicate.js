/*
Given an integer array nums, return true if any value
appears at least twice in the array, and return false
if every element is distinct.

# Example 1:

Input: nums = [1,2,3,1]
Output: true

# Example 2:

Input: nums = [1,2,3,4]
Output: false

#Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/


let containsDuplicate = function(nums) {
    nums.sort((a, b) => a-b)
    
    for (let i = 0; i <nums.length; i++) {
        console.log(`nums[i] is: ${nums[i]}`);
        for (let j = 0; j < i; j++) {
        console.log(`nums[j] is: ${nums[j]}`);
        if (nums[j] === nums[i]) {
            return true;
        }
    }
}
    return false;
}

containsDuplicate([1,2,3,4]);
VM1039:5 nums[i] is: 1
VM1039:5 nums[i] is: 2
VM1039:7 nums[j] is: 1
VM1039:5 nums[i] is: 3
VM1039:7 nums[j] is: 1
VM1039:7 nums[j] is: 2
VM1039:5 nums[i] is: 4
VM1039:7 nums[j] is: 1
VM1039:7 nums[j] is: 2
VM1039:7 nums[j] is: 3
false