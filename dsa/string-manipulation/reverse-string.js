function reverseString(input) {
  let reverse = new Map();

  const end = 0;
  let size = input.length - 1;

  while (size >= end) {
    reverse.set(size, input[size]);

    size--;
  }

  return reverse.values();
}

console.log(reverseString("hello"));
