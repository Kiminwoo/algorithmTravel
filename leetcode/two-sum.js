/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let indexOne = 0; indexOne < nums.length; indexOne++) {
        for (var indexTwo = indexOne + 1; indexTwo < nums.length; indexTwo++) {
            if (nums[indexOne] + nums[indexTwo] === target) {
                return [indexOne, indexTwo];
            }
        }
    }

    return []; // no answer
};