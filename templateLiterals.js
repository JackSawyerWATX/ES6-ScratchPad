const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  arr.forEach(item => {
    failureItems.push(`<li class="text-warning">${item}</li>`)
  })
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

// Explanation:
// The forEach method is used to iterate through the arr
// (which is result.failure in this case).

// For each item in the array, we generate a list item string
// using template literals and push it into the failureItems array.

// Finally, the function returns the failureItems array.



const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Jim Rockford", 36, "male"));

// Explanation:
// The function createPerson takes name, age, and gender as parameters 
// and returns an object containing those values.

// Using shorthand object property notation (name, age, gender), 
// JavaScript automatically uses the parameter names as the keys 
// for the object.


class Vegetable {
  constructor(name) {
    this.name = name
  }
}

const carrot = new Vegetable('Carrot');
console.log(carrot.name);

