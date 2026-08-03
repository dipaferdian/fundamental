Siap! Mari kita kembali melatih otot logikamu di **Tahap 1 (Dekomposisi & Pelacakan Status)**.

Teka-teki kali ini sangat bagus untuk melatih instingmu terhadap **Kondisi Bersyarat (_If/Else Condition_)** dan **Batasan (_Constraints_)** di dunia pemrograman.

### 🐺 Teka-teki: Menyeberangi Sungai

Seorang Petani harus menyeberangi sebuah sungai. Ia membawa tiga bawaan:

1. **Seekor Serigala**
2. **Seekor Kambing**
3. **Sekeranjang Sayur Kol**

**Misi Kamu:**
Pindahkan Petani beserta ketiga bawaannya dari **Sisi Awal** ke **Sisi Tujuan** dengan selamat tanpa ada yang dimakan.

**Aturan Main (Sangat Ketat):**

- **Kapasitas Perahu:** Perahu hanya muat untuk **Petani dan maksimal SATU bawaan** setiap kali menyeberang. (Petani tidak bisa membiarkan perahu menyeberang sendiri).
- **Kondisi Bahaya 1:** Jika Petani pergi dan meninggalkan **Serigala dan Kambing** berduaan, Serigala akan memakan Kambing.
- **Kondisi Bahaya 2:** Jika Petani pergi dan meninggalkan **Kambing dan Sayur Kol** berduaan, Kambing akan memakan Sayur Kol.
- _Catatan:_ Serigala tidak doyan sayur, jadi Serigala dan Sayur Kol aman jika ditinggal berduaan.

---

### Cara Menjawab

Anggaplah kedua sisi sungai (Sisi Awal & Sisi Tujuan) sebagai "variabel _array_" tempat kamu menyimpan data, dan aturan makan-memakan di atas adalah batas _error_-nya.

Tuliskan langkah-langkahmu secara berurutan, dan catat status (siapa saja yang ada di mana) pada akhir setiap langkah.

**Format Menjawab:**

- **Status Awal:**
- Sisi Awal = Petani, Serigala, Kambing, Sayur
- Sisi Tujuan = Kosong

- **Langkah 1:** Petani membawa [...] ke Sisi Tujuan.
- _(Status Sisi Awal: ..., Sisi Tujuan: ...)_

- **Langkah 2:** Petani kembali ke Sisi Awal membawa [... / atau sendirian].
- _(Status Sisi Awal: ..., Sisi Tujuan: ...)_

- _... dan seterusnya sampai semuanya berada di Sisi Tujuan dengan selamat._

## Answer

Sisi Awal = Petani, Serigala, Kambing, Sayur

Sisi Tujuan = Kosong

Langkah 1: Petani membawa Kambing ke Sisi Tujuan.

Langkah 2: Petani kembali ke Sisi Awal membawa perahu.

Langkah 3: Petani membawa Serigala ke Sisi Tujuan.

Langkah 4: Petani kembali ke Sisi Awal membawa perahu dan Kambing.

Langkah 5: Petani membawa Sayur ke Sisi Tujuan.

Langkah 6: Petani kembali ke Sisi Awal membawa perahu.

Langkah 7: Petani membawa Kambing ke Sisi Tujuan.
