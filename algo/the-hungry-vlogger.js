/** 
 ---

### 📜 Soal: Vlogger Kuliner Kelaparan (The Hungry Vlogger)

**Skenario:**
Kamu adalah seorang *Food Vlogger* yang sedang datang ke sebuah festival kuliner. Di depanmu ada sederetan kedai makanan yang berjajar lurus dari kiri ke kanan. Setiap kedai memiliki "Skor Kelezatan".

Karena kapasitas perutmu terbatas, kamu **hanya bisa makan di TEPAT 3 KEDAI YANG BERSEBELAHAN**. Kamu tidak boleh melompati kedai (harus berurutan).

**Tugasmu:**
Temukan rentetan 3 kedai bersebelahan mana yang memberikan **Total Skor Kelezatan paling besar**.

**Data Kedai (Skor):** `[2, 1, 5, 1, 3, 2]`
**Kapasitas Perut (k):** `3` kedai

**⚠️ Batasan Wajib (The Constraints):**

* **Time Complexity $O(n)$:** Tidak boleh ada *nested loop* (perulangan di dalam perulangan). Kamu tidak boleh menghitung ulang skor kedai yang sama berulang-ulang.

---

### 🚶‍♂️ Simulasi Manual (Analogi Bingkai Foto)

Bayangkan kamu memegang sebuah **Bingkai Foto** berbentuk persegi panjang yang ukurannya pas untuk memuat 3 kedai.

**Langkah 1 (Membuat Bingkai Pertama):**

* Kamu taruh bingkai di 3 kedai pertama: `[2, 1, 5]`
* Total skor di dalam bingkai: `2 + 1 + 5 = 8`.
* *Otakmu mencatat rekor: "Total terbesarku saat ini adalah 8".*

**Langkah 2 (Menggeser Bingkai - INI BAGIAN PALING PENTING):**

* Sekarang kamu menggeser bingkai itu 1 langkah ke kanan.
* Isi bingkai sekarang menjadi: `[1, 5, 1]`.
* *Insting Junior:* Menghitung ulang semuanya dari nol `1 + 5 + 1 = 7`. (Ini akan jadi $O(n^2)$ kalau ukuran bingkainya 1000).
* *Insting Senior (Sliding Window):* Jangan hitung dari nol! Kamu tahu total sebelumnya adalah `8`. Saat bingkai digeser ke kanan, **kedai pertama (skor 2) keluar dari bingkai**, dan **kedai keempat (skor 1) masuk ke dalam bingkai**.
* Jadi, cara cepat menghitungnya: `Total Sebelumnya (8) - Kedai yang Keluar (2) + Kedai yang Masuk (1) = 7`.
* Total sekarang 7. Rekor terbesarmu tetap 8.

**Langkah 3 (Geser Lagi):**

* Geser bingkai 1 langkah lagi. Isi bingkai: `[5, 1, 3]`.
* Cara cepat: `Total Sebelumnya (7) - Kedai Keluar (1) + Kedai Masuk (3) = 9`.
* WAAH! Rekor baru! *Otakmu mencoret angka 8 dan mencatat rekor baru: 9.*

Begitu seterusnya sampai bingkai membentur ujung jalan.

---

### 🧩 Tugas Pseudocode-mu:

Berdasarkan cerita "Bingkai Foto" di atas, tuliskan logika instruksinya untuk komputer.

**Panduan Berpikir:**

1. Pertama, buat *looping* kecil (atau hitung manual jika bingkainya statis) untuk mendapatkan "Total Skor Pertama" dari 3 kedai pertama. Jadikan ini sebagai rekor awal.
2. Kedua, buat *looping* utama yang mulai berjalan dari kedai ke-4 sampai habis.
3. Di dalam *looping* utama, aplikasikan rumus *Sliding Window*:
`Total Baru = Total Lama - (Angka yang Ditinggalkan) + (Angka yang Baru Masuk)`
4. Adu hasil *Total Baru* dengan *Rekor Maksimal*, lalu simpan yang paling besar.

Meja kerjamu sudah bersih. Silakan susun kode atau *Pseudocode*-nya saat kamu sudah siap!
*/

function compute(input, shop) {
  let windowSum = 0;

  for (let index = 0; index < shop; index++) {
    const element = input[index];
    windowSum += element;
  }

  let maxSum = windowSum;

  for (let right = shop; right < input.length; right++) {
    let newElement = input[right];
    let removeElement = input[right - shop];

    windowSum = windowSum - removeElement + newElement;

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(compute([2, 1, 5, 1, 3, 2], 3));
console.log(compute([3, 2, 1, 5, 6, 2], 2));
console.log(compute([4, 4, 4, 4], 2));
