/*
### 📜 Aturan Main: The Profit Maker

Bayangkan kamu punya mesin waktu, tapi mesin waktu ini **hanya bisa berjalan maju** dari hari ke-1 sampai hari terakhir.
Daftar harganya: `[7, 1, 5, 3, 6, 4]` (Kiri adalah masa lalu, Kanan adalah masa depan).

Kamu punya dua misi saat mesin waktu ini berjalan:

1. **Beli di harga paling murah.**
2. **Jual di harga paling tinggi.**
*(Syarat mutlak: Kamu baru bisa menjual SETELAH kamu membeli. Waktu tidak bisa mundur).*

### 🚶‍♂️ Mari Kita Jalan Kaki (Simulasi Manual)

**Hari 1 (Harga 7):**
Kamu melihat harga 7. Karena ini hari pertama, kamu anggap ini harga "termurah saat ini".

**Hari 2 (Harga 1):**
Kamu melihat harga 1. Kamu kaget, "Wah, ini jauh lebih murah dari 7!"
Maka kamu lupakan angka 7. Sekarang otakmu mencatat: **Harga termurah yang pernah kulihat adalah 1.**

**Hari 3 (Harga 5):**
Kamu melihat harga 5. Kamu berpikir:
*"Kalau aku jual sekarang, modalku kan harga termurah yang kuingat (yaitu 1). Berarti untungku: 5 - 1 = 4."*
Otakmu sekarang mencatat rekor baru: **Untung terbesarku sejauh ini adalah 4.**

**Hari 4 (Harga 3):**
Kamu melihat harga 3. Kamu berpikir:
*"Kalau jual sekarang, untungku: 3 - 1 = 2. Ah, masih mending rekor kemarin yang untung 4."*
Rekor untung terbesarmu tetap 4.

**Hari 5 (Harga 6):**
Kamu melihat harga 6. Kamu berpikir:
*"Kalau jual sekarang, untungku: 6 - 1 = 5. WAH! Ini rekor baru!"*
Otakmu mencoret angka 4, dan mencatat rekor baru: **Untung terbesarku sejauh ini adalah 5.**

**Hari 6 (Harga 4):**
Kamu melihat harga 4. Kamu berpikir:
*"Kalau jual sekarang, untungku: 4 - 1 = 3. Gak peduli ah, rekor terbaikku tetap 5."*

Waktu habis. Kamu keluar dari mesin waktu dan dengan yakin menjawab: **"Untung terbesarnya adalah 5!"**

---

### 🧩 Pertanyaan Analisis Untukmu:

Dalam simulasi di atas, saat kamu berjalan melintasi hari dari kiri ke kanan (menggunakan SATU KALI perulangan / $O(n)$), **ada 2 hal penting yang selalu kamu simpan dan perbarui di dalam otakmu**.

Jika kamu bisa mengidentifikasi 2 hal tersebut, kamu tinggal membuatkan 2 variabel untuk menyimpannya, lalu menuliskannya ke dalam *Pseudocode*.

Silakan pikirkan, 2 variabel apa yang harus disiapkan sebelum *looping* dimulai? Tulis analisis atau *Pseudocode*-mu jika sudah siap!
*/

function compute(input) {
  let leftPointer = 0;
  let rightPointer = input.length - 1;
  let maximalProfit = 0;

  while (leftPointer <= rightPointer) {
    if (leftPointer == rightPointer) {
      leftPointer += 1;
      rightPointer = input.length - 1;
    }
    maximalProfit = Math.max(
      maximalProfit,
      input[rightPointer] - input[leftPointer],
    );

    rightPointer -= 1;
  }

  return maximalProfit;
}

console.log(compute([7, 1, 5, 3, 6, 4]));

console.log(compute([7, 6, 4, 3, 1]));

console.log(compute([1, 2, 4, 7, 11]));

// this is still have a bug
// this is still not effecient
