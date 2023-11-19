//15f move this function into different file and run it using default export
function isWeekend(date) {
  const dayOfTheWeek = date.format("dddd");
  return dayOfTheWeek === "Sunday" || dayOfTheWeek === "Saturday";
}
export default isWeekend;
