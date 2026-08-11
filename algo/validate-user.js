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
