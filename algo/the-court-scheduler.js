/**
---

### 📜 Soal: Sistem Validasi Booking Lapangan (The Court Scheduler)

**Skenario:**
Kamu adalah *Backend Engineer* untuk sebuah aplikasi penyewaan lapangan olahraga. Lapangan ini disewakan per jam. Setiap kali ada pelanggan baru yang ingin menyewa (misalnya jam 17:00), sistem harus mengecek daftar jam yang sudah dipesan oleh orang lain pada hari itu.

**Tugasmu:**
Buat sebuah fungsi `compute(bookingSchedule, newSchedule)` yang mengecek apakah jam yang diminta pelanggan (`newSchedule`) sudah ada di dalam jadwal yang terisi (`bookingSchedule`).

* Jika sudah ada, tolak dengan pesan `"Jadwal Bentrok"`.
* Jika belum ada, terima dengan pesan `"Tersedia"`.

**🧪 Test Cases:**

* **Kasus 1 (Berhasil):** Jadwal terisi `[11, 12, 14]`, pelanggan baru mau *booking* jam `17`.
* *Output:* `"Tersedia"` (Karena jam 17 kosong).


* **Kasus 2 (Gagal):** Jadwal terisi `[11, 12, 14]`, pelanggan baru mau *booking* jam `12`.
* *Output:* `"Jadwal Bentrok"` (Karena jam 12 sudah dipakai orang).

---
 */

function compute(bookingSchedule, newSchedule) {
  for (const schedule of bookingSchedule) {
    if (schedule === newSchedule) {
      return "Jadwal Bentrok";
    }
  }

  return "Tersedia";
}

console.log(compute([11, 12, 14], 17));
