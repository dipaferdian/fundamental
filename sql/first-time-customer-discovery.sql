/**
Tampaknya kamu terlalu bersemangat. Saya belum memberikan spesifikasi soal dan struktur datanya berdasarkan aturan *prompt* yang baru kamu tetapkan. Sebagai *Engineer*, jangan pernah mengeksekusi sesuatu sebelum *Requirement* dan *Design System*-nya jelas.

Mari kita mulai studi kasus kita dengan format yang benar.

### 1. `first-time-customer-discovery.sql`

**Konteks Bisnis:**
Tim *Marketing* ingin menjalankan kampanye *email* spesifik berdasarkan "Barang pertama kali yang dibeli" oleh setiap pelanggan untuk melihat pola retensi. Tabel operasional kita mencatat semua riwayat pembelian. Tugasmu adalah mengekstrak ID pelanggan, tanggal transaksi paling awal, dan **nama barang** dari transaksi pertama tersebut.

### 2. SETUP DDL

Jalankan *script* ini di *environment* lokalmu untuk membuat data sampel:

```sql
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    item_name VARCHAR(50)
);

INSERT INTO Orders (order_id, customer_id, order_date, item_name) VALUES
(101, 1, '2026-08-01', 'Laptop'),
(102, 2, '2026-08-02', 'Mouse'),
(103, 1, '2026-08-03', 'Keyboard'),
(104, 3, '2026-08-04', 'Monitor'),
(105, 2, '2026-08-05', 'Headset');

```

### 3. ANALISIS TEKNIS LANGSUNG

* **Struktur:** Tabel tunggal `Orders` dengan *Primary Key* `order_id`. Terdapat relasi logis *One-to-Many* di mana satu `customer_id` bisa melakukan banyak pesanan.
* **Logika Agregasi:** Kita perlu mencari nilai minimum dari `order_date` untuk setiap `customer_id`.
* **Tantangan Sistem:** Jika kamu menulis `SELECT customer_id, MIN(order_date), item_name GROUP BY customer_id`, *database engine* akan langsung melempar *error*. SQL tidak mengizinkan pemanggilan kolom *non-aggregated* (`item_name`) jika tidak dimasukkan ke dalam klausa `GROUP BY`. Oleh karena itu, di Fase 1 ini, kita membutuhkan dua tahap penyelesaian (Subquery + JOIN).

### 4. SIMULASI DATA MANUAL & CONTOH OUTPUT PER TAHAP

**Contoh Output Fase 1 - TAHAP 1:**
Kita murni melakukan agregasi terlebih dahulu untuk mendapatkan tanggal pesanan pertama per pelanggan.

| customer_id | first_order_date |
| --- | --- |
| 1 | 2026-08-01 |
| 2 | 2026-08-02 |
| 3 | 2026-08-04 |

**Contoh Output Fase 1 - TAHAP 2 (Final):**
Hasil dari Tahap 1 digunakan sebagai peta/filter untuk di-JOIN kembali ke tabel `Orders` asli demi mendapatkan `item_name`.

| customer_id | order_date | item_name |
| --- | --- | --- |
| 1 | 2026-08-01 | Laptop |
| 2 | 2026-08-02 | Mouse |
| 3 | 2026-08-04 | Monitor |

---

### 5. FASE 1: PENYELESAIAN DASAR (Konvensional)

Kita mulai dari arsitektur paling dasar. Jangan pikirkan `item_name` dan klausa `JOIN` terlebih dahulu. Fokus pada *output* Tahap 1 di atas.

**Tugas FASE 1 - TAHAP 1:**
Tulis *query* menggunakan klausa `GROUP BY` pada tabel `Orders`.

1. Panggil `customer_id`.
2. Gunakan fungsi agregasi untuk mencari tanggal paling awal dari `order_date` dan beri alias `first_order_date`.

Silakan tulis *query* untuk Fase 1 - Tahap 1, dan saya akan melakukan *Code Review*.
*/


SELECT * from orders;

# step 1
SELECT customer_id, order_date, item_name from orders 
where (customer_id, order_date) IN (
    SELECT subquery_orders.customer_id, min(subquery_orders.order_date) from orders as subquery_orders
    GROUP BY subquery_orders.customer_id
)

# step 2

# optimazion

# step 1
SELECT customer_id, order_date, item_name, ROW_NUMBER() OVER(
    PARTITION BY customer_id order by order_date
) as rn
from orders

# step 2
with customer_journey as (
    SELECT customer_id, order_date, item_name, ROW_NUMBER() OVER(
    PARTITION BY customer_id order by order_date
    ) as rn
    from orders
)
SELECT customer_id, order_date, item_name from customer_journey
WHERE rn = 1