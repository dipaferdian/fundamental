### 🖼️ Konsep Dasar: Sliding Window

Bayangkan kamu memiliki sebuah bingkai foto (jendela) yang ukurannya hanya pas untuk menampilkan **3 angka** sekaligus.

Daftar Penjualan: `[2, 1, 5, 1, 3, 2]`

1. **Buat Jendela Pertama:** Kamu letakkan bingkai itu di 3 angka pertama: `[2, 1, 5]`. Kamu hitung totalnya: 2 + 1 + 5 = **8**. Ini adalah rekor maksimal pertamamu.
2. **Geser Jendelanya:** Sekarang, kamu ingin mengecek 3 angka berikutnya: `[1, 5, 1]`.

**DI SINI LETAK KEAJAIBANNYA (Agar Time Complexity O(n)):**
Alih-alih menghitung ulang 1 + 5 + 1 dari awal (yang memakan waktu), perhatikan apa yang terjadi saat jendela digeser satu langkah ke kanan:

- Angka `2` (paling kiri) **keluar** dari jendela.
- Angka `1` (angka ke-4) **masuk** ke dalam jendela.

Jadi, untuk mendapatkan total jendela kedua, komputer cukup melakukan matematika sederhana:
**Total Baru = Total Lama - Angka Keluar + Angka Masuk**
Total Baru = 8 - 2 + 1 = **7**

Lalu bandingkan: Apakah 7 lebih besar dari rekor 8? Tidak. Rekor tetap 8.
Lalu geser lagi jendelanya ke kanan, kurangi angka paling kiri yang ditinggalkan, tambahkan angka paling kanan yang baru masuk. Bandingkan lagi dengan rekor. Begitu terus sampai ujung data.

**Tugas Kamu Sekarang:**
Terjemahkan konsep "Jendela Geser" ini ke dalam _Pseudocode_-mu.
_(Hint tambahan: Kamu butuh melakukan iterasi yang dimulai dari indeks ke-3, karena jendela pertamanya sudah dihitung di awal)._

1.  buat 3 variable maxSum = windowSum, day = 3, windowSum = 0
2.  lakukan iterasi dimulai dari index 0 sampai ke day
3.        jumlahkan isi setiap element ke windowSum
4.  definisikan variable maxSum = windowSum
5.  lakukan iterasi dimulai dari index day sampai ke daftar penjualan
6.        jumlahkan isi setiap element ke windowSum
7.        kurangi isi setiap element ke windowSum, element nya berdasarkan index - day
8.        simpan berdasarkan perbandingan nilai yang paling besar dari maxSum dan windowSum
9.  return maxSum
