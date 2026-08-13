-- Active: 1786503636234@@127.0.0.1@5432@postgres@public

/*
Perhatikan baik-baik. Kasus ini sering kali menjebak *engineer* pemula ketika ada lebih dari satu karyawan yang memiliki gaji tertinggi yang sama di satu departemen.

### 1. SETUP DDL & DML

Silakan jalankan *script* ini di *environment* lokalmu untuk membuat tabel dan memasukkan data sampel:

```sql
CREATE TABLE Department (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE Employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Department(id)
);

INSERT INTO Department (id, name) VALUES
(1, 'IT'),
(2, 'Sales');

INSERT INTO Employee (id, name, salary, department_id) VALUES
(1, 'Joe', 70000, 1),
(2, 'Jim', 90000, 1),
(3, 'Henry', 80000, 2),
(4, 'Sam', 60000, 2),
(5, 'Max', 90000, 1);

```

### 2. ANALISIS TEKNIS LANGSUNG

* **Struktur:** Kita memiliki dua tabel. `Department` dengan PK `id`, dan `Employee` dengan PK `id` serta FK `department_id` yang merujuk ke tabel `Department`.
* **Tujuan:** Kita ingin menampilkan nama Departemen, nama Karyawan, dan Gajinya. Syaratnya: karyawan tersebut haruslah yang memiliki gaji **paling tinggi** di departemennya masing-masing.
* **Edge Case:** Perhatikan data di atas. Di departemen IT (`department_id = 1`), **Jim** dan **Max** sama-sama memiliki gaji tertinggi yaitu 90.000. Keduanya harus muncul dalam hasil akhir.

### 3. SIMULASI DATA MANUAL

Secara logika himpunan, mesin harus melakukan agregasi per departemen untuk mengetahui nilai maksimum, kemudian mencocokkannya kembali dengan level detail karyawan.

Data yang diharapkan keluar (Target Output):

| Department | Employee | Salary |
| --- | --- | --- |
| IT | Jim | 90000 |
| IT | Max | 90000 |
| Sales | Henry | 80000 |

### 4. PRODUCTIVE STRUGGLE

Ada dua pendekatan teknis utama untuk menyelesaikan ini di SQL. Saya tidak akan memberikan *query*-nya, itu tugasmu.

* **Opsi 1: Pendekatan Agregasi & JOIN (Subquery/IN)**
Kamu bisa membuat *subquery* yang melakukan `GROUP BY department_id` untuk mencari `MAX(salary)`. Kemudian, kamu filter tabel utama `Employee` di mana kombinasi `(department_id, salary)` cocok / ada di dalam hasil *subquery* tersebut, lalu di-JOIN dengan tabel `Department` untuk mengambil nama departemen.
* **Opsi 2: Pendekatan Window Function (CTE)**
Kamu menggunakan fungsi analitik seperti `RANK()` atau `DENSE_RANK()`. Partisi datanya berdasarkan `department_id` (`PARTITION BY`) dan urutkan berdasarkan `salary` menurun (`ORDER BY salary DESC`). Bungkus ini ke dalam CTE (*Common Table Expression*), lalu di *query* utamanya, cukup *filter* yang *rank*-nya = 1.

**Tugasmu:**
Pilih salah satu (atau keduanya jika kamu berani menantang diri sendiri) dan tulis *query*-nya di balasanmu.

Silakan tulis kodemu, dan saya akan lakukan *Code Review*!
*/

SELECT * FROM employee

SELECT * FROM department

/*
 this is stil not efficient
*/

# step 1
SELECT department_id, max(salary) as max_salary
FROM employee
GROUP BY department_id

# step 2
SELECT e.id, e.name as "Employee", e.salary, d.name as "Department"
from employee e
INNER JOIN department d ON e.department_id = d.id
where (e.department_id, e.salary) 
IN (
    SELECT e.department_id, max(salary) as max_salary
FROM employee
GROUP BY department_id
)

/*
 optimization
*/

# step 1
SELECT e.department_id, e.salary, e.name,
dense_rank() OVER (PARTITION by e.department_id ORDER BY e.salary DESC) AS rank
from employee e

# step 2
WITH hihgest_salary AS (
   SELECT e.id, e.department_id, e.salary, e.name,
dense_rank() OVER (PARTITION by e.department_id ORDER BY e.salary DESC) AS rank
from employee e
)
SELECT id, name as "Employee",  salary as "Salary"
FROM hihgest_salary
WHERE rank = 1;

# step 3
WITH hihgest_salary AS (
   SELECT e.id, e.department_id, e.salary, e.name, d.name as department_name,
dense_rank() OVER (PARTITION by e.department_id ORDER BY e.salary DESC) AS rank
from employee e
inner join department d on e.department_id = d.id
)
SELECT id, name as "Employee", department_name as "Department",  salary as "Salary"
FROM hihgest_salary
WHERE rank = 1;