const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise
}

skipTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "name")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "age")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "pets")).isEqualTo(false);
});

function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property based on the input
}

skipTest("createObject() creates a new object from a key value pair", function () {
  check(createObject(["name", "shaq"])).isEqualTo({ name: "shaq" });
  check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
  check(createObject(["language", "haskell"])).isEqualTo({ language: "haskell" });
});

function createArrow(direction) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but think about how you could do so
}

skipTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow("left")).isEqualTo("←");
  check(createArrow("right")).isEqualTo("→");
  check(createArrow("up")).isEqualTo("↑");
  check(createArrow("down")).isEqualTo("↓");
});

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
}

skipTest("updateVoterAddress() updates the voter's houseNumber", function () {
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
