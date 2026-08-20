/** 
### 1. `monthly-revenue-running-total.sql`

**Konteks Bisnis:**
Tim *Finance* sedang menganalisa *cash flow* harian perusahaan. Mereka tidak hanya ingin melihat pendapatan per hari, tetapi juga **Akumulasi Pendapatan (Running Total / Cumulative Sum)** dari awal bulan hingga hari ini (secara berurutan). Laporan ini krusial untuk mengetahui pada tanggal berapa target kuartal perusahaan tercapai.

### 2. SETUP DDL

Jalankan *script* ini di *environment* lokalmu:

```sql
CREATE TABLE daily_revenue (
    id INT PRIMARY KEY,
    transaction_date DATE,
    amount INT
);

INSERT INTO daily_revenue (id, transaction_date, amount) VALUES
(1, '2026-08-01', 100),
(2, '2026-08-02', 150),
(3, '2026-08-03', 200),
(4, '2026-08-04', 50);

```

### 3. ANALISIS TEKNIS LANGSUNG

* **Struktur:** Tabel tunggal `daily_revenue` yang mencatat pendapatan harian.
* **Logika Relasional:** Untuk menghitung *Running Total* pada tanggal 3 Agustus, kita harus menjumlahkan *amount* dari tanggal 1, 2, dan 3. Secara konseptual di Fase 1, ini berarti untuk setiap baris "Hari Ini", kita harus melakukan *Self-Join* ke tabel yang sama untuk mengambil semua baris "Hari Ini dan Masa Lalu", lalu menjumlahkannya.
* **Tantangan Sistem:** Fungsi agregasi `SUM()` biasa akan mengompresi seluruh tabel menjadi satu baris. Kita membutuhkan akumulasi per baris waktu.

### 4. SIMULASI DATA MANUAL & CONTOH OUTPUT PER TAHAP

**Contoh Output Fase 1 - TAHAP 1 (Proyeksi Self-Join):**
Sebelum kita menjumlahkan, kita harus memetakan memori secara vertikal. Setiap `current_date` (Hari Ini) harus digabungkan dengan semua `past_date` (Hari Masa Lalu) yang tanggalnya lebih kecil atau sama dengan (`<=`) hari ini.

| current_date | current_amount | past_date | past_amount |
| --- | --- | --- | --- |
| 2026-08-01 | 100 | 2026-08-01 | 100 |
| 2026-08-02 | 150 | 2026-08-01 | 100 |
| 2026-08-02 | 150 | 2026-08-02 | 150 |
| 2026-08-03 | 200 | 2026-08-01 | 100 |
| 2026-08-03 | 200 | 2026-08-02 | 150 |
| 2026-08-03 | 200 | 2026-08-03 | 200 |
| *(Perhatikan bagaimana data tanggal 3 Agustus menduplikasi dirinya sebanyak 3 kali untuk menangkap data dari tanggal 1, 2, dan 3)*. |  |  |  |

**Contoh Output Fase 1 - TAHAP 2 (Final):**
Setelah bentuk memori Tahap 1 terbentuk, kita melakukan `GROUP BY` pada `current_date` dan men-`SUM(past_amount)`.

| transaction_date | daily_amount | running_total |
| --- | --- | --- |
| 2026-08-01 | 100 | 100 |
| 2026-08-02 | 150 | 250 |
| 2026-08-03 | 200 | 450 |
| 2026-08-04 | 50 | 500 |

---

### 5. FASE 1: PENYELESAIAN DASAR (Konvensional)

Kita mulai dengan merangkai logika *Self-Join* yang berlipat ganda seperti pada visualisasi Tahap 1. Ini akan menguji pemahaman logikamu tentang ketidaksamaan (inequality) pada klausa `JOIN`.

**Tugas FASE 1 - TAHAP 1:**
Tulis *query* `SELECT` yang melakukan `INNER JOIN` tabel `daily_revenue` (alias `a` sebagai Hari Ini) ke tabel `daily_revenue` (alias `b` sebagai Masa Lalu).

1. Gunakan kondisi `JOIN`: Tanggal di tabel `a` harus **lebih besar atau sama dengan (>=)** tanggal di tabel `b`.
2. Panggil kolom berikut pada klausa `SELECT`:
* `a.transaction_date` (alias `current_date`)
* `a.amount` (alias `current_amount`)
* `b.transaction_date` (alias `past_date`)
* `b.amount` (alias `past_amount`)


3. Urutkan hasilnya berdasarkan `a.transaction_date` lalu `b.transaction_date`.

Silakan kirimkan kueri Fase 1 - Tahap 1 milikmu untuk dievaluasi.
*/

select * from daily_revenue


# step 1
SELECT 
d.transaction_date as current_date, 
d.amount as current_amount,
self_join.transaction_date as past_date,
self_join.amount as past_amount
from daily_revenue 
as d INNER JOIN daily_revenue self_join on d.transaction_date >= self_join.transaction_date
order by d.transaction_date, self_join.transaction_date

# step 2
SELECT 
d.transaction_date, 
d.amount as daily_amount,
SUM(self_join.amount) as running_total
from daily_revenue 
as d INNER JOIN daily_revenue self_join on d.transaction_date >= self_join.transaction_date
GROUP BY d.transaction_date, daily_amount
ORDER BY d.transaction_date


# optimazion

# step 1
SELECT 
transaction_date,
amount,
sum(amount) over() as grand_total
from daily_revenue

# step 2
SELECT 
transaction_date, 
amount,
sum(amount) over(ORDER BY transaction_date) as running_total
from daily_revenue 
ORDER BY transaction_date