// es6 rest parameter

function isPassed(...userMarks) {
  /* userMarks = [50, 60, 40, 80, 30, 50, 50, 50] */
  /* userMarks = [40, 40, 40, 40, 30] */

  let functionForEachMark = function (mark) {
    if (mark >= 50) {
      console.log("darchwa");
    } else if (mark < 50) {
      console.log("darnachwa");
    }
  };
  userMarks.forEach(functionForEachMark);
}

console.log(isPassed(50, 60, 40, 80, 30, 50, 50, 50));
console.log(isPassed(40, 40, 40, 40, 30));

let firstArray = [1, 2, 3];

console.log(firstArray);
console.log(...firstArray);

let ages = [18, 20, 15, 30, 12, 11, 50];
// Check to see if they can have a driving lisence

ages.forEach(function myFUnction(age) {
  console.log(age);

  if (age < 18) {
    console.log("darnachwa");
  } else {
    console.log("darchaw");
  }
});
