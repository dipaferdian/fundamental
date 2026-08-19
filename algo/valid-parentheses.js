/**
### 📜 `valid-parentheses.js`

**Skenario:**
Kamu diberikan sebuah teks (string) yang hanya berisi karakter-karakter kurung: `(`, `)`, `{`, `}`, `[`, dan `]`.
Tugasmu adalah menentukan apakah teks tersebut "valid" atau tidak.

**Aturan Validitas:**

1. Setiap kurung buka harus ditutup oleh jenis kurung tutup yang sama (misal: `(` pasangannya harus `)`).
2. Kurung buka harus ditutup dengan urutan yang benar (yang paling terakhir dibuka, harus ditutup lebih dulu).

**🧪 Test Cases:**

* **Kasus 1:**
* `input = "()[]{}"`
* *Target Output =* `true`
* *(Penjelasan: Semua kurung buka memiliki pasangan tutup yang benar dan berurutan secara rapi).*


* **Kasus 2:**
* `input = "([)]"`
* *Target Output =* `false`
* *(Penjelasan: Kurung siku `[` dibuka di dalam kurung biasa `(`, tapi kurung biasa `)` malah ditutup lebih dulu sebelum kurung siku ditutup. Ini menyalahi aturan urutan).*


* **Kasus 3:**
* `input = "{[]}"`
* *Target Output =* `true`
* *(Penjelasan: Kurung siku `[]` dibuka dan ditutup dengan benar di dalam kurung kurawal `{}`).*



---

### 🪆 Analogi: Mainan Boneka Matryoshka (Rusia)

Bayangkan karakter-karakter kurung itu sebagai **Boneka Matryoshka** (boneka kayu yang di dalamnya ada boneka yang lebih kecil lagi). Kita punya tiga jenis boneka: Bundar `()`, Kotak `[]`, dan Keriting `{}`.

* Melihat kurung buka `(`, `[`, atau `{` berarti kamu sedang **membuka separuh boneka dan menaruhnya di atas meja**.
* Melihat kurung tutup `)`, `]`, atau `}` berarti kamu memegang **tutup boneka** dan ingin menutup boneka yang ada di mejamu.

**Aturan Emas:** Kamu HANYA bisa menutup boneka yang **paling atas/terakhir** ditaruh di mejamu! Kamu tidak bisa menutup boneka yang ada di bawah tumpukan.

---

### 🚶‍♂️ Simulasi Manual

Mari kita simulasikan **Kasus 2: `"([)]"**`

1. Datang `(`. Buka boneka Bundar. Taruh di tumpukan mejamu. *(Isi Meja: Bundar)*.
2. Datang `[`. Buka boneka Kotak. Taruh di atas boneka Bundar tadi. *(Isi Meja: Kotak [atas], Bundar [bawah])*.
3. Datang `)`. Ini adalah tutup Bundar. Kamu melihat meja. Boneka yang paling atas adalah boneka Kotak! Kamu tidak bisa memasang tutup Bundar di atas badan Kotak. 🚨 **GAGAL! (Teks tidak valid).**

Mari kita simulasikan **Kasus 3: `"{[]}"**`

1. Datang `{`. Taruh di meja. *(Isi Meja: Keriting)*.
2. Datang `[`. Taruh di atasnya. *(Isi Meja: Kotak [atas], Keriting [bawah])*.
3. Datang `]`. Ini tutup Kotak. Lihat meja. Boneka teratas adalah Kotak! **Cocok!** Pasang tutupnya, singkirkan dari meja. *(Isi Meja sekarang tinggal: Keriting)*.
4. Datang `}`. Ini tutup Keriting. Lihat meja. Boneka teratas adalah Keriting! **Cocok!** Pasang tutupnya, singkirkan. *(Isi Meja: Kosong)*.
5. Karena string sudah habis dan meja kosong bersih, maka 🟢 **BERHASIL! (Teks valid).**

---

### 🧩 Hint Efisiensi & Logika (Struktur Data: Stack)

Untuk memecahkan masalah ini dengan Time Complexity $O(n)$, kamu membutuhkan struktur data bernama **Stack (Tumpukan)**. Konsep Stack adalah **LIFO (Last In, First Out)** — yang terakhir masuk, dialah yang pertama keluar.

Di JavaScript, kamu bisa menggunakan `Array` sebagai *Stack* menggunakan perintah:

* `array.push(data)` untuk menaruh barang di atas tumpukan.
* `array.pop()` untuk mengambil/menghapus barang paling atas dari tumpukan.

*Panduan:*

1. Buat variabel `tumpukan = []`.
2. Lakukan perulangan `for` untuk mengecek setiap karakter dalam `input`.
3. Jika karakternya adalah kurung buka, dorong (`push`) ke dalam `tumpukan`.
4. Jika karakternya adalah kurung tutup, ambil (`pop`) elemen terakhir dari `tumpukan` dan cek apakah pasangannya cocok! Jika tidak cocok, langsung *return `false*`.
5. Di akhir kode, jika `tumpukan` benar-benar kosong bersih, berarti `true`!

Silakan racik logikanya di file `valid-parentheses.js` milikmu. Meja kerjamu sudah siap, *Engineer*!
 */

function compute(input) {
  let newStack = [];
  const parentheses = new Map();
  parentheses.set("}", "{");
  parentheses.set("]", "[");
  parentheses.set(")", "(");

  for (let index = 0; index <= input.length - 1; index++) {
    const element = input[index];

    if (element === "{" || element === "[" || element === "(") {
      newStack.push(element);
    } else {
      let lastElement = newStack.pop();
      if (lastElement !== parentheses.get(element)) {
        return false;
      }
    }
  }

  return newStack.length == 0;
}

console.log(compute("([)]"));
console.log(compute("(("));
console.log(compute("{[]}"));
