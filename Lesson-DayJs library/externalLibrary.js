import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import isSatSun from "./isWeekend.js";
//15a display five days after today
const today = dayjs();
let deliveryDate = today.add("5", "days");
let dateString = deliveryDate.format("MMMM, D");
console.log(dateString);

//15b display 1 month after today in same format
deliveryDate = today.add("1", "months");
dateString = deliveryDate.format("MMMM, D");
console.log(dateString);

//15c display 1 month before today
deliveryDate = today.subtract("1", "months");
dateString = deliveryDate.format("MMMM, D");
console.log(dateString);

// 15d display todays date  in day of the week format

dateString = today.format("dddd");
console.log(dateString);

console.log(isSatSun(today));
console.log(isSatSun(today.add("1", "days")));
console.log(isSatSun(today.add("6", "days")));
