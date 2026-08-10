### 🛒 Tahap 2 - Level 5: Mesin Kasir (Akumulasi & Diskon)

Kamu sudah menguasai cara menghitung _berapa banyak_ data yang lolos syarat (Counting). Sekarang kita naik level ke teknik **Summing** (menjumlahkan isi datanya).

**Skenario:**
Kamu sedang memprogram mesin kasir minimarket. Seorang pelanggan membeli 3 barang dengan daftar harga: `[15000, 30000, 10000]`.
Toko sedang mengadakan promo: **Jika total belanjaan lebih dari Rp50.000, pelanggan mendapat potongan harga (diskon) sebesar Rp5.000.**

**Tugas Kamu:**
Tuliskan instruksi _Pseudocode_ agar komputer bisa:

1. Menjumlahkan seluruh harga barang satu per satu untuk mendapatkan total belanja.
2. Mengecek apakah total belanja tersebut berhak mendapat diskon.
3. Menghitung hasil akhir uang yang harus dibayar.

_(Petunjuk: Polanya mirip seperti sebelumnya. Buat variabel wadah, lakukan iterasi untuk **menambahkan harga barang ke dalam wadah tersebut**, lalu di akhir lakukan pengecekan JIKA totalnya lebih dari 50000...)_

1. buat 2 variable total_harga, diskon_harga, minimal_belanja
2. nisialisialisasi total_harga dengan nilai 0, diskon_harga dengan nilai 5.000, minimal_belanja dengan nilai 50.000
3. lakukan iterasi daftar harga
4. jumlahkan ke total_harga dari setiap element daftar harga
5. total_harga, dari dari hasil iterasi jika total_harga > minimal_belanja
6. maka total_harga = total_harga - diskon_harga
