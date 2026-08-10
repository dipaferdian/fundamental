### 🥷 Tahap 2 - Level 10: Pola "Dua Jari" (Two Pointers)

Kamu sudah tahu cara mengecek data dari Kiri ke Kanan menggunakan _Looping_ biasa. Sekarang, kita akan belajar salah satu teknik paling mematikan dalam _Computer Science_ untuk memecahkan masalah dengan sangat cepat tanpa memakan memori ($O(1)$ Space). Teknik ini disebut **Two Pointers** (Dua Penunjuk).

**Skenario: Sistem Pencocokan Berat Kargo**
Kamu memiliki daftar berat barang yang **SUDAH DIURUTKAN** dari yang paling ringan ke paling berat:
`[1, 2, 3, 4, 6, 8, 9]`

Sebuah drone kargo hanya bisa terbang jika membawa tepat **2 barang** yang total beratnya persis **10 kg**.

**Misi Kamu:**
Tuliskan _Pseudocode_ untuk mencari dua barang tersebut, lalu _return_ kedua angkanya.

**Petunjuk (_Hint_) - Teknik Two Pointers:**
Bayangkan kamu meletakkan "Jari Kiri" di angka paling awal (1) dan "Jari Kanan" di angka paling akhir (9).

1. Jumlahkan angka di Jari Kiri dan Jari Kanan.
2. Jika totalnya **PAS** dengan target (10), KEMBALIKAN kedua angka tersebut.
3. Jika totalnya **KEBESARAN** (misal 1+9 = 10.. eh kebetulan pas, mari kita coba 3+9 = 12), maka Jari Kanan harus digeser satu langkah ke kiri agar nilainya mengecil.
4. Jika totalnya **KEKECILAN** (misal 1+6 = 7), maka Jari Kiri harus digeser satu langkah ke kanan agar nilainya membesar.
5. Ulangi terus sampai Jari Kiri dan Jari Kanan bertemu!

_Teknik ini memungkinkan kita memecahkan masalah ini dengan Time Complexity $O(n)$ dan Space $O(1)$. Jika menggunakan loop bertumpuk (Brute Force), butuh waktu $O(n^2)$!_

1. buat 3 variable pointer1 = 0, pointer2 = array.length - 1, dan total_berat = 0
2. lakukan iterasi while pointer1 < pointer2,
3. jumlahkan total_berat = array[pointer1] + array[pointer2]
4. jika total_berat == 10, maka return array[pointer1], array[pointer2]
5. jika total_berat > 10, maka pointer2 = pointer2 - 1
6. maka total_berat kurang dari 10, maka pointer1 = pointer1 + 1
