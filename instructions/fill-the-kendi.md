### 🛢️ Boss Level: Berbagi Minyak Emas

Bayangkan kamu memiliki **8 Liter minyak emas** yang sangat berharga. Kamu ingin membaginya dengan seorang teman secara benar-benar adil: **Tepat 4 Liter untukmu, dan tepat 4 Liter untuk temanmu.**

Masalahnya, kamu hanya memiliki 3 buah kendi tanpa garis ukur sama sekali:

1. **Kendi 8L:** Kapasitas 8 Liter _(Saat ini berisi penuh 8 Liter minyak)_.
2. **Kendi 5L:** Kapasitas 5 Liter _(Saat ini kosong)_.
3. **Kendi 3L:** Kapasitas 3 Liter _(Saat ini kosong)_.

**Aturan Main (Constraint Kritis):**

- **Sistem Tertutup:** Tidak ada keran air tambahan, dan kamu **TIDAK BOLEH** membuang setetes pun minyak ini ke tanah karena sangat berharga.
- **Aturan Menuang:** Kamu hanya bisa menuang minyak dari satu kendi ke kendi lainnya sampai **kendi tujuan PENUH**, atau **kendi asal KOSONG**.

**Misi Kamu:**
Lakukan proses penuangan bolak-balik sampai **Kendi 8L berisi tepat 4 Liter**, dan **Kendi 5L berisi tepat 4 Liter**! (Kendi 3L harus kembali kosong).

---

### Cara Menjawab (Pelacakan 3 Variabel)

Gunakan format ini untuk melacak isi liter dari ketiga kendi setiap kali kamu selesai menuang:

- **Status Awal:** Kendi 8L = 8L | Kendi 5L = 0L | Kendi 3L = 0L
- **Langkah 1:** Tuang isi Kendi 8L ke Kendi ...
- _(Status: Kendi 8L = ..., Kendi 5L = ..., Kendi 3L = ...)_

- **Langkah 2:** Tuang isi Kendi ... ke Kendi ...
- _(Status: Kendi 8L = ..., Kendi 5L = ..., Kendi 3L = ...)_

- _(... lanjutkan sampai statusnya menjadi Kendi 8L = 4L, Kendi 5L = 4L, Kendi 3L = 0L)_

Status Awal: Kendi 8L = 8L | Kendi 5L = 0L | Kendi 3L = 0L

Langkah 1: Tuang isi Kendi 8L ke Kendi 5L

(Status: Kendi 8L = 3, Kendi 5L = 5, Kendi 3L = 0)

Langkah 2: Tuang isi Kendi 5L ke Kendi 3L

(Status: Kendi 8L = 3, Kendi 5L = 2, Kendi 3L = 3)

Langkah 3: Tuang isi Kendi 3L ke Kendi 8L

(Status: Kendi 8L = 6, Kendi 5L = 2, Kendi 3L = 0)

Langkah 4: Tuang isi Kendi 5L ke Kendi 3L

(Status: Kendi 8L = 6, Kendi 5L = 0, Kendi 3L = 2)

Langkah 5: Tuang isi Kendi 8L ke Kendi 5L

(Status: Kendi 8L = 1, Kendi 5L = 5, Kendi 3L = 2)

Langkah 6: Tuang isi Kendi 5L ke Kendi 3L

(Status: Kendi 8L = 1, Kendi 5L = 4, Kendi 3L = 3)

Langkah 7: Tuang isi Kendi 3L ke Kendi 8L

(Status: Kendi 8L = 4, Kendi 5L = 4, Kendi 3L = 0)

8L = 3 -> 5L = 5

5L = 2 -> 3L = 3

3L = 0 -> 8L = 6

5L = 0 -> 3L = 2

8L = 1 -> 5L = 5

5L = 4 -> 3L = 3

3L = 0 -> 8L = 4
