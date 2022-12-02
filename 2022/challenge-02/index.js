const isLeap = (year) => new Date(year, 1, 29).getDate() === 29;

function countHours(year, holidays) {
  // console.log("isLeap", isLeap(year));
  let hours = 0;
  holidays.forEach((holiday) => {
    const dayDate = new Date(`${holiday}/${year}`);
    const dayOfWeek = dayDate.getDay();

    // console.log({ dayOfWeek });
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      hours += 2;
    }
  });
  // console.log({ hours });
  return hours;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays); // 2 días -> 4 horas extra en el año
