### 🌉 Skenario:

Kamu dan 3 orang temanmu sedang dikejar zombie dan harus menyeberangi sebuah jembatan tua yang rapuh di malam yang sangat gelap. Jembatan ini memiliki batasan yang sangat ketat.

**Data Karakter (Kecepatan Menyeberang):**

1. **Kilat:** Butuh 1 menit untuk menyeberang.
2. **Cepat:** Butuh 2 menit untuk menyeberang.
3. **Lambat:** Butuh 5 menit untuk menyeberang.
4. **Siput:** Butuh 10 menit untuk menyeberang.

**Aturan Main (Constraint Kritis):**

1. **Kapasitas Jembatan:** Jembatan sangat rapuh, maksimal hanya bisa dilewati oleh **2 orang** secara bersamaan.
2. **Senter:** Malam itu sangat gelap, siapa pun yang menyeberang (baik sendiri atau berdua) **WAJIB** membawa satu-satunya senter yang kalian miliki. Senter harus dibawa bolak-balik, tidak boleh dilempar.
3. **Kecepatan Kelompok:** Jika 2 orang menyeberang bersama, waktu yang dihabiskan adalah mengikuti kecepatan orang yang **paling lambat**. _(Contoh: Jika Kilat (1) dan Siput (10) menyeberang bersama, butuh waktu 10 menit, bukan 11 atau 1 menit)._

**Misi Kamu:**
Pindahkan keempat orang tersebut (Kilat, Cepat, Lambat, Siput) ke Sisi Tujuan dengan total waktu **TIDAK BOLEH LEBIH DARI 17 MENIT**.

---

### Cara Menjawab

Lacak posisi setiap karakter dan total waktu yang dihabiskan.
_(Petunjuk: Jangan selalu menyuruh orang yang paling cepat untuk bolak-balik mengantar semua orang, atau waktumu akan habis!)_

Gunakan format ini:

- **Status Awal:** Sisi Awal = Kilat, Cepat, Lambat, Siput | Sisi Tujuan = Kosong | Total Waktu = 0 menit
- **Langkah 1:** ... dan ... menyeberang ke Sisi Tujuan.
- _(Status: Sisi Awal = ..., Sisi Tujuan = ..., Total Waktu = ... menit)_

- **Langkah 2:** ... kembali membawa senter ke Sisi Awal.
- _(Status: Sisi Awal = ..., Sisi Tujuan = ..., Total Waktu = ... menit)_

- _(... dan seterusnya sampai keempatnya berada di Sisi Tujuan dengan maksimal waktu 17 menit!)_

Status Awal: Sisi Awal = Kilat 1 menit, Cepat 2 menit, Lambat 5 menit, Siput 10 menit| Sisi Tujuan = Kosong | Total Waktu = 0 menit

Langkah 1: kilat dan cepat menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = lambat, siput, Sisi Tujuan = kilat, cepat Total Waktu = 2 menit)

Langkah 2: cepat kembali membawa senter ke Sisi Awal.

(Status: Sisi Awal = cepat, lambat, siput Sisi Tujuan = kilat, Total Waktu = 4 menit)

Langkah 3: lambat dan siput menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = cepat Sisi Tujuan = kilat, lambat, siput Total Waktu = 14 menit)

Langkah 4: kilat kembali membawa senter ke Sisi Awal.

(Status: Sisi Awal = kilat, cepat Sisi Tujuan = lambat, siput Total Waktu = 15 menit)

Langkah 5: kilat dan cepat menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = tidak ada Sisi Tujuan = kilat, cepat, lambat, siput Total Waktu = 17 menit)

pergi ketujuan = kilat + cepat (2 menit)

kembali ke awal = cepat (2 menit)

total waktu = pergi ketujuan + kembali ke awal

pergi ke tujuan = (lambat + siput) (10 menit) + total waktu (4 menit)

kembali ke awal = kilat (1 menit)

total waktu = pergi ketujuan + kembali ke awal

pergi ke tujuan = (klat + cepat) (2 menit) + total waktu (15 menit)

kembali ke awal = tidak ada (0 menit)

total waktu = pergi ketujuan + kembali ke awal
