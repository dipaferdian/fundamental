function compute(number) {
  if (number <= 1) return "Bukan Prima";

  for (let index = 2; index <= number - 1; index++) {
    const calculate = number % index;
    if (calculate == 0) {
      return "Bukan Prima";
    }
  }

  return "Prima";
}

console.log(compute(-5));
