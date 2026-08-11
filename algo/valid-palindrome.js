function compute(input) {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    if (input[left] != input[right]) return false;

    left++;
    right--;
  }

  return true;
}

console.log(compute("kapal"));
