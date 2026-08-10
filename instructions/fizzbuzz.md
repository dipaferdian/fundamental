### 🐲 Tahap 3 - Boss Level: Ujian Wawancara "FizzBuzz"

Kamu sudah menguasai Variabel, Kondisi, Perulangan, Return, dan Modulo. Sekarang, saya akan memberikanmu ujian legendaris.

Tantangan ini bernama **FizzBuzz**. Ini adalah tes yang digunakan oleh perusahaan teknologi di seluruh dunia (termasuk Google dan Microsoft) untuk menyaring calon _programmer_ pemula saat wawancara kerja. Banyak yang gagal di sini karena terjebak oleh **Urutan Kondisi**.

**Skenario: Mesin Pengganti Kata**
Kamu memiliki sebuah daftar angka: `[1, 2, 3, 4, 5, 15]`

Mesinmu harus melakukan iterasi (mengecek satu per satu) angka tersebut dengan aturan berikut:

1. Jika angka habis dibagi 3 (`% 3 == 0`), cetak kata **"Fizz"**
2. Jika angka habis dibagi 5 (`% 5 == 0`), cetak kata **"Buzz"**
3. 🚨 **PENTING:** Jika angka habis dibagi 3 **DAN** habis dibagi 5, cetak kata **"FizzBuzz"**
4. Jika tidak memenuhi semuanya, cetak angka aslinya saja.

_(Catatan: Hati-hati dengan urutan pengecekan (IF) milikmu. Komputer mengecek dari atas ke bawah. Coba pikirkan, angka 15 itu habis dibagi 3, tapi juga habis dibagi 5. Bagaimana caranya agar mesin mencetak "FizzBuzz" pada angka 15, bukan "Fizz" saja atau "Buzz" saja?)_

1. iterasi daftar angka
2. jika element % 3 == 0 dan element % 5 == 0
3. maka return "FizzBuzz"
4. jika jika element % 3 == 0
5. maka return "Fizz"
6. jika element % 5 == 0
7. maka return "Buzz"
8. jika tidak ada, maka return element
