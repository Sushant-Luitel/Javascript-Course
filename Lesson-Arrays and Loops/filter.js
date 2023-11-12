// const numbers = [5, 10, 15, 20, 25, 30];
// const greaterThanFive = numbers.filter((num) => {
//   return num > 5;
// });

// console.log(greaterThanFive);
// const product = [
//   {
//     name: "football",
//     price: 1500,
//   },
//   {
//     name: "basketball",
//     price: 1000,
//   },
//   {
//     name: "volleyball",
//     price: 800,
//   },
// ];

// const cheapItems = product.filter((product) => {
//   return product["price"] <= 1000;
// });

// console.log(cheapItems);

//chaining

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredItems = numbers
  .map((num) => num * num)
  .filter((num) => num % 3 === 0);

console.log(filteredItems);
