const numbers = [5, 10, 15, 20, 25];
const sum = numbers.reduce((accumulator, currentval) => {
  console.log(accumulator, currentval);
  return accumulator + currentval;
}, 0);

console.log(sum);
