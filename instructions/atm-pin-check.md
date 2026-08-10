### 🛡️ Tahap 2 - Level 6: Sistem Keamanan PIN (Loop & Break)

Kamu sudah bisa Iterasi (mengulang sampai data habis). Tapi, bagaimana jika kita ingin komputer **berhenti mengulang lebih awal** karena tujuannya sudah tercapai atau batasnya sudah habis?

Dalam pemrograman, kita bisa menghentikan paksa sebuah perulangan di tengah jalan.

**Skenario: Sistem Blokir ATM**
Seorang nasabah sedang memasukkan PIN ATM. PIN yang benar adalah `123456`.
Sistem ATM hanya memberikan kesempatan **maksimal 3 kali percobaan**. Jika salah 3 kali, kartu diblokir.

Daftar percobaan yang diketik nasabah: `[111111, 222222, 123456]`

**Tugas Kamu:**
Buat _Pseudocode_ untuk mengecek daftar percobaan PIN tersebut satu per satu dari kiri ke kanan.

1. Jika PIN salah, lanjut cek PIN berikutnya.
2. Jika PIN **benar**, akses berhasil dan **komputer harus berhenti mengecek** (tidak perlu mengecek PIN selanjutnya, kalau ada).
3. Jika komputer sudah mengecek sebanyak **3 kali** dan salah semua, tampilkan "Kartu Diblokir".

_(Petunjuk: Kamu butuh variabel untuk menghitung jumlah percobaan. Gunakan kata "HENTIKAN PERULANGAN" jika PIN sudah cocok)._

1. buat 2 variable jumlah_percobaan dengan nilai 0, maksimal_percobaan dengan nilai 3
2. lakukan iterasi jika element tidak sama dengan input, maka tambahkan jumlah_percobaan = jumlah_percobaan + 1
3. jika jumlah_percobaan == maksimal_percobaan, maka kembalikan "Kartu Diblokir"
4. jika pin sesuai maka kembalikan "benar"
