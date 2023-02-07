const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function countProperties(obj) {
  // This function should take an object as its argument and return the total number of properties it contains
}

skipTest("countProperties() counts the number of key-value pairs for a given object", function () {
  check(countProperties({})).isEqualTo(0);
  check(countProperties({ name: "shaq" })).isEqualTo(1);
  check(countProperties({ name: "shaq", job: "tutor", city: "Manchester" })).isEqualTo(3);
});

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
}

skipTest("createUserString() will create a message from an details object", function () {
  check(createUserString({ name: "Mitch", age: 30, language: "Javascript" })).isEqualTo(
    "name: Mitch, age: 30, language: Javascript"
  );
  check(createUserString({ name: "Anat", age: 24, language: "Ruby" })).isEqualTo("name: Anat, age: 24, language: Ruby");
});

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
}

skipTest("updateCoinMachine() will create a message from an details object", function () {
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
