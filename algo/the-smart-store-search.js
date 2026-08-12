/**
---
### 📜 Soal: Fitur Pencarian Etalase Pintar (The Smart Store Search)

**Skenario:**
Kamu adalah seorang *Software Engineer* yang ditugaskan membangun fitur pencarian (Search Bar) untuk dasbor toko *online*. Bos-mu ingin fitur pencarian ini "pintar". Kolom pencarian ini cuma ada satu, tapi pengguna bisa mengetikkan huruf (untuk mencari nama barang) ATAU mengetikkan angka (untuk mencari harga barang tertentu).

**Aturan Sistem (The Rules):**
Diberikan sebuah gudang data (`products`) berisi daftar barang (memiliki properti `nama` dan `harga`), dan sebuah kata kunci pencarian (`key`).

1. **Jika `key` berupa Teks (String):** Sistem harus mencari semua barang yang namanya *mengandung* teks tersebut. Pencarian tidak boleh mempedulikan huruf besar/kecil (*case-insensitive*).
2. **Jika `key` berupa Angka (Number):** Sistem harus mencari barang yang harganya *sama persis* dengan angka tersebut.
3. Kembalikan daftar semua barang yang cocok dengan kriteria.

**🧪 Test Cases:**

* **Kasus 1 (Pencarian Teks):**
`input = Gudang Data, "pria"`
*Target Output =* `[{ nama: "Kemeja Pria", harga: 50000 }, { nama: "Topi Pria", harga: 20000 }]`
* **Kasus 2 (Pencarian Angka):**
`input = Gudang Data, 100000`
*Target Output =* `[{ nama: "Sepatu Wanita", harga: 100000 }]`
---
 */

function compute(products, key) {
  let result = new Array();
  for (const product of products) {
    if (
      typeof key === "string" &&
      product.nama.toLocaleLowerCase().includes(key.toLowerCase())
    ) {
      result.push(product);
    }

    if (Number.isFinite(key) && product.harga === key) {
      result.push(product);
    }
  }

  return result;
}

console.log(
  compute(
    [
      { nama: "Kemeja Pria", harga: 50000 },
      { nama: "Topi Pria", harga: 20000 },
      { nama: "Sepatu Wanita", harga: 100000 },
    ],
    "pria",
  ),
);
