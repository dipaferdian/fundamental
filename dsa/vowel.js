function compute(text) {
  let count = 0;

  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    if (["a", "i", "u", "e", "o"].includes(element)) {
      count++;
    }
  }

  return count;
}

console.log(compute("aai"));
