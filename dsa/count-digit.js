function compute(number) {
  let latestNumber = number;
  let count = 0;

  while (latestNumber != 0) {
    const modulus = latestNumber % 10;
    count += Math.floor(modulus);
    const divide = latestNumber / 10;

    latestNumber = divide;
  }

  return count;
}

console.log(compute(1234));
