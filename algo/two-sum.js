/**
---

### 📜 `two-sum.js`

**Skenario:**
Diberikan sebuah *array* berisi angka-angka (`nums`) dan sebuah angka target (`target`).
Tugasmu adalah menemukan **dua angka** di dalam *array* tersebut yang jika dijumlahkan, hasilnya sama persis dengan `target`.

Setelah menemukannya, kamu harus mengembalikan **indeks** dari kedua angka tersebut dalam bentuk *array*. (Asumsikan setiap soal pasti memiliki tepat satu pasang solusi, dan kamu tidak boleh menggunakan indeks yang sama dua kali).

**🧪 Test Cases:**

* **Kasus 1:**
* `nums = [2, 7, 11, 15]`, `target = 9`
* *Target Output =* `[0, 1]`
* *(Penjelasan: Angka pada indeks 0 adalah 2, dan indeks 1 adalah 7. $2 + 7 = 9$. Cocok!)*


* **Kasus 2:**
* `nums = [3, 2, 4]`, `target = 6`
* *Target Output =* `[1, 2]`
* *(Penjelasan: Angka pada indeks 1 adalah 2, dan indeks 2 adalah 4. $2 + 4 = 6$. Cocok!)*


* **Kasus 3:**
* `nums = [3, 3]`, `target = 6`
* *Target Output =* `[0, 1]`



---

### 🕵️‍♂️ Analogi: Agen Biro Jodoh Rahasia

Bayangkan kamu adalah seorang agen biro jodoh yang sedang duduk di mejamu. Klien-klien datang satu per satu membawa "Poin Jodoh" mereka. Misi klien adalah mencari pasangan yang poinnya melengkapi poin mereka untuk mencapai "Target Bahagia".

Kamu memiliki sebuah **Buku Catatan Sakti (Hash Map)** di mejamu. Awalnya, buku ini kosong.

Setiap kali seorang klien datang, ini adalah SOP (Standar Operasional Prosedur) kamu:

1. **Hitung Kebutuhan:** Tanyakan, *"Berapa poin yang kamu butuhkan untuk mencapai target?"* (Target - Poin Klien).
2. **Cari di Buku:** Buka Buku Catatan Saktimu. *"Apakah orang dengan poin yang dibutuhkan itu sudah pernah datang sebelumnya dan tercatat di bukuku?"*
3. **Eksekusi:**
* Jika **ADA**: Selamat! Kamu menemukan pasangannya. Langsung jodohkan (kembalikan indeks mereka berdua).
* Jika **TIDAK ADA**: Klien ini belum menemukan jodohnya. Catat nama dan nomor urut (indeks) klien ini di dalam Buku Catatan Sakti agar nanti bisa dicari oleh klien berikutnya, lalu panggil klien selanjutnya.



---

### 🚶‍♂️ Simulasi Manual

Mari kita terapkan SOP Biro Jodoh untuk **Kasus 2: `nums = [3, 2, 4]`, `target = 6**`

* *Buku Catatan Awal = Kosong `{}*`

**Klien 1 (Indeks 0, Poin = 3):**

* *Kebutuhan:* Target 6 - Poin 3 = Butuh **3**.
* *Cari di Buku:* Apakah ada orang berpoin 3 di buku? Tidak ada (buku masih kosong).
* *Tindakan:* Catat Klien 1 ke dalam buku.
*(Isi Buku sekarang: `{ Poin 3: Indeks 0 }`)*.

**Klien 2 (Indeks 1, Poin = 2):**

* *Kebutuhan:* Target 6 - Poin 2 = Butuh **4**.
* *Cari di Buku:* Apakah ada orang berpoin 4 di buku? Tidak ada.
* *Tindakan:* Catat Klien 2 ke dalam buku.
*(Isi Buku sekarang: `{ Poin 3: Indeks 0, Poin 2: Indeks 1 }`)*.

**Klien 3 (Indeks 2, Poin = 4):**

* *Kebutuhan:* Target 6 - Poin 4 = Butuh **2**.
* *Cari di Buku:* Apakah ada orang berpoin 2 di buku? **ADA!** Orang dengan poin 2 tercatat di Indeks 1!
* *Tindakan:* Jodohkan mereka! Kembalikan indeks orang di buku (`1`) dan indeks klien saat ini (`2`).
* *Hasil:* `[1, 2]`. 🟢 **BERHASIL!**

---

### 🧩 Panduan Productive Struggle & Fokus Efisiensi

Cara *Brute Force* (pemula) untuk menyelesaikan ini adalah dengan menggunakan dua *looping* bersarang (satu *pointer* menunjuk klien, *pointer* lain mencari pasangannya di seluruh sisa antrean). Itu memakan waktu $O(n^2)$ dan sangat lambat jika kliennya ada sejuta orang.

Dengan menggunakan pendekatan **Hash Map** (Buku Catatan), kita bisa menyelesaikannya hanya dengan **SATU KALI *looping***. Waktu eksekusinya menjadi instan $O(n)$! Kecepatannya ditukar dengan sedikit penggunaan memori ekstra $O(n)$ untuk menyimpan Buku Catatan.

**Hint Logika:**

1. Buat Buku Catatan menggunakan `new Map()` atau sekadar Objek JavaScript biasa `const buku = {};`.
2. Gunakan satu *looping* `for` (atau iterasi yang elegan).
3. Di dalam *loop*, hitung *selisih* (kebutuhan).
4. Cek apakah *selisih* tersebut sudah eksis di dalam `buku` (ingat untuk mengecek eksistensi dengan aman, jangan menggunakan *truthy/falsy* sederhana karena indeks bisa bernilai `0` yang merupakan falsy di JS). Jika eksis, langsung kembalikan *array* berisi dua indeks tersebut! (Ingat aturan ketat kita: gunakan strict equality `===` jika membandingkan sesuatu).
5. Jika belum ada, simpan `nums[i]` sebagai kunci, dan `i` (indeksnya) sebagai nilai di dalam `buku`.

Buka *editor*-mu, buat *file* `two-sum.js`, dan rancang logikanya. Saya bersiap meninjau kodemu!
 */

function compute(input, target) {
  let maps = new Map();

  for (let index = 0; index < input.length; index++) {
    const element = input[index];

    let currentNumber = target - element;
    if (maps.has(currentNumber)) {
      return [maps.get(currentNumber), index];
    }

    maps.set(element, index);
  }
}

console.log(compute([2, 7, 11, 15], 9));
console.log(compute([3, 2, 4], 6));
console.log(compute([3, 3], 6));
