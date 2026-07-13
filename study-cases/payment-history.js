function compute(transactionHistories) {
  let total = 0;
  for (const transactionHistory of transactionHistories) {
    if (transactionHistory.jenisTransaksi !== "QRIS") continue;

    total += transactionHistory.nominal;
  }

  return total;
}

console.log(
  compute([
    { namaMerchant: "Warteg 3 Dara", jenisTransaksi: "QRIS", nominal: 25000 },
    {
      namaMerchant: "Budi (Teman)",
      jenisTransaksi: "Transfer",
      nominal: 50000,
    },
    {
      namaMerchant: "Ayam Bakar Berkah Bu Rita",
      jenisTransaksi: "QRIS",
      nominal: 35000,
    },
  ]),
);

console.log(
  compute([
    { namaMerchant: "Algo Parung", jenisTransaksi: "QRIS", nominal: 150000 },
    {
      namaMerchant: "Listrik PLN",
      jenisTransaksi: "Virtual Account",
      nominal: 200000,
    },
    {
      namaMerchant: "Ayam Penyet Cabe Ijo",
      jenisTransaksi: "QRIS",
      nominal: 28000,
    },
  ]),
);
