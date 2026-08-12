/*
### 📜 Aturan Main: The Weight Balancer

Kamu bekerja di kargo pesawat. Kamu memiliki sederetan kotak yang beratnya **sudah diurutkan dari yang paling ringan ke paling berat** dari kiri ke kanan.

Pesawat membutuhkan keseimbangan presisi. Kapten memintamu mengambil **TEPAT DUA KOTAK** yang jika ditambahkan, berat totalnya harus sama persis dengan angka `Target`.

**Tugasmu:**
Temukan posisi (indeks) dari dua kotak tersebut.

**⚠️ Batasan Wajib (The Constraints):**

* **Time Complexity $O(n)$:** Hanya boleh satu perulangan. **DILARANG** menggunakan *nested loop* (membandingkan kotak ke-1 dengan semua kotak, lalu kotak ke-2 dengan semua kotak).
* **Space Complexity $O(1)$:** Tidak boleh membuat array baru.

### 🚶‍♂️ Simulasi Manual (Analogi Timbangan)

**Data Berat Kotak:** `[2, 3, 5, 8, 11, 15]`
**Target Berat:** `10`

Mari kita gunakan lagi jurus "Dua Jari".
Satu jari (Jari Kiri) diletakkan di kotak paling ringan (kiri).
Satu jari (Jari Kanan) diletakkan di kotak paling berat (kanan).

**Langkah 1:**

* Jari Kiri menunjuk angka `2`.
* Jari Kanan menunjuk angka `15`.
* Total berat: `2 + 15 = 17`.
* *Analisis:* Waduh, `17` itu kelebihan beban (lebih besar dari `10`)!
* *Logika Fisik:* Karena kita butuh angka yang lebih kecil, kotak mana yang harus kita geser? Jari Kiri tidak bisa digeser ke kiri lagi (sudah paling ringan). Maka, **Jari Kanan harus digeser ke kiri** untuk mencari kotak yang lebih ringan.

**Langkah 2:**

* Jari Kiri tetap di `2`.
* Jari Kanan geser ke kiri, menunjuk angka `11`.
* Total berat: `2 + 11 = 13`.
* *Analisis:* Masih `13`, kelebihan beban dari `10`. Jari Kanan harus geser ke kiri lagi.

**Langkah 3:**

* Jari Kiri tetap di `2`.
* Jari Kanan geser ke kiri, menunjuk angka `8`.
* Total berat: `2 + 8 = 10`.
* *Analisis:* BINGO! Pas tepat 10!
* Kita langsung berikan jawaban posisi jarinya.

---

### 🧪 Test Cases yang Harus Lulus:

1. `input = [2, 7, 11, 15]`, `target = 9` ➔ Harus *return* `[0, 1]` (karena 2+7 = 9)
2. `input = [1, 2, 3, 4, 6]`, `target = 6` ➔ Harus *return* `[1, 3]` (karena 2+4 = 6)

### 🧩 Tugas Pseudocode-mu:

Gunakan logika *Two Pointers* yang baru saja kita simulasikan.
Bayangkan apa yang terjadi di dalam perulangan `while`:

1. Kamu hitung `totalBerat` saat ini (Jari Kiri + Jari Kanan).
2. Jika `totalBerat` **sama persis** dengan `target`, apa yang dilakukan?
3. Jika `totalBerat` **terlalu besar** dari `target`, jari mana yang digeser?
4. *(Pertanyaan logika untukmu)*: Jika `totalBerat` ternyata **terlalu kecil** dari `target` (misalnya targetnya 16, tapi hasil jumlahmu 10), jari mana yang harus digeser agar hasilnya bisa bertambah besar?

Meja kerjamu sudah siap. Tuliskan kode atau *pseudocode* JavaScript-mu saat kamu siap!
*/

function compute(input, target) {
  let rightPointer = input.length - 1;
  let leftPointer = 0;

  while (leftPointer <= rightPointer) {
    let sum = input[leftPointer] + input[rightPointer];

    if (sum === target) {
      return [leftPointer, rightPointer];
    }

    if (sum > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(compute([2, 3, 5, 8, 11, 15], 10));
console.log(compute([2, 7, 11, 15], 9));
