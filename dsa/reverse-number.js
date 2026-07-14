function compute(number) {
  let latestNumber = number;
  let result = "";

  while (latestNumber != 0) {
    const modulus = latestNumber % 10;

    result += modulus.toString();

    latestNumber = Math.floor(latestNumber / 10);
  }

  return result;
}

console.log(compute(120));
