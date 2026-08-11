function compute(orders) {
  const mie = 10000;
  const level = 500;

  let total = 0;
  for (const order of orders) {
    total += order * level;
    total += mie;
  }

  return total;
}

console.log(compute([1, 3]));

console.log(compute([0, 0, 5]));
