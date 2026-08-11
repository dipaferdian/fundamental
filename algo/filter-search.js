function compute(products, key) {
  let result = new Array();
  for (const product of products) {
    if (
      typeof key === "string" &&
      product.nama.toLocaleLowerCase().includes(key.toLowerCase())
    ) {
      result.push(product);
    }

    if (Number.isFinite(key) && product.harga === key) {
      result.push(product);
    }
  }

  return result;
}

console.log(
  compute(
    [
      { nama: "Kemeja Pria", harga: 50000 },
      { nama: "Topi Pria", harga: 20000 },
      { nama: "Sepatu Wanita", harga: 100000 },
    ],
    "pria",
  ),
);
