Semangat pantang menyerah yang luar biasa! Mari kita hadapi teka-teki Tahap 1 berikutnya.

Jika sebelumnya kamu mengelola batasan kapasitas (air) dan batasan penumpukan waktu (jembatan), kali ini kita akan mengelola **Batasan Kondisional (Conditional Constraint)**. Dalam pemrograman, ini melatih logikamu dalam membuat perintah `IF - ELSE` yang sangat ketat agar programmu tidak _crash_ atau menghasilkan _error_ fatal.

### 🧟 Teka-teki: 3 Penjelajah dan 3 Zombie

Terdapat **3 Penjelajah (P)** dan **3 Zombie (Z)** yang terjebak di Sisi Awal sebuah sungai. Mereka semua harus menyeberang ke Sisi Tujuan menggunakan satu-satunya perahu kayu yang ada di sana.

**Aturan Main & Batasan:**

1. **Kapasitas Perahu:** Maksimal hanya bisa diisi oleh **2 makhluk** (boleh Penjelajah saja, Zombie saja, atau campuran).
2. **Syarat Bergerak:** Perahu tidak bisa bergerak sendiri. Harus ada **minimal 1 makhluk** di dalam perahu untuk mendayung (Zombie di sini pintar, mereka bisa mendayung perahu).
3. **Batasan Kritis (Constraint Kematian):** Di sisi sungai mana pun (baik di Sisi Awal maupun Sisi Tujuan), jumlah Zombie **TIDAK BOLEH LEBIH BANYAK** dari jumlah Penjelajah.

- _Contoh Bahaya:_ Jika di Sisi Awal ada 2 Zombie dan 1 Penjelajah, maka Penjelajah diserang. Game Over!
- _Contoh Aman:_ Jika di Sisi Tujuan ada 3 Zombie dan 0 Penjelajah. Ini aman, karena tidak ada Penjelajah yang bisa diserang. Jika jumlahnya sama (2 Zombie, 2 Penjelajah), ini juga aman.

**Misi Kamu:**
Pindahkan semua makhluk (3P dan 3Z) ke Sisi Tujuan tanpa melanggar batasan kritis sama sekali.

---

### Cara Menjawab (Pelacakan Status Bersyarat)

Gunakan inisial **P** untuk Penjelajah dan **Z** untuk Zombie. Lacak status mereka setelah setiap perjalanan (bolak-balik). _Petunjuk: Di awal permainan, jangan kirim 2 Penjelajah sekaligus, karena nanti 1 Penjelajah yang tersisa di Sisi Awal akan dikeroyok 3 Zombie._

Silakan tuliskan dekomposisi langkahmu:

- **Status Awal:** Sisi Awal = 3P, 3Z | Sisi Tujuan = Kosong
- **Langkah 1:** ... dan ... menyeberang ke Sisi Tujuan.
- _(Status: Sisi Awal = ..., Sisi Tujuan = ...)_

- **Langkah 2:** ... kembali membawa perahu ke Sisi Awal.
- _(Status: Sisi Awal = ..., Sisi Tujuan = ...)_

- _(... dan seterusnya sampai 3P dan 3Z berada di Sisi Tujuan)_

Status Awal: Sisi Awal = 3P, 3Z | Sisi Tujuan = Kosong

Langkah 1: 2Z menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = 3P,1Z Sisi Tujuan = 2Z, 0P)

Langkah 2: 1Z kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = 3P,2Z Sisi Tujuan = 1Z, 0P)

Langkah 3: 2Z menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = 3P,0Z Sisi Tujuan = 3Z, 0P)

Langkah 4: 1Z kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = 3P,1Z Sisi Tujuan = 2Z, 0P)

Langkah 5: 2P menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = 1P,1Z Sisi Tujuan = 2Z, 2P)

Langkah 6: 1P dan 1Z kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = 2P,2Z Sisi Tujuan = 1Z, 1P)

Langkah 7: 2P menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = 0P,2Z Sisi Tujuan = 1Z, 3P)

Langkah 8: 1Z kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = 0P,3Z Sisi Tujuan = 0Z, 3P)

Langkah 9: 2Z menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = 0P,1Z Sisi Tujuan = 2Z, 3P)

Langkah 10: 1Z kembali membawa perahu ke Sisi Awal.

(Status: Sisi Awal = 0P,2Z Sisi Tujuan = 1Z, 3P)

Langkah 11: 2Z menyeberang ke Sisi Tujuan.

(Status: Sisi Awal = 0P,0Z Sisi Tujuan = 3Z, 3P)
