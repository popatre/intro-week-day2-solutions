const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/
//Question 0
/*
function double() 
  This function should return any number doubled
*/

skipTest("double() can double any number", function () {
  check(double(11)).isEqualTo(22);
  check(double(129)).isEqualTo(258);
  check(double(25)).isEqualTo(50);
});

//Question 1
/*
function multiply() 
 This function should return the product of two passed numbers

*/

runTest("multiply() can multiply 2 numbers together", function () {
  check(multiply(10, 42)).isEqualTo(420);
  check(multiply(3, 5)).isEqualTo(15);
  check(multiply(-180, 2)).isEqualTo(-360);
});

// Question 2
/*
squareRoot()

This function should take a single argument and return its square root
*/

skipTest("squareRoot() returns the square root of a positive integer", function () {
  check(squareRoot(100)).isEqualTo(10);
  check(squareRoot(25)).isEqualTo(5);
  check(squareRoot(121)).isEqualTo(11);
});

// Question 3
/*
raiseToPower()

This function should take two arguments, m and n, and return m raised to the power of n
*/

skipTest("raiseToPower() raises given number to the given power", function () {
  check(raiseToPower(10, 3)).isEqualTo(1000);
  check(raiseToPower(25, 2)).isEqualTo(625);
  check(raiseToPower(10, 0)).isEqualTo(1);
});

// Question 4
/*
capitaliseFirstLetter()

This function should take a string as an argument and return the same string with the first letter capitalised
*/
skipTest("capitaliseFirstLetter() capitalises the first letter in a string", function () {
  check(capitaliseFirstLetter("bang")).isEqualTo("Bang");
  check(capitaliseFirstLetter("apple")).isEqualTo("Apple");
  check(capitaliseFirstLetter("coding")).isEqualTo("Coding");
});

// Question 5
/*
isFromThe60s()

This function should take a number as an argument representing a year, and return true if that year is in the 1960s and false otherwise

*/

skipTest("isFromThe60s() checks if a number is within 1960 to 1969 (inclusive)", function () {
  check(isFromThe60s(1962)).isEqualTo(true);
  check(isFromThe60s(1965)).isEqualTo(true);
  check(isFromThe60s(1970)).isEqualTo(false);
  check(isFromThe60s(1960)).isEqualTo(true);
  check(isFromThe60s(1959)).isEqualTo(false);
  check(isFromThe60s(1901)).isEqualTo(false);
  check(isFromThe60s(1990)).isEqualTo(false);
});

// Question 6
/*
isAbsolutePath()

This function should take a string as an argument representing a file path and return true if it is an absolute path, and false otherwise

HINT: all absolute file paths start with a /
*/

skipTest("isAbsolutePath() checks if a file path is absolute or relative", function () {
  check(isAbsolutePath("/Users/mitch")).isEqualTo(true);
  check(isAbsolutePath("/Users/mitch/northcoders/remote_course/remote_precourse_1")).isEqualTo(true);
  check(isAbsolutePath("../composers")).isEqualTo(false);
  check(isAbsolutePath("./applications/my-awesome-app.js")).isEqualTo(false);
});

// Question 7
/*
getMiddle()

This function should take a string as an argument and return the middle (or middle two) character(s) of that string

*/

skipTest("getMiddle() returns the middle character in a string of odd length", function () {
  check(getMiddle("abc")).isEqualTo("b");
  check(getMiddle("mitch")).isEqualTo("t");
});

skipTest("getMiddle() returns the middle characters in a string of even length", function () {
  check(getMiddle("abcd")).isEqualTo("bc");
  check(getMiddle("blob")).isEqualTo("lo");
});

// Question 8
/*
getCharCode()

This function should take a string as an argument and return a string which describes the ASCII code of that character

The returned string should be in the following format:

"The ASCII code for <character> is <character-code>"
*/

skipTest("getCharCode() will return a message stating the ASCII code of a passed char", function () {
  check(getCharCode("A")).isEqualTo("The ASCII code for A is 65");
  check(getCharCode("b")).isEqualTo("The ASCII code for b is 98");
  check(getCharCode("z")).isEqualTo("The ASCII code for z is 122");
  check(getCharCode("k")).isEqualTo("The ASCII code for k is 107");
  check(getCharCode("!")).isEqualTo("The ASCII code for ! is 33");
  check(getCharCode("M")).isEqualTo("The ASCII code for M is 77");
});

/************  Refactor Challenges *************

1. Question 5 - complete this problem without resorting to if statements!
2. Question 7 - use the ternary operator for this challenge (if you haven't already)
3. Refactor every function into an ES6 arrow function () => {}
*/
