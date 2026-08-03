function compute(length, width) {
  const cicrumference = (length + width) * 2;
  const area = length * width;

  return `Keliling: ${cicrumference}, Luas: ${area}`;
}

console.log(compute(10, 10));
