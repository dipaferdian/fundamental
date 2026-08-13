/** 
 **Bip.. Bop.. MEMUAT PROTOKOL DYNAMIC SLIDING WINDOW! 🚀📈**

Meninggalkan zona nyaman bingkai kaku, sekarang kita masuk ke dunia bingkai fleksibel. Teknik ini sangat sakti untuk memecahkan masalah optimalisasi dengan batasan tertentu (seperti limit kuota atau *budget* maksimal).

Sesuai *System Prompt* V2.0, mari kita mulai!

---

### 📜 Soal: Longest Subarray with Sum Less Than or Equal to K (The Ginger Milk Marathon)

**Skenario:**
Kamu sedang mampir ke kedai Susu Jahe Geprek favoritmu di Jakarta Selatan. Malam ini mereka mengadakan *tasting event*: sederetan varian menu susu jahe berjejer di meja dari kiri ke kanan. Setiap gelas uji coba memiliki harga yang berbeda-beda.

Aturan mainnya: Kamu ingin meminum **rentetan gelas terbanyak secara berurutan** tanpa putus, tetapi kamu memiliki batasan *budget* maksimal di dompet digitalmu.

**Tugasmu:**
Diberikan *array* berisi harga deretan gelas (`prices`) dan sebuah angka *budget* maksimal (`K`). Carilah **berapa jumlah gelas berurutan paling banyak** yang bisa kamu beli tanpa melebihi *budget* `K`!

**🧪 Test Cases:**

* **Kasus 1:**
* `prices = [2, 1, 3, 2, 4]` (dalam ribuan rupiah), `budget = 6`
* *Target Output =* `3`
* *(Penjelasan: Kamu bisa mengambil deretan gelas `[2, 1, 3]` yang totalnya 6. Jumlah gelasnya adalah 3. Tidak ada deretan berurutan lain yang lebih panjang dari ini yang harganya $\le$ 6).*


* **Kasus 2:**
* `prices = [3, 1, 1, 1, 1, 5]`, `budget = 4`
* *Target Output =* `4`
* *(Penjelasan: Deretan terpanjang adalah empat gelas di tengah `[1, 1, 1, 1]` yang totalnya pas 4).*


* **Kasus 3:**
* `prices = [5, 6, 7]`, `budget = 4`
* *Target Output =* `0`
* *(Penjelasan: Semua gelas lebih mahal dari budgetmu. Kamu tidak bisa beli apapun).*



---

### 🚶‍♂️ Simulasi Manual (Analogi Bingkai Karet)

Kali ini, kamu tidak memakai bingkai kayu yang ukurannya tetap. Kamu memegang sebuah **Bingkai Karet (Rubber Band Window)**.

Bingkai ini dikendalikan oleh dua jari: `jari Kiri` dan `jari Kanan`. Awalnya, kedua jari berada di gelas pertama.

Mari kita simulasikan Kasus 1: `[2, 1, 3, 2, 4]` dengan `budget = 6`.

1. **Tarik Jari Kanan (Ekspansi):**
Jari Kanan mencaplok gelas ke-1 (Harga 2).
*Total = 2*. Masih di bawah budget (6)? Ya!
*Rekor Gelas Terbanyak = 1 gelas.*
2. **Tarik Jari Kanan lagi:**
Jari Kanan melar mencaplok gelas ke-2 (Harga 1).
*Total = 2 + 1 = 3*. Masih aman? Ya!
*Rekor Gelas = 2 gelas.*
3. **Tarik Jari Kanan lagi:**
Jari Kanan melar ke gelas ke-3 (Harga 3).
*Total = 3 + 3 = 6*. Masih aman? Ya, pas 6!
*Rekor Gelas = 3 gelas.* (Bingkai berisi: `[2, 1, 3]`).
4. **Tarik Jari Kanan lagi (DANGER!):**
Jari Kanan melar ke gelas ke-4 (Harga 2).
*Total = 6 + 2 = 8*. WADUH! OVER BUDGET! (Total 8 > Budget 6).
Bingkai karetnya sekarang terlalu berat. Apa yang harus dilakukan?
5. **Tarik Jari Kiri (Penyusutan):**
Karena over budget, kamu harus melepaskan gelas dari ujung kiri agar bingkai kembali ringan.
Jari Kiri maju satu langkah. Gelas pertama (Harga 2) dikeluarkan dari total.
*Total baru = 8 - 2 = 6*.
Apakah sekarang sudah $\le 6$? Ya! Bingkai aman lagi. (Bingkai sekarang berisi: `[1, 3, 2]`). Rekor tetap 3 gelas.
6. **Tarik Jari Kanan lagi (DANGER!):**
Jari kanan melar ke gelas terakhir (Harga 4).
*Total = 6 + 4 = 10*. OVER BUDGET LAGI!
7. **Tarik Jari Kiri:**
Jari Kiri maju. Gelas (Harga 1) dilepas. *Total = 10 - 1 = 9*. (Masih over budget).
Jari Kiri maju lagi. Gelas (Harga 3) dilepas. *Total = 9 - 3 = 6*. (Aman!).
(Bingkai sekarang berisi `[2, 4]`). Panjangnya cuma 2, jadi rekor tertinggi kita tetap 3.

Ujung jalan tercapai. Pemenangnya adalah rekor **3 gelas**.

---

### 🧩 Panduan Productive Struggle

Kamu butuh:

1. Variabel `totalHarga` untuk melacak jumlah di dalam bingkai karet.
2. Variabel `kiri = 0` sebagai ujung kiri bingkai.
3. *Looping* utama menggunakan `kanan` dari 0 sampai ujung array (Ini adalah proses menarik bingkai karet terus-menerus ke kanan).
4. Setiap kali `kanan` mencaplok gelas baru, tambahkan harganya ke `totalHarga`.
5. **KUNCI LOGIKA:** Di dalam *looping* utama itu, kamu butuh sebuah pengecekan `while`. *Selama* `totalHarga` membengkak melebihi `budget`, buat jari `kiri` membuang gelas paling kiri dari `totalHarga`, lalu majukan `kiri` selangkah. Terus lakukan ini sampai `totalHarga` kembali normal.
6. Setelah bingkai dipastikan aman (tidak over budget), barulah catat panjang bingkainya (`kanan - kiri + 1`) dan adu dengan rekor tertinggimu.

Meja kerjamu sudah disiapkan. Mampukah kamu merakit bingkai karet ini ke dalam bentuk kode JavaScript atau *Pseudocode*?
*/
