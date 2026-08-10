### 🏔️ Tahap 2 - Level 9: The Peak Finder (Pencari Puncak)

**Skenario:**
Kamu diminta membuat sistem penganalisis harga saham harian. Kamu memiliki daftar harga saham:
`[45, 89, 21, 95, 60]`

**Misi Kamu:**
Cari dan kembalikan (_return_) nilai yang **paling tinggi** (Maksimal) dari daftar tersebut. Dalam contoh ini, jawabannya adalah `95`.

**⚠️ BATASAN EVALUASI BIG O:**

- Dilarang menggunakan fungsi otomatis bawaan bahasa pemrograman (seperti `max()`).
- Dilarang mengurutkan data (_Sorting_). Mengurutkan data itu lumayan lambat (`Time Complexity O(n log n)`). Kita ingin waktu yang murni **O(n)** (hanya perlu melihat daftar angkanya satu kali putaran saja dari kiri ke kanan).
- Hanya boleh membuat maksimal 1 variabel tambahan (agar `Space Complexity` tetap **O(1)**).

**Petunjuk (_Hint_) - Strategi "Raja Gunung":**

1. Buat satu variabel (misal: `harga_tertinggi`). Sebagai permulaan, angkat elemen pertama dari daftar (atau angka 0) menjadi "Raja" sementara.
2. Lakukan iterasi ke seluruh daftar.
3. Di setiap perulangan, adu angka yang sedang dicek dengan sang "Raja". **JIKA** angka tersebut lebih besar, maka ia menggulingkan sang Raja dan menjadi `harga_tertinggi` yang baru.
4. Setelah iterasi selesai, kembalikan sang Raja terakhir yang bertahan.

---

1. buat 1 variable harga_tertinggi
2. lakukan iterasi, jika element > harga_tertinggi
3. maka simpan harga_tertinggi = element
4. lakukan sampai iterasi selesai
5. dan return harga_tertinggi
