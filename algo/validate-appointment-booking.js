function compute(bookingSchedule, newSchedule) {
  for (const schedule of bookingSchedule) {
    if (schedule === newSchedule) {
      return "Jadwal Bentrok";
    }
  }

  return "Tersedia";
}

console.log(compute([11, 12, 14], 17));
