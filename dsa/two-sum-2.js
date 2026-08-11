/*
karena ini data array yang urutan nya acak, 
dan mengitung dari 2 element, menggunakan algoritma linear search dengan has map untuk mencari element nya,
dan data struktur array untuk menyimpan hasil datanya

time complexity O(n) = iterasi element secara linear search
space complexity O(n) = menyimpan jumlah data partner sebanyak input
*/

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
