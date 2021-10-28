let array = ["name", "age"];

array[1] = "new name";

// Array iteration: 8 methods

// forEach : executes a provided function once for each array element.
let myFucntion = function () {};

let myObject = {
  name: "Hama",
  age: "zor",
};

let myArray = ["0", "1", 2, {}];

myArray[1].forEach((item) => {
  console.log(item);
});

// map : creates a new array with the results of calling a provided function on every element in the calling array.
const smallArray = [1, 2, 3];
const doubled = smallArray.map(function (item) {
  return item * 2;
});
console.log(doubled);

// filter
const ints = [1, 2, 3];

const evens = ints.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);

// reduce
const sum = [100, 2, 3, 4, 5].reduce(function (result, item) {
  return result + item;
});

console.log(sum);

// some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});
console.log(hasNegativeNumbers);

// every
const allPositiveNumbers = [1, 2, -3].every(function (item) {
  return item > 0;
});
console.log(allPositiveNumbers);

// find
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const found = objects.find(function (item) {
  return item.id === "b";
});
console.log(found);

// find index
const objects2 = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects2.findIndex(function (item) {
  return item.id === "b";
});
console.log(foundIndex);

/* bonus: object.keys */
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// es6 rest parameter
function fun(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15

/* Spread Operator */




// Merge Array
[...array1, ...array2];

// Clone Array
[...array3];
