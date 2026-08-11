function compute(input, target) {
  const partner = new Map();
  let inputSize = input.length;

  if (input.length == 0) return "input kosong";

  for (let index = 0; index < inputSize; index++) {
    const element = input[index];
    const diff = target - element;

    if (partner.has(diff)) {
      return [partner.get(diff), index];
    } else {
      partner.set(element, index);
    }
  }

  return "target tidak ditemukan";
}

console.log(compute([1, 2], 3));
