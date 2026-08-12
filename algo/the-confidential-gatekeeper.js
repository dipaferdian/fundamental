/**
---
### 📜 Soal: Gerbang Dokumen Rahasia (The Confidential Gatekeeper)

**Skenario:**
Kamu adalah seorang *Security Engineer* di sebuah perusahaan teknologi. Perusahaan memiliki portal HRD di mana karyawan bisa melihat slip gaji. Karena ini data sensitif, sistem keamanan harus sangat ketat.

**Aturan Akses (The Rules):**
Sebuah dokumen rahasia hanya boleh dibaca jika memenuhi **salah satu** dari syarat berikut:

1. Orang yang mencoba membuka adalah **Pemilik Asli** dari dokumen tersebut (ID Pengguna sama dengan ID Pemilik Dokumen).
2. Orang yang mencoba membuka memiliki jabatan sebagai **"admin"** (Admin berhak melihat semua dokumen siapa pun).

Jika tidak memenuhi satupun syarat di atas, tendang mereka keluar!

**Tugasmu:**
Buat fungsi `compute(userLog, secretDocument)` yang memvalidasi hak akses. Kembalikan `"Akses Diizinkan"` jika valid, dan `"Akses Ditolak"` jika mereka penyusup.

**🧪 Test Cases:**

* **Kasus 1:** Karyawan biasa (ID 100) mencoba mengintip gaji milik Karyawan ID 101. ➔ `"Akses Ditolak"`
* **Kasus 2:** Karyawan biasa (ID 101) melihat slip gajinya sendiri. ➔ `"Akses Diizinkan"`
* **Kasus 3:** HRD/Admin (ID 102) memeriksa slip gaji milik Karyawan ID 101. ➔ `"Akses Diizinkan"`
---
 */

function compute(userLog, secretDocument) {
  if (userLog.id != secretDocument.ownerId && userLog.role != "admin")
    return "Akses Ditolak";

  return "Akses Diizinkan";
}

console.log(
  compute({ id: 100, role: "user" }, { ownerId: 101, isi: "Gaji Karyawan" }),
);

console.log(
  compute({ id: 101, role: "user" }, { ownerId: 101, isi: "Gaji Karyawan" }),
);

console.log(
  compute({ id: 102, role: "admin" }, { ownerId: 101, isi: "Gaji Karyawan" }),
);
