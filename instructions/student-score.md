### 🎓 Tahap 2 - Level 4: Mesin Penghitung Kelulusan

**Skenario:**
Kamu diminta membuat sistem untuk guru sekolah. Guru tersebut memasukkan daftar nilai ujian siswa ke dalam komputer.
Daftar nilainya adalah: `[70, 50, 90, 40, 85]`

Syarat lulus ujian adalah mendapatkan nilai **60 atau lebih (>= 60)**.

**Tugas Kamu:**
Tuliskan instruksi _Pseudocode_ agar komputer bisa membaca daftar nilai tersebut satu per satu dari kiri ke kanan, dan pada akhirnya komputer bisa memberitahu **ada berapa jumlah siswa yang lulus**.

_(Jika melihat daftar di atas, hasil akhirnya harusnya adalah **3**, karena nilai yang lulus adalah 70, 90, dan 85)._

**Petunjuk (_Hint_):**

- Kamu butuh sebuah variabel untuk "mengingat" sudah berapa banyak siswa yang lulus (mulai dari 0).
- Gunakan perulangan (_iterasi_) untuk mengecek nilai satu per satu.
- Gunakan kondisi (JIKA) untuk memeriksa apakah nilai saat ini >= 60. Jika ya, tambahkan variabel pengingatmu dengan angka 1.

1. buat 1 variable dengan nama jumlah_siswa, dengan inisialisai nilai 0
2. lakukan iterasi daftar nilai `[70, 50, 90, 40, 85]`
3. jika nilai lebih atau sama dengan >= 60, tambahkan nilai satu ke variable jumlah_siswa
