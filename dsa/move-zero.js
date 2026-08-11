function compute(input) {
  let pointerSlow = 0;
  let pointerFast = 0;

  while (pointerFast < input.length) {
    if (input[pointerFast] != 0) {
      let temporary = input[pointerSlow];
      input[pointerSlow] = input[pointerFast];
      input[pointerFast] = temporary;

      pointerSlow++;
    }

    pointerFast++;
  }

  return input;
}

console.log(compute([4, 0, 0, 3, 0]));
