function compute(arr) {
  let result = 1;

  if (arr.length == 0) return 0;
  arr.forEach((item, index) => {
    result = result * item;
  });

  return result;
}

console.log(compute([1, 2, 3]));
