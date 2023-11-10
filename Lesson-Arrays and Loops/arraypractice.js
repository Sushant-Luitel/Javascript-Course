// const myArray = [10, 25, 47];
// myArray.splice(2, 1, "sushant");
// console.log(myArray);

//replace last element of an array

// function replaceLastElemet(array, replaceWith) {
//   lastIndex = array.length - 1;
//   array.splice(lastIndex, 1, replaceWith);
//   console.log(array);
// }

// replaceLastElemet([1, 5, 7, 9, 10, 6], "sushant");

// //return last element of an array

// function lastValueArray(array) {
//   lastValueIndex = array.length - 1;
//   lastValue = array[lastValueIndex];
//   console.log(lastValue);
// }

// lastValueArray([20, 30, 55, 65, 70]);

// // swap first and last element of an array

// function swapArray(array) {
//   const lastIndex = array.length - 1;
//   const firstIndex = 0;

//   [array[firstIndex], array[lastIndex]] = [array[lastIndex], array[firstIndex]];
//   console.log(array);
// }

// swapArray([1, 2, 3, 4]);

// console.log(typeof [1, 22]);

// arrarFromString = Array.from("sushant");
// console.log(arrarFromString);

// const myArray = [1, 2, 3, 4, 5, 6];
// slicedArray1 = myArray.slice(-4, 5);
// console.log(slicedArray1);

// function lastValueArray(array) {
//   console.log(array.pop());
// }

// lastValueArray([20, 30, 55, 65, 70]);

// const myArray = [1, 2, 3, 5];
// console.log(myArray.unshift(35));
// console.log(myArray);

// const array1 = ["sushant", "karishma"];
// const array2 = ["luitel", "paudel", ["kaushika", "atreya"]];
// const newArray = [...array1, ...array2.flat(3)];
// console.log(newArray);

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArray.slice(3, 5));
// console.log(myArray.splice(3, 5));

// console.log(myArray.includes(0, 2));
console.log(myArray.length);
myArray.length = 15;
console.log(myArray);
