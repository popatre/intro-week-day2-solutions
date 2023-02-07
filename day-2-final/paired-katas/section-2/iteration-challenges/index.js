const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

//Question 2
function collectStrings(arr) {
  // This function should take an array as an argument and return an array containing all string elements from the input (retaining the order)
}

skipTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
});

//Question 4
function collectPlurals(arr) {
  // This function should take an array of strings as an argument and return an array containing all strings ending with an 's' from the input (retaining the order)
}

skipTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])).isEqualTo(["dogs", "apples", "kittens"]);
  check(collectPlurals(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])).isEqualTo([
    "abcs",
    "humans",
    "thoughts",
    "cups",
  ]);
});

//Question 5
function createArray(length, char) {
  // This function should take a length and a character as arguments and return an array of the given length populated with the given character
}

skipTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
  check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
});

//Question 6
function deleteManyPasswords(arr) {
  /*
  This function should take an array of 'user' objects as an argument
  Each user will be an object with a 'name' and 'password' property
  You should return an array of user objects each with the 'password' property removed (retaining the order)
  */
}

skipTest("deleteManyPasswords() deletes the password property for each user", function () {
  check(
    deleteManyPasswords([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
  ).isEqualTo([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

//Question 8
function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise
}

skipTest(
  "containsNoRepeats() takes a string and returns true if each character only appears once in the string",
  function () {
    check(containsNoRepeats("dog")).isEqualTo(true);
    check(containsNoRepeats("oo")).isEqualTo(false);
    check(containsNoRepeats("dooog")).isEqualTo(false);
    check(containsNoRepeats("iHaveRepeats")).isEqualTo(false);
    check(containsNoRepeats("anat")).isEqualTo(false);
    check(containsNoRepeats("cat")).isEqualTo(true);
    check(containsNoRepeats("abcde")).isEqualTo(true);
    check(containsNoRepeats("abcdea")).isEqualTo(false);
  }
);
