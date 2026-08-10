### 🕵️ Tahap 2 - Level 8: The Duplicate Hunter (Mencari Data Ganda)

**Skenario:**
Kamu punya daftar ID Transaksi yang masuk hari ini: `[104, 101, 109, 105, 102, 109, 107]`
Ada **satu ID** yang tercatat dua kali (duplikat), yaitu `109`.

**Misi Kamu:**
Tuliskan _Pseudocode_ untuk menemukan angka yang duplikat tersebut.

**Petunjuk Pemilihan Algoritma & Struktur Data:**

- **Cara A (Pendekatan Naif / _Brute Force_):**
  Kamu mengambil angka pertama (104), lalu mengecek _semua_ sisa angka di kanannya satu per satu. Lalu ambil angka kedua (101), cek lagi _semua_ angka di kanannya.
  _Ini menghemat memori karena tidak butuh wadah baru (Space $O(1)$), tapi sangat lambat karena kerjanya berulang-ulang (Time $O(n^2)$)._
- **Cara B (Pendekatan _Trade-off_ - Disarankan):**
  Kamu menggunakan **Struktur Data "Buku Catatan"** (dalam pemrograman disebut _Set_ atau _Hash Map_).
  Kamu mengecek angka satu per satu dari kiri ke kanan. Setiap melihat angka, kamu bertanya: _"Apakah angka ini sudah ada di buku catatan?"_
- Jika **Belum**: Tulis angka itu di buku catatan.
- Jika **Sudah**: BINGO! KEMBALIKAN angka itu karena itu pasti duplikatnya!
  _Ini sangat cepat karena hanya mengecek barisan angka satu kali (Time $O(n)$), walaupun kamu butuh mengorbankan sedikit memori sistem untuk membuat variabel "Buku Catatan" yang ukurannya membesar (Space $O(n)$)._

**Tugas Kamu:**
Tuliskan logikamu menggunakan **Cara B**. Buat variabel wadah baru, lakukan iterasi, lalu gunakan logika (JIKA) untuk mengecek isi wadah tersebut!

1. buat 1 variable new_list dengan struktur data hash map
2. iterasi transaksi, jika ada element di new_list
3. maka return element
4. jika tidak ada element di new_list, maka masukan ke new_list
