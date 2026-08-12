/*
---

### 📜 Soal: Mesin Kasir Paket Hemat (The Exact Change Validator)

**Skenario:**
Sebuah kantin kejujuran menjual **Paket Makan Siang** yang terdiri dari dua menu wajib:

* Nasi: Rp 3.000
* Es Teh: Rp 2.000
Total harga satu paket utuh adalah **Rp 5.000**.

Sistem mesin kasir ini sangat kaku. Mesin hanya mau menerima pembayaran jika uang yang dimasukkan jumlahnya pas untuk membeli:

1. Beberapa **Paket Makan Siang utuh** (kelipatan 5.000), ATAU
2. Beberapa Paket Makan Siang utuh **ditambah tepat satu menu ekstra** (Nasi saja, atau Es Teh saja).

**Tugasmu:**
Buat fungsi `payment(money)` yang mengecek apakah uang yang dimasukkan pelanggan itu valid ("pembayaran sesuai") atau ada kembalian/kurang ("pembayaran tidak sesuai").

**🧪 Test Cases:**

* **Kasus 1:** Bayar `5000` (Pas 1 Paket). Sisa bagi = 0. ➔ `"pembayaran sesuai"`
* **Kasus 2:** Bayar `7000` (1 Paket + 1 Es Teh). Sisa bagi 5000 = 2000. ➔ `"pembayaran sesuai"`
* **Kasus 3:** Bayar `7500`. Sisa bagi 5000 = 2500 (Tidak ada menu harga segini). ➔ `"pembayaran tidak sesuai"`

---
*/

function payment(money) {
  const list_price = [3000, 2000];

  const total = list_price[0] + list_price[1];
  const remainder = money % total;

  if (remainder === 0) {
    return console.log("pembayaran sesuai");
  }

  if (!list_price.includes(remainder)) {
    return console.log("pembayaran tidak sesuai");
  }
}

payment(7500);
