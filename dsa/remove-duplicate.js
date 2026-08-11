/*
alogrithm = two pointer
data structure = array(linear)

time complexity = O(n)
space complexity = O(1)
*/

function compute(input) {
  let slowPointer = 0;
  let fastPointer = 1;

  while (fastPointer <= input.length - 1) {
    if (input[slowPointer] != input[fastPointer]) {
      slowPointer++;

      input[slowPointer] = input[fastPointer];
    }

    fastPointer++;
  }

  return slowPointer + 1;
}

console.log(compute([1, 1, 2]));
