const { check, skipTest, runTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with skipTest.
*/
//Exercise 1
function countProperties(obj) {
  // This function should take an object as its argument and return the total number of properties it contains
  return Object.keys(obj).length;
}

runTest("countProperties() counts the number of key-value pairs for a given object", function () {
  check(countProperties({})).isEqualTo(0);
  check(countProperties({ name: "shaq" })).isEqualTo(1);
  check(countProperties({ name: "shaq", job: "tutor", city: "Manchester" })).isEqualTo(3);
});

//Exercise 2
function isEmptyArray(arr) {
  // This function should take an array as an argument and return true if the array is empty, and false otherwise

  return arr.length === 0;
}

runTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray([])).isEqualTo(true);
  check(isEmptyArray(["a", "b", "c", "d"])).isEqualTo(false);
  check(isEmptyArray(["a"])).isEqualTo(false);
});

//Exercise 3
function createUserString(user) {
  /*
  This function should take an object representing a user's details as its argument
  A user object will take this form:
  {
    name: "Mitch",
    age: 30,
    language: "JavaScript"
  }
  You should return a string consisting of these details in this form:
  "name: Mitch, age: 27, language: Javascript"
  This is a good use case for String Template Literals:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  */

  return `name: ${user.name}, age: ${user.age}, language: ${user.language}`;
}

runTest("createUserString() will create a message from an details object", function () {
  check(createUserString({ name: "Mitch", age: 30, language: "Javascript" })).isEqualTo(
    "name: Mitch, age: 30, language: Javascript"
  );
  check(createUserString({ name: "Anat", age: 24, language: "Ruby" })).isEqualTo("name: Anat, age: 24, language: Ruby");
});

//Exercise 4
function howManyArguments(...args) {
  // This function should take any number of arguments and return the number of arguments passed into the function
  // HINT: For this one you should look up 'rest parameters' online - MDN Web Docs and devdocs are excellent sources of JavaScript documentation

  return args.length;
}

runTest("howManyArguments() returns the number of items passed on a single call", function () {
  check(howManyArguments("a", "b", "c")).isEqualTo(3);
  check(howManyArguments()).isEqualTo(0);
  check(howManyArguments(1, 2, 3, 4, 5)).isEqualTo(5);
  check(howManyArguments("the", "meaning", "of", "life", "is", 42)).isEqualTo(6);
});

//Exercise 5
function updateCoinMachine(coinMachine, coin) {
  /*
  This function should take an object representing a coin machine and a string representing a coin as its arguments
  A coinMachine object will take this form:
  {
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0
  }
  You should 'add the provided coin to the machine' by altering the associated property and return the updated coinMachine
  */

  coinMachine[coin]++;
  return coinMachine;
}

runTest("updateCoinMachine() will create a message from an details object", function () {
  check(updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "1p")).isEqualTo({
    "1p": 1,
    "2p": 0,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "2p")).isEqualTo({
    "1p": 0,
    "2p": 1,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 0, "10p": 0 }, "2p")).isEqualTo({
    "1p": 0,
    "2p": 4,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "5p")).isEqualTo({
    "1p": 0,
    "2p": 3,
    "5p": 11,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "10p")).isEqualTo(
    { "1p": 0, "2p": 3, "5p": 10, "10p": 1 },
    "5p"
  );
});

//Exercise 7
function updatePosition(coords, direction) {
  /*
  This function should take an array representing coordinates - an x position and a y position - and a string representing a direction, and it should return a new pair of coordinates, with the coords array updated by moving either x or y 1 unit in a particular direction

  If direction is "up" it should move 1 unit up (+ 1 in the y direction)
  If the direction is "down" it should move 1 unit down (- 1 in the y direction)
  If the direction is "right" it should move 1 unit right (+ 1 in the x direction)
  If the direction is "left" it should move 1 unit left (- 1 in the x direction)
  */

  if (direction === "up") coords[1]++;
  if (direction === "down") coords[1]--;
  if (direction === "left") coords[0]--;
  if (direction === "right") coords[0]++;
  return coords;
}

runTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition([10, 10], "up")).isEqualTo([10, 11]);
  check(updatePosition([0, 0], "down")).isEqualTo([0, -1]);
  check(updatePosition([3, 3], "left")).isEqualTo([2, 3]);
  check(updatePosition([7, 50], "right")).isEqualTo([8, 50]);
});

//Exercise 8
function addCoins(collection, coin) {
  /*
  In this function, a "coin collection" is represented by an array containing 4 other nested arrays, each representing a slot in the collection in the following way:
   1p   2p   5p   10p
  [[],  [],  [],  []] <-- coinCollection

  This should take two arguments, a coin collection array and a string representing a coin, and return an updated version of the given array with the coin added at the appropriate position
  */

  if (coin === "1p") collection[0].push(coin);
  if (coin === "2p") collection[1].push(coin);
  if (coin === "5p") collection[2].push(coin);
  if (coin === "10p") collection[3].push(coin);
  return collection;
}

runTest("addCoins() will update the coins in a given slot", function () {
  check(addCoins([[], [], [], []], "1p")).isEqualTo([["1p"], [], [], []]);
  check(addCoins([[], [], [], []], "2p")).isEqualTo([[], ["2p"], [], []]);
  check(addCoins([[], ["2p"], [], []], "2p")).isEqualTo([[], ["2p", "2p"], [], []]);
  check(addCoins([[], [], [], []], "5p")).isEqualTo([[], [], ["5p"], []]);
  check(addCoins([["1p"], [], [], ["10p", "10p"]], "2p")).isEqualTo([["1p"], ["2p"], [], ["10p", "10p"]]);
  check(addCoins([[], [], ["5p", "5p"], []], "5p")).isEqualTo([[], [], ["5p", "5p", "5p"], []]);
});
