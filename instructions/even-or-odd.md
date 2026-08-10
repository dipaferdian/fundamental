### 🏭 TAHAP 3: FUNGSI (FUNCTIONS) - Mesin Pabrik Kode

Karena kamu sudah secara natural menggunakan kata "Kembalikan" (Return), kamu sudah siap 100% masuk ke Tahap 3.

Di tahap ini, kita tidak lagi menulis kode yang hanya jalan satu kali. Kita akan membuat **FUNGSI (Function)**.
Bayangkan _Function_ itu seperti mesin di pabrik: Kamu memasukkan bahan baku (Input/Parameter) -> Mesin mengolahnya di dalam -> Mesin mengeluarkan barang jadi (Output/Return).

**Senjata Baru: MODULO (Sisa Bagi)**
Sebelum ke tantangan, ada satu trik matematika komputer bernama Modulo. Modulo adalah sisa dari pembagian.

- `10 Modulo 2` = 0 (Karena 10 dibagi 2 habis tidak bersisa).
- `5 Modulo 2` = 1 (Karena 5 dibagi 2 itu 4, sisa 1).
- _(Rahasia: Semua angka genap jika di-Modulo 2 hasilnya pasti 0!)_

**Skenario: Mesin Penyortir Angka Ganjil-Genap**
Buatlah sebuah rancangan Mesin (Fungsi) bernama `Cek_Genap`.
Mesin ini hanya menerima satu bahan baku berupa sebuah `angka`.

**Tugas Kamu:**
Tuliskan instruksi cara kerja mesin ini. Jika angka yang dimasukkan adalah genap, mesin harus "mengembalikan" kata **"Genap"**. Jika tidak, kembalikan kata **"Ganjil"**.

_(Formatnya bebas, mulailah dengan mendefinisikan nama mesinnya, input yang diterima, lalu gunakan logikamu di dalam mesin tersebut!)_

1. jika input % 2 == 0, return "genap"
2. maka return "ganjil"
