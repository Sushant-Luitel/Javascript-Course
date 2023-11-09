function increaseby1(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  return array;
}

console.log(increaseby1([5, 10, 15, 20, 25]));

newArray = [1, 2, 3];
let secondElement = newArray[2];
secondElement = 5;
console.log(newArray);
