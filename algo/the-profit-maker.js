function compute(input) {
  let leftPointer = 0;
  let rightPointer = input.length - 1;
  let maximalProfit = 0;

  while (leftPointer <= rightPointer) {
    if (leftPointer == rightPointer) {
      leftPointer += 1;
      rightPointer = input.length - 1;
    }
    maximalProfit = Math.max(
      maximalProfit,
      input[rightPointer] - input[leftPointer],
    );

    rightPointer -= 1;
  }

  return maximalProfit;
}

console.log(compute([7, 1, 5, 3, 6, 4]));

console.log(compute([7, 6, 4, 3, 1]));

console.log(compute([1, 2, 4, 7, 11]));

// this is still have a bug
// this is still not effecient
