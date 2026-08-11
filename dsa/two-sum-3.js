function compute(input, target) {
  let pointerOne = 0;
  let pointerTwo = input.length - 1;

  while (pointerOne < pointerTwo) {
    const sum = input[pointerOne] + input[pointerTwo];
    if (sum == target) return [pointerOne, pointerTwo];

    if (sum > target) {
      pointerTwo--;
    } else {
      pointerOne++;
    }
  }
}

console.log(compute([2, 7, 11, 15], 26));
