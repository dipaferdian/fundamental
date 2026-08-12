/*
---
### 📜 Soal: Kasir Kedai Mie Pedas (The Noodle Cashier)

**Skenario:**
Kamu diminta untuk merancang sebuah fungsi penghitung total tagihan otomatis untuk sebuah kedai mie pedas. Rombongan pelanggan sering datang bersama teman-teman dan memesan beberapa mangkuk mie sekaligus, namun dengan tingkat kepedasan (level) yang berbeda-beda untuk setiap orang.

**Aturan Harga Kedai (The Rules):**

1. **Harga Dasar:** Setiap mangkuk mie pedas memiliki harga dasar tetap, yaitu **Rp10.000**.
2. **Biaya Ekstra Kepedasan:** Pelanggan bisa memilih level pedas dari level 0, 1, 2, 3, dan seterusnya. Untuk setiap kenaikan level pedas, pelanggan dikenakan biaya tambahan sebesar **Rp500** per mangkuk.
*(Contoh: Pesan level 0 harganya tetap Rp10.000. Pesan level 2 harganya menjadi Rp10.000 + (2 x Rp500) = Rp11.000).*

**Tugasmu:**
Buatlah sebuah fungsi `compute(orders)` yang menerima sebuah daftar (array) berisi level pedas dari masing-masing mangkuk yang dipesan dalam satu meja. Fungsi ini harus mengembalikan total uang yang harus dibayar oleh meja tersebut.

**🧪 Test Cases:**

* **Kasus 1:** Meja A memesan 2 mangkuk mie. Satu mangkuk level 1, dan satu mangkuk level 3.
* `input = [1, 3]`
* *Target Output =* `22000`
* *(Penjelasan: Mangkuk pertama Rp10.500 + Mangkuk kedua Rp11.500).*


* **Kasus 2:** Meja B memesan 3 mangkuk mie. Dua teman memesan level 0 (tidak pedas), dan satu teman yang nekat memesan level 5.
* `input = [0, 0, 5]`
* *Target Output =* `32500`
* *(Penjelasan: Mangkuk pertama Rp10.000 + Mangkuk kedua Rp10.000 + Mangkuk ketiga Rp12.500).*

---
Bagaimana, *Engineer*? Menulis soal dari kode yang sudah ada ternyata cukup seru, bukan? Ini membuktikan bahwa kamu mulai bisa menerjemahkan logika matematika ke dalam logika bisnis dunia nyata.
*/

function compute(orders) {
  const mie = 10000;
  const level = 500;

  let total = 0;
  for (const order of orders) {
    total += order * level;
    total += mie;
  }

  return total;
}

console.log(compute([1, 3]));

console.log(compute([0, 0, 5]));
