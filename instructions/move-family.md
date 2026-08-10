Mari kita buka **Teka-teki Tahap 1 yang Baru: Penyeberangan Keluarga Berat!** 🚣‍♂️

Kali ini, kita akan melatih **Manajemen Kapasitas (Capacity Constraint)**. Kamu harus memindahkan variabel-variabel dengan bobot berbeda tanpa melebihi batas _memory_ (kapasitas perahu).

### 👨‍👩‍👧‍👦 Skenario: Penyeberangan Sungai Keluarga

Sebuah keluarga yang terdiri dari 4 orang sedang mendaki gunung dan harus menyeberangi sungai. Mereka menemukan sebuah perahu kayu kecil.

**Data Karakter (Berat Badan):**

1. **Bapak:** 100 kg
2. **Ibu:** 100 kg
3. **Anak Laki-laki:** 50 kg
4. **Anak Perempuan:** 50 kg

**Aturan Main (Constraint Kritis):**

1. **Kapasitas Perahu:** Perahu tersebut sangat rapuh dan **HANYA BISA MENAMPUNG MAKSIMAL 100 KG**. Jika lebih dari 100 kg, perahu akan tenggelam!
2. **Syarat Bergerak:** Perahu tidak bisa bergerak sendiri, minimal harus ada 1 orang di dalam perahu untuk mendayung (semua anggota keluarga, termasuk anak-anak, bisa mendayung).
3. _(Contoh: Bapak dan Ibu tidak bisa naik bersamaan karena 100+100 = 200 kg. Anak Laki-laki dan Anak Perempuan BISA naik bersamaan karena 50+50 = 100 kg)._

**Misi Kamu:**
Pindahkan keempat anggota keluarga tersebut ke Sisi Tujuan tanpa pernah menenggelamkan perahu!

---

### Cara Menjawab (Pelacakan Status Kapasitas)

Gunakan format dekomposisi seperti biasa. Ingat, strateginya mirip dengan teka-teki jembatan: kamu butuh "kurir" yang ringan untuk bolak-balik mengembalikan perahu!

- **Status Awal:** Sisi Awal = Bapak(100), Ibu(100), AnakL(50), AnakP(50) | Sisi Tujuan = Kosong
- **Langkah 1:** ... dan ... menyeberang ke Sisi Tujuan.
- _(Status: Sisi Awal = ..., Sisi Tujuan = ...)_

- **Langkah 2:** ... kembali membawa perahu ke Sisi Awal.
- _(Status: Sisi Awal = ..., Sisi Tujuan = ...)_

- _(... dan seterusnya sampai keempatnya berada di Sisi Tujuan dengan selamat)_

Status Awal: Sisi Awal = Bapak(100), Ibu(100), AnakL(50), AnakP(50) | Sisi Tujuan = Kosong

Langkah 1: AnakL. dan AnakP menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = Bapak,Ibu Sisi Tujuan = AnakL, AnakP)

Langkah 2: AnakL kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = Bapak,Ibu,AnakL Sisi Tujuan = AnakP)

Langkah 3: Bapak menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = Ibu,AnakL Sisi Tujuan = AnakP, Bapak)

Langkah 4: AnakP kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = Ibu,AnakL,AnakP Sisi Tujuan = Bapak)

Langkah 5: AnakL. dan AnakP menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = Ibu Sisi Tujuan = AnakL, AnakP, Bapak)

Langkah 6: AnakP kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = Ibu,AnakP Sisi Tujuan = Bapak, AnakL)

Langkah 7: Ibu menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = AnakP Sisi Tujuan = Bapak, Ibu, AnakL)

Langkah 8: AnakL kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = AnakP,AnakL Sisi Tujuan = Bapak, Ibu)

Langkah 9: AnakL. dan AnakP menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = tidak Sisi Tujuan = AnakL, AnakP, Bapak, Ibu)
