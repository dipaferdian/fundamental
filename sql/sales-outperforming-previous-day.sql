/** 
---

### 1. JUDUL SOAL

**"Sales Outperforming Previous Day" (Kinerja Penjualan Harian)**

### 2. SETUP DDL

Jalankan *script* ini di *environment* lokalmu. Kita memiliki tabel `daily_sales` yang mencatat total pendapatan harian sebuah toko *e-commerce*.

```sql
CREATE TABLE daily_sales (
    id INT PRIMARY KEY,
    sale_date DATE,
    revenue INT
);

INSERT INTO daily_sales (id, sale_date, revenue) VALUES
(1, '2026-08-01', 1000),
(2, '2026-08-02', 1500),
(3, '2026-08-03', 1200),
(4, '2026-08-04', 1800),
(5, '2026-08-05', 1800),
(6, '2026-08-06', 2000);

```

### 3. ANALISIS TEKNIS

**Target Bisnis:** Tim *Sales* meminta kamu untuk mencari semua tanggal (`sale_date`) di mana pendapatan (`revenue`) hari tersebut **lebih tinggi** secara ketat (>) dibandingkan pendapatan pada hari sebelumnya.

**Logika Relasional:**
Mesin SQL mengevaluasi data secara horizontal (per baris individual). Ia tidak bisa secara otomatis "melihat ke atas" untuk membandingkan pendapatan hari ini dengan kemarin di klausa `WHERE`.

Untuk mengatasi ini, kita harus membuat **proyeksi kolom baru** yang menarik data `revenue` dari baris sebelumnya (H-1) dan meletakkannya sejajar dengan baris saat ini.
Jika sebelumnya kita menyinggung `LEAD()` untuk melihat data di depan (H+1), maka untuk melihat data di belakang/sebelumnya (H-1), kita menggunakan fungsi **`LAG()`**.

Sintaksnya: `LAG(kolom_target, offset) OVER (ORDER BY kolom_pengurut)`

### 4. SIMULASI DATA MANUAL

Jika kita menggunakan fungsi `LAG(revenue, 1) OVER (ORDER BY sale_date)`, *database* akan mengalokasikan memori seperti ini:

| sale_date | revenue | prev_day_revenue (Data H-1 yang ditarik) | Evaluasi Logika |
| --- | --- | --- | --- |
| 2026-08-01 | 1000 | NULL *(Tidak ada data sblm tgl 1)* | Abaikan |
| 2026-08-02 | **1500** | **1000** | **Ambil!** (1500 > 1000) |
| 2026-08-03 | 1200 | 1500 | Coret (1200 < 1500) |
| 2026-08-04 | **1800** | **1200** | **Ambil!** (1800 > 1200) |
| 2026-08-05 | 1800 | 1800 | Coret (1800 == 1800) |
| 2026-08-06 | **2000** | **1800** | **Ambil!** (2000 > 1800) |

Setelah tabel memiliki bentuk seperti di atas, melakukan *filtering* akan menjadi operasi yang sangat trivial di Tahap 2 nanti.

### 5. TAHAP 1: Membangun Proyeksi H-1

Seperti biasa, JANGAN gunakan klausa `WHERE` atau memikirkan filter hasil akhirnya dulu. Kita harus memastikan *engine* merender proyeksinya dengan benar.

**Tugas TAHAP 1:**
Tulis *query* `SELECT` dari tabel `daily_sales` yang menghasilkan 3 kolom berikut:

1. `sale_date`
2. `revenue`
3. Kolom baru ber-alias `prev_day_revenue` yang nilainya diambil dari `revenue` satu baris sebelumnya, diurutkan secara kronologis berdasarkan `sale_date`. Gunakan fungsi `LAG()`.

Silakan tulis *query* untuk Tahap 1 ini. Jika *projection*-nya sempurna, kita akan bungkus ke dalam CTE untuk memfilternya!
*/

# step 1
select sale_date, revenue, LAG(revenue, 1) OVER (ORDER BY sale_date) as prev_day_revenue from daily_sales

# step 2
with sales_projection as (
    select sale_date, revenue, LAG(revenue, 1) OVER (ORDER BY sale_date) as prev_day_revenue from daily_sales
)
SELECT sale_date from sales_projection
where revenue > prev_day_revenue


