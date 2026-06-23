function compute(params) {
  let antrean = [];

  if (params.length <= 1) return [];

  for (const element of params) {
    if (element === "Selesai") {
      antrean.shift();
    } else {
      antrean.push(element.replace(/Masuk: /, ""));
    }
  }
  return antrean;
}

console.log(compute(["Masuk: Mie Level 1", "Selesai", "Selesai"]));
