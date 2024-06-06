export const twoSum = function (numbers, target) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log('Please provide numbers array in increasing order');
    return [-1, -1];
  }

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};
