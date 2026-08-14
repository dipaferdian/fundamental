/**
---

### 📜 Judul Soal: Container With Most Water

*(Penampungan Air Terbesar)*

**Skenario:**
Bayangkan kamu sedang merancang kolam penampungan air hujan raksasa untuk sebuah *resort* tropis di pesisir Banten yang akan kamu kunjungi bersama teman-temanmu. Di lahan tersebut, sudah tertancap deretan dinding beton dengan ketinggian yang berbeda-beda secara berurutan.

Kamu harus memilih **tepat dua dinding beton** untuk dijadikan sisi kiri dan sisi kanan kolam. Tujuannya satu: **menampung air air hujan sebanyak-banyaknya**.

**Aturan Fisika (The Rules):**

1. Kapasitas air (Luas) dihitung dari: `Jarak antar dinding × Tinggi air`.
2. Tinggi air maksimal yang bisa ditampung **selalu mengikuti tinggi dinding yang paling pendek**. (Jika dinding kiri tingginya 2 meter, dan kanan 10 meter, airnya hanya bisa setinggi 2 meter, lebih dari itu airnya tumpah).

**Tugasmu:**
Diberikan sebuah *array* `height` yang berisi daftar ketinggian dinding beton dari kiri ke kanan. Temukan dua dinding yang bisa membentuk kolam dengan kapasitas air paling besar, dan kembalikan angka kapasitas maksimal tersebut!

**🧪 Test Cases:**

* **Kasus 1:**
* `height = [1, 8, 6, 2, 5, 4, 8, 3, 7]`
* *Target Output =* `49`
* *(Penjelasan: Dinding terbaik adalah dinding ke-2 (ketinggian 8) dan dinding terakhir (ketinggian 7). Jarak antara mereka adalah 7 langkah. Tinggi air maksimal adalah 7. Kapasitas = 7 x 7 = 49).*


* **Kasus 2:**
* `height = [1, 1]`
* *Target Output =* `1`
* *(Penjelasan: Jaraknya 1, tinggi maksimalnya 1. Kapasitas = 1 x 1 = 1).*



---

### 🏗️ Simulasi Manual (Analogi Dinding Beton)

Bagaimana cara mencari kolam terbesar tanpa harus mencoba setiap kombinasi (yang akan memakan waktu $O(n^2)$)? Gunakan insting *Two Pointers*!

1. **Mulai dari yang Terlebar:**
Letakkan Jari Kiri (Dinding Kiri) di ujung paling awal, dan Jari Kanan (Dinding Kanan) di ujung paling akhir. Kenapa? Karena kita ingin mencari yang kapasitasnya paling besar, jadi kita mulai dari jarak yang **paling lebar**.
*Misal pada Kasus 1:* Kiri di dinding tinggi `1`, Kanan di dinding tinggi `7`.
* Jarak = 8 langkah.
* Tinggi air = `1` (mengikuti dinding terpendek).
* Kapasitas = `8 x 1 = 8`.
* *Rekor Saat Ini = 8.*


2. **Logika Pengorbanan (Siapa yang harus maju?):**
Sekarang kita ingin mencoba mengecilkan jarak untuk mencari dinding yang lebih tinggi. Pertanyaannya: **Jari mana yang harus digeser? Kiri atau Kanan?**
* *Pikirkan secara fisik:* Tinggi air kita saat ini dibatasi oleh Dinding Kiri (tinggi 1). Jika kita menggeser Dinding Kanan (yang tinggi 7) ke dalam, jaraknya pasti mengecil, dan tinggi air **tetap** akan dibatasi oleh angka 1. Hasilnya pasti akan lebih kecil!
* *Kesimpulan:* Mempertahankan dinding yang pendek itu sia-sia. Jadi, kita harus selalu **menggeser dinding yang lebih pendek** dengan harapan menemukan dinding yang lebih tinggi di dalamnya!


3. **Geser Dinding Pendek:**
Karena Kiri (1) lebih pendek dari Kanan (7), geser Kiri satu langkah ke kanan.
Sekarang Kiri ada di dinding tinggi `8`, Kanan tetap di `7`.
* Jarak = 7 langkah.
* Tinggi air = `7` (mengikuti dinding terpendek antara 8 dan 7).
* Kapasitas = `7 x 7 = 49`.
* *Rekor Baru = 49.*



Terus lakukan itu (selalu geser yang lebih pendek) sampai kedua jari bertemu di tengah.

---

### 🧩 Productive Struggle (Meja Kerjamu)

Untuk membuat sistem efisien $O(n)$, kamu memerlukan:

1. Variabel `left` (dimulai dari indeks 0).
2. Variabel `right` (dimulai dari indeks terakhir `height.length - 1`).
3. Variabel `maxArea = 0` untuk mencatat rekor tertinggi.
4. Sebuah perulangan `while (left < right)`.
5. Di dalam *loop*, hitung kapasitas saat ini (`jarak x tinggi air`), lalu perbarui `maxArea`.
6. Terapkan "Logika Pengorbanan": Jika dinding `left` lebih pendek, `left++`. Jika dinding `right` lebih pendek (atau sama), `right--`.

Silakan rangkai kode JavaScript-nya di meja kerjamu, Arsitek! Saya bersiap untuk melakukan *Code Review*.
 */

function compute(input) {
  let right = input.length - 1;
  let left = 0;
  let maxArea = 0;

  while (left < right) {
    let leftHeight = input[left];
    let rightHeight = input[right];
    let currentArea = (right - left) * Math.min(rightHeight, leftHeight);

    maxArea = Math.max(maxArea, currentArea);

    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(compute([1, 8, 6, 2, 5, 4, 8, 3, 7]));

console.log(compute([1, 1]));
