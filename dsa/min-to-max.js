function compute(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const kiri = [];
  const kanan = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) kiri.push(arr[i]);
    else kanan.push(arr[i]);
  }

  const hasil = [...compute(kiri), pivot, ...compute(kanan)];

  return hasil;
}

console.log(compute([8, 3, 1]));
