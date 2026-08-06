### 🚰 Teka-teki: Menakar Air Tanpa Garis Ukur

Kamu berdiri di depan sebuah keran air yang airnya mengalir tanpa batas. Di tanganmu hanya ada **dua buah gelas kosong**:

- **Gelas A:** Kapasitas maksimal **3 Liter**.
- **Gelas B:** Kapasitas maksimal **5 Liter**.

**Misi Kamu:**
Kamu harus mendapatkan air sebanyak **TEPAT 4 LITER** di dalam Gelas B (Gelas 5L).

**Aturan Main (Constraint):**

- Kedua gelas itu bentuknya aneh dan **TIDAK ADA garis ukurannya** sama sekali. Kamu tidak bisa mengira-ngira "oh ini sepertinya sudah 4 liter".
- Kamu hanya boleh melakukan 3 jenis tindakan ini (anggap ini sebagai _function_ yang bisa dipanggil):

1. **ISI PENUH:** Mengisi gelas dari keran sampai luber/penuh.
2. **BUANG:** Membuang seluruh isi gelas ke tanah sampai kosong.
3. **TUANG:** Menuangkan isi satu gelas ke gelas lainnya. Saat menuang, kamu harus berhenti ketika **gelas tujuan sudah penuh** ATAU **gelas asal sudah kosong**.

---

### Cara Menjawab (Pelacakan Variabel)

Gunakan format dekomposisi di bawah ini untuk melacak isi (variabel) air di setiap gelas pada setiap langkahnya.

- **Status Awal:** Gelas 3L = 0 liter | Gelas 5L = 0 liter
- **Langkah 1:** Isi penuh Gelas ... dari keran.
- _(Status: Gelas 3L = ..., Gelas 5L = ...)_

- **Langkah 2:** Tuang isi Gelas ... ke Gelas ...
- _(Status: Gelas 3L = ..., Gelas 5L = ...)_

- _(... lanjutkan sampai Gelas 5L berisi tepat 4 liter!)_

Silakan coret-coret logikanya, dan tuliskan langkah-langkahmu!

## Answer

Status Awal: Gelas 3L = 0 liter | Gelas 5L = 0 liter

Langkah 1: Isi penuh Gelas 3L dari keran.

(Status: Gelas 3L = 3L, Gelas 5L = 0L)

Langkah 2: Tuang isi Gelas 3L ke Gelas 5L

(Status: Gelas 3L = 0L, Gelas 5L = 3L)

Langkah 3: Isi penuh Gelas 3L dari keran.

(Status: Gelas 3L = 3L, Gelas 5L = 3L)

Langkah 4: Tuang isi Gelas 3L ke Gelas 5L

(Status: Gelas 3L = 1L, Gelas 5L = 5L)

Langkah 5: Buang isi Gelas 5L ke tanah

(Status: Gelas 3L = 1L, Gelas 5L = 0L)

Langkah 6: Tuang isi Gelas 3L ke Gelas 5L

(Status: Gelas 3L = 0L, Gelas 5L = 1L)

Langkah 7: Isi penuh Gelas 3L dari keran.

(Status: Gelas 3L = 3L, Gelas 5L = 1L)

Langkah 8: Tuang isi Gelas 3L ke Gelas 5L

(Status: Gelas 3L = 0L, Gelas 5L = 4L)
