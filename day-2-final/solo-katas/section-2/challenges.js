const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

// Exercise 1
function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise
  return Boolean(obj[key]);
}

runTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "name")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "age")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "pets")).isEqualTo(false);
});

// Exercise 2
function getLastItem(arr) {
  //Write your function here...
  return arr.pop();
}

runTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem(["a", "b", "c", "d"])).isEqualTo("d");
  check(getLastItem(["apple", "banana", "pear", "kiwi"])).isEqualTo("kiwi");
});

// Exercise 3
function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property based on the input
  const result = {};
  result[arr[0]] = arr[1];
  return result;
}

runTest("createObject() creates a new object from a key value pair", function () {
  check(createObject(["name", "shaq"])).isEqualTo({ name: "shaq" });
  check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
  check(createObject(["language", "haskell"])).isEqualTo({ language: "haskell" });
});

// Exercise 4
function getLastNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the last n items of the given array
  if (n === 0) return [];
  return arr.slice(-n);
}

runTest("getLastNItems() returns the last n items in an array", function () {
  check(getLastNItems(["a", "b", "c", "d"], 2)).isEqualTo(["c", "d"]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo(["banana", "pear", "kiwi"]);
});

// Exercise 5
function createArrow(direction) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but think about how you could do so
  const arrows = {
    right: "→",
    left: "←",
    up: "↑",
    down: "↓",
  };
  return arrows[direction];
}

runTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow("left")).isEqualTo("←");
  check(createArrow("right")).isEqualTo("→");
  check(createArrow("up")).isEqualTo("↑");
  check(createArrow("down")).isEqualTo("↓");
});

// Exercise 6
function removeItem(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array without the item at index 'n'
  arr.splice(n, 1);
  return arr;
}

runTest("removeItem() removes an item at a given index", function () {
  check(removeItem(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b", "d"]);
  check(removeItem(["a", "b", "c", "d"], 0)).isEqualTo(["b", "c", "d"]);
  check(removeItem(["a", "b", "c", "d"], 1)).isEqualTo(["a", "c", "d"]);
});

// Exercise 7
function updateVoterAddress(voter, correctHouseNumber) {
  /*
  This function should take an object representing a voter's details and a house number as its arguments
  A voter object will take this form:
  {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester"
    }
  }
  The voter's house number is incorrect and you should update it to be the one provided
  This function does NOT need to return anything
  */
  voter.address.houseNumber = correctHouseNumber;
}

runTest("updateVoterAddress() updates the voter's houseNumber", function () {
  const voter = {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester",
    },
  };

  updateVoterAddress(voter, 10);

  check(voter).isEqualTo({
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 10,
      street: "Old St",
      city: "Chester",
    },
  });
});

//Exercise 7
function mergeArrays(arr1, arr2) {
  // This function should take two arrays as arguments and return a new array containing all of arr1 and arr2's elements (in that order)
  return arr1.concat(arr2);
}

runTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays(["a", "b"], ["c", "d"])).isEqualTo(["a", "b", "c", "d"]);
  check(mergeArrays([1], [3, 5, 7])).isEqualTo([1, 3, 5, 7]);
  check(mergeArrays(["x", "y", "z"], [1, 2, 3, 4])).isEqualTo(["x", "y", "z", 1, 2, 3, 4]);
});
