/** 
---
### 📜 Soal: Rekap Pengeluaran Harian (The QRIS Tracker)

**Skenario:**
Sebuah aplikasi dompet digital ingin merilis fitur "Buku Kas Pintar" di akhir bulan. Pengguna sering kali lupa ke mana saja uang mereka pergi karena metode pembayarannya campur aduk—ada yang lewat Transfer antar bank, Virtual Account untuk bayar tagihan, dan tentu saja QRIS untuk jajan makanan di kedai favorit seperti Ayam Bakar Berkah Bu Rita atau Ayam Penyet Cabe Ijo.

Manajer Produk (PM) memintamu membuat sistem penyaring otomatis.

**Tugasmu:**
Buat fungsi `compute(transactionHistories)` yang menerima daftar riwayat transaksi bulanan. Fungsi ini harus menyaring dan **hanya menjumlahkan total uang (nominal) dari transaksi yang menggunakan metode "QRIS"**. Abaikan transaksi jenis lain.

**🧪 Test Cases:**

* **Kasus 1:** Jajan QRIS di Warteg (25.000) + Transfer ke teman (50.000) + Jajan QRIS di Ayam Bakar (35.000).
* *Target Output =* `60000` (Hanya menjumlahkan 25.000 + 35.000).


* **Kasus 2:** Jajan QRIS (150.000) + Bayar Tagihan Listrik via Virtual Account (200.000) + Jajan QRIS Ayam Penyet (28.000).
* *Target Output =* `178000` (Hanya menjumlahkan 150.000 + 28.000).
---
*/

function compute(transactionHistories) {
  let total = 0;
  for (const transactionHistory of transactionHistories) {
    if (transactionHistory.jenisTransaksi !== "QRIS") continue;

    total += transactionHistory.nominal;
  }

  return total;
}

console.log(
  compute([
    { namaMerchant: "Warteg 3 Dara", jenisTransaksi: "QRIS", nominal: 25000 },
    {
      namaMerchant: "Budi (Teman)",
      jenisTransaksi: "Transfer",
      nominal: 50000,
    },
    {
      namaMerchant: "Ayam Bakar Berkah Bu Rita",
      jenisTransaksi: "QRIS",
      nominal: 35000,
    },
  ]),
);

console.log(
  compute([
    { namaMerchant: "Algo Parung", jenisTransaksi: "QRIS", nominal: 150000 },
    {
      namaMerchant: "Listrik PLN",
      jenisTransaksi: "Virtual Account",
      nominal: 200000,
    },
    {
      namaMerchant: "Ayam Penyet Cabe Ijo",
      jenisTransaksi: "QRIS",
      nominal: 28000,
    },
  ]),
);
