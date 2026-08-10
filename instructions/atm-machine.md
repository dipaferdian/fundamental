### 🏧 Soal Tahap 2 - Level 1: Mesin ATM Sederhana

**Skenario:**
Kamu sedang menulis baris kode untuk otak sebuah mesin ATM. Seorang nasabah memasukkan kartu dan ingin menarik sejumlah uang tunai. Komputer harus mengecek apakah uang di rekening nasabah mencukupi.

**Data Awal (Variabel Sistem):**

- `saldo_nasabah` = 500000
- `jumlah_tarik` = 200000

**Aturan Logika Komputer (Constraint):**

1. Komputer harus memeriksa perbandingan: **Apakah** `saldo_nasabah` lebih besar atau sama dengan `jumlah_tarik`?
2. **JIKA IYA (Kondisi Terpenuhi):**

- Tampilkan pesan "Transaksi Berhasil".
- Kurangi nilai `saldo_nasabah` dengan `jumlah_tarik`.

3. **SELAIN ITU / JIKA TIDAK (Kondisi Gagal):**

- Tampilkan pesan "Saldo Tidak Mencukupi".
- Jangan kurangi saldo.

**Tugas Kamu:**
Tuliskan _Pseudocode_ dari skenario di atas! Kamu bisa menggunakan gaya bahasamu yang rapi seperti pada penyelesaian teka-teki kendi air sebelumnya. Gunakan kata kunci seperti `Buat variabel`, `Jika (IF)`, `Maka`, dan `Selain itu (ELSE)`.

1. buat 2 variable, saldo_nasabah dan jumlah_tarik
2. inisialisai nilai saldo_nasabah dengan 500000 dan jumlah_tarik dengan 200000
3. jika saldo_nasabah lebih besar dari atau sama dengan jumlah_tarik, kurangi saldo_nasabah dengan jumlah_tarik
4. jika saldo_nasabah tidak cukup, maka saldo tidak dikurangi
