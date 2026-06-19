function quickSortSederhana(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const kiri = [];
  const kanan = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) kiri.push(arr[i]);
    else kanan.push(arr[i]);
  }

  // Simpan hasil rekursi ke dalam satu variabel hasil akhir
  const hasil = [
    ...quickSortSederhana(kiri),
    pivot,
    ...quickSortSederhana(kanan),
  ];

  // Cetak log proses setiap cabangnya (agar kamu bisa melihatnya step-by-step)
  console.log("Sub-proses selesai:", hasil);

  // Kembalikan hasilnya ke fungsi yang memanggil di atasnya
  return hasil;
}

quickSortSederhana([8, 3, 1, 7, 0, 10, 2]);
