/**
### 📜 Aturan Main: Valid Palindrome

Sebuah kata disebut *Palindrome* jika kata tersebut dibaca dari depan maupun dari belakang bunyinya sama persis.
Tugas komputermu adalah mengecek sebuah kata, lalu berteriak **TRUE** (jika itu Palindrome) atau **FALSE** (jika bukan).

**⚠️ Batasan (Constraints):**

* **Time $O(n)$:** Pengecekan harus cepat, tidak boleh diulang-ulang dari awal.
* **Space $O(1)$:** Kamu **DILARANG KERAS** memfotokopi kata tersebut lalu membaliknya (misalnya membuat teks baru di memori). Kamu hanya boleh melihat kata aslinya.

### 🚶‍♂️ Simulasi Manual (Analogi Dua Jari)

Bayangkan kata tersebut dicetak di atas sebuah pita kertas yang panjang. Karena kamu tidak boleh memfotokopi pita itu, kamu menggunakan kedua jari telunjukmu untuk mengeceknya.

**Simulasi 1: Kata "K A T A K"**

1. Kamu letakkan **Jari Kiri** di huruf paling awal ('K'). Kamu letakkan **Jari Kanan** di huruf paling akhir ('K').
2. Kamu lihat huruf yang ditunjuk kedua jarimu. Sama-sama 'K'. Aman!
3. Kamu geser Jari Kiri satu langkah ke kanan. Kamu geser Jari Kanan satu langkah ke kiri.
4. Sekarang Jari Kiri menunjuk 'A', Jari Kanan menunjuk 'A'. Sama? Aman!
5. Kamu geser lagi. Sekarang kedua jari bertabrakan di huruf 'T'.
6. Karena jarimu sudah bertemu di tengah dan tidak ada huruf yang beda, kamu teriak dengan yakin: **TRUE!**

**Simulasi 2: Kata "K A P A L"**

1. Jari Kiri menunjuk 'K', Jari Kanan menunjuk 'L'.
2. Baru langkah pertama, hurufnya sudah berbeda!
3. Kamu tidak perlu repot-repot mengecek huruf 'A', 'P', atau 'A' di tengahnya. Tidak ada gunanya. Kamu langsung berhenti saat itu juga dan teriak: **FALSE!**

---

### 🧩 Tugas Pseudocode-mu:

Berdasarkan cerita "Dua Jari" di atas, tuliskan logika instruksinya untuk komputer.

**Panduan Berpikir:**

1. Di mana posisi awal `Jari Kiri` dan `Jari Kanan` (dalam bentuk indeks)?
2. Kita butuh perulangan (`while` loop). Sampai kapan perulangan ini harus terus berjalan? (Ingat kapan jari berhenti bergerak di Simulasi 1).
3. Di dalam perulangan, apa yang harus dicek pertama kali? Apa yang terjadi jika hurufnya berbeda?
4. Jika hurufnya sama, ke mana jari-jari itu harus melangkah?

Meja kerjamu sudah siap. Tulis *Pseudocode* atau kodemu saat kamu siap!
 */

function compute(input) {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    if (input[left] != input[right]) return false;

    left++;
    right--;
  }

  return true;
}

console.log(compute("kapal"));
