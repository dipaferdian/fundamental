function compute(array, target) {
  let low = 0;
  let high = array.length - 1;
  let middle;

  while (high >= low) {
    middle = low + Math.floor((high - low) / 2);

    if (array[middle] == target) {
      return middle;
    }

    if (array[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
}

console.log(compute([10, 20, 30, 40, 50], 20));

function compute2(array, target, high, low) {
  if (low > high) return -1;
  let middle;

  if (high >= low) {
    middle = low + Math.floor((high - low) / 2);

    if (array[middle] == target) {
      return middle;
    }

    if (array[middle] > target) {
      return compute2(array, target, middle - 1, low);
    } else {
      return compute2(array, target, high, middle + 1);
    }
  }
}

const array = [10, 20, 30, 40, 50];
const target = 20;

console.log(compute2(array, target, array.length, 0));

/* 
1. membuat 3 variable middle, low dan high
2. nilai awal low di isi dengan 0, sebagai titik awal
3. nilai awal high di isi dengan panjang array dikurangi 1
4. lakukan pengecekan berulang deng membandingkan apakah nilai high lebih besar dari atau sama dengan nilai low
5. nilia middle di isi dengan menambahkan nilai low kemudian ditambah dengan (high - low) / 2
6. kondisi jika posisi nya sudah seesuai dengan target, maka kembalikan nilai nya dan selesai.
7. jika posisi array[middle] lebih besar dari target maka nilai high dikurangi (middle - 1)
8. jika posisi array[middle] kurang dari target maka nilai low di tambah (middle + 1)
9. jika target tidak di temukan, maka kembalikan -1.
10. selesai.
*/
