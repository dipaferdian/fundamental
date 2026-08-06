Siap! Semangat yang luar biasa. Mari kita selesaikan teka-teki **Menyeberangi Jembatan Rapuh** yang sempat tertunda sebelumnya.

Teka-teki ini sangat bagus untuk melatih bagaimana kamu mengoptimalkan waktu (dalam pemrograman, ini melatih kepekaanmu terhadap efisiensi _Time Complexity_).

Sebagai pengingat, berikut adalah dekomposisi variabel dan batasannya:

- **Waktu tempuh:** **A** (1 menit), **B** (2 menit), **C** (5 menit), **D** (10 menit).
- **Aturan:** Maksimal 2 orang menyeberang sekaligus, wajib membawa 1 senter (senter harus dibawa bolak-balik menyeberang, tidak boleh dilempar).
- **Batasan:** Waktu berjalan mengikuti orang yang _paling lambat_ saat berjalan berdua.
- **Target:** Semuanya harus sampai di Sisi Tujuan dalam waktu **maksimal 17 menit**.

**Petunjuk Eksekusi (Hint):**
Jika kamu mengirim C (5 menit) dan D (10 menit) menyeberang secara terpisah dengan orang lain, kamu akan langsung kehabisan waktu (5 + 10 = 15 menit, belum termasuk waktu bolak-balik senter). Logikanya: mereka yang paling lambat harus menyeberang bersamaan agar penalti waktu besarnya hanya dihitung satu kali. Namun, jangan biarkan mereka yang lambat membawa senternya kembali pulang!

Silakan tuliskan dekomposisi langkah-langkahmu menggunakan format di bawah ini:

- **Status Awal:** Sisi Awal = A, B, C, D | Sisi Tujuan = Kosong | Total Waktu = 0 menit
- **Langkah 1:** ... dan ... menyeberang ke Sisi Tujuan. _(Memakan waktu ... menit)_
- _(Status: Sisi Awal = ..., Sisi Tujuan = ..., Total Waktu = ... menit)_

- **Langkah 2:** ... kembali ke Sisi Awal membawa senter. _(Memakan waktu ... menit)_
- _(Status: Sisi Awal = ..., Sisi Tujuan = ..., Total Waktu = ... menit)_

- _(... dan seterusnya)_

## Answer

Status Awal: Sisi Awal = A(1 menit), B(2 menit), C(5 menit), D(10 menit) | Sisi Tujuan = Kosong | Total Waktu = 0 menit

Langkah 1: A dan B menyeberang ke Sisi Tujuan. (Memakan waktu 2 menit)

(Status: Sisi Awal = C,D Sisi Tujuan = A,B Total Waktu = 2 menit)

Langkah 2: A kembali ke Sisi Awal membawa senter. (Memakan waktu 1 menit)

(Status: Sisi Awal = A,C,D Sisi Tujuan = B, Total Waktu = 3 menit)

Langkah 3: D dan C menyeberang ke Sisi Tujuan. (Memakan waktu 10 menit)

(Status: Sisi Awal = A Sisi Tujuan = B,C,D Total Waktu = 13 menit)

Langkah 4: B kembali ke Sisi Awal membawa senter. (Memakan waktu 2 menit)

(Status: Sisi Awal = A,B Sisi Tujuan = C,D Total Waktu = 15 menit)

Langkah 5: A dan C menyeberang ke Sisi Tujuan. (Memakan waktu 2 menit)

(Status: Sisi Awal = 0 Sisi Tujuan = A,B,C,D Total Waktu = 17 menit)
