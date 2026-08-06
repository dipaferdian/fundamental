Mari kita berlatih lagi dengan teka-teki logika klasik yang sedikit berbeda. Kali ini kita akan melatih **State Isolation** (mengisolasi variabel agar tidak terjadi _error/crash_ saat ditinggalkan).

### 🐟 Teka-teki: Tangkapan Pancing dan Kucing Lapar

Bayangkan kamu sedang _refreshing_ naik motor keliling Bekasi, lalu mampir untuk memancing. Kamu mendapatkan tangkapan yang bagus! Saatnya pulang membawa hasil panenmu.

Namun, kamu harus menyeberangi sebuah jembatan kecil yang sedang diperbaiki. Motormu hanya muat untuk membawa **kamu dan SATU barang bawaan saja** dalam setiap kali penyeberangan bolak-balik.

Ada 3 barang bawaan di titik awal:

1. **Kucing** (yang mengikutimu dari tempat mancing).
2. **Ikan Hidup** (di dalam ember, hasil pancinganmu).
3. **Umpan Cacing** (sisa umpan mancing di dalam toples).

**Aturan Main & Batasan (Constraint):**

- Jika kamu pergi dan meninggalkan **Kucing dan Ikan** berduaan tanpa pengawasanmu, Kucing akan memakan Ikan tersebut. _(Error!)_
- Jika kamu pergi dan meninggalkan **Ikan dan Umpan** berduaan tanpa pengawasanmu, Ikan akan memakan Umpan tersebut. _(Error!)_
- Kucing dan Umpan aman jika ditinggal berduaan (Kucing tidak makan cacing).

**Misi Kamu:**
Pindahkan ketiga bawaan tersebut ke Titik Tujuan dengan selamat tanpa ada yang saling memakan!

---

### Cara Menjawab

Lacak posisi (status) setiap barang di setiap penyeberanganmu.
_Petunjuk: Di langkah pertama, bawalah barang yang menjadi "pusat masalah" agar dua barang yang tersisa aman jika ditinggal._

Gunakan format ini:

- **Status Awal:** Titik Awal = Kucing, Ikan, Umpan | Titik Tujuan = Kosong
- **Langkah 1:** Bawa ... ke Titik Tujuan.
- _(Status: Titik Awal = ..., Titik Tujuan = ...)_

- **Langkah 2:** Kembali ke Titik Awal tanpa membawa apa-apa.
- _(Status: Titik Awal = ..., Titik Tujuan = ...)_

- _(... lanjutkan sampai ketiganya berada di Titik Tujuan dengan selamat)_

Status Awal: Titik Awal = Kucing, Ikan, Umpan | Titik Tujuan = Kosong

Langkah 1: Bawa Ikan ke Titik Tujuan.

(Status: Titik Awal = Kucing,Umpan Titik Tujuan = Ikan)

Langkah 2: Kembali ke Titik Awal tanpa membawa apa-apa.

(Status: Titik Awal = Kucing,Umpan Titik Tujuan = Ikan)

Langkah 3: Bawa Kucing ke Titik Tujuan.

(Status: Titik Awal = Umpan Titik Tujuan = Kucing,Ikan)

Langkah 4: Kembali ke Titik Awal dengan membawa Ikan.

(Status: Titik Awal = Umpan,Ikan Titik Tujuan = Kucing)

Langkah 5: Bawa Umpan ke Titik Tujuan.

(Status: Titik Awal = Ikan Titik Tujuan = Kucing, Umpan)

Langkah 6: Kembali ke Titik Awal tanpa membawa apa-apa.

(Status: Titik Awal = Ikan Titik Tujuan = Kucing, Umpan)

Langkah 7: Bawa Ikan ke Titik Tujuan.

(Status: Titik Awal = 0 Titik Tujuan = Kucing, Umpan, Ikan)
