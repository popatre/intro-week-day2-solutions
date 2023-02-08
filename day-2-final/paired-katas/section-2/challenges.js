const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

//Question 1
function collectStrings(arr) {
  // This function should take an array as an argument and return an array containing all string elements from the input (retaining the order)

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") result.push(arr[i]);
  }
  return result;
}

runTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
});

//Question 2
function isFalsy(value) {
  // This function should take any value as an argument, and return true if it is falsy, and false otherwise
  return !Boolean(value);
}

runTest("isFalsy() returns true if a value is falsy and false if it is truthy", function () {
  check(isFalsy(false)).isEqualTo(true);
  check(isFalsy("")).isEqualTo(true);
  check(isFalsy(0)).isEqualTo(true);
  check(isFalsy(NaN)).isEqualTo(true);
  check(isFalsy(undefined)).isEqualTo(true);
  check(isFalsy(null)).isEqualTo(true);
  check(isFalsy(true)).isEqualTo(false);
});

//Question 3
function collectPlurals(arr) {
  // This function should take an array of strings as an argument and return an array containing all strings ending with an 's' from the input (retaining the order)

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(arr[i].length - 1) === "s") result.push(arr[i]);
  }
  return result;
}

runTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])).isEqualTo(["dogs", "apples", "kittens"]);
  check(collectPlurals(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])).isEqualTo([
    "abcs",
    "humans",
    "thoughts",
    "cups",
  ]);
});

//Question 4
function isMultipleOf6(num) {
  // This function should take a number as an argument, and return true if it is a multiple of 6, and false otherwise

  return num % 6 === 0;
}

runTest("isMultipleOf6() should check if a number is divisible by 6", function () {
  check(isMultipleOf6(6)).isEqualTo(true);
  check(isMultipleOf6(10)).isEqualTo(false);
  check(isMultipleOf6(15)).isEqualTo(false);
  check(isMultipleOf6(36)).isEqualTo(true);
  check(isMultipleOf6(60)).isEqualTo(true);
  check(isMultipleOf6(61)).isEqualTo(false);
});

//Question 5
function createArray(length, char) {
  // This function should take a length and a character as arguments and return an array of the given length populated with the given character

  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(char);
  }
  return result;
}

runTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
  check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
});

//Question 6
function checkBatteryLevel(batteryLevel) {
  // This function should take a number representing a battery level as a percentage
  // If the battery level is less than or equal to 5%, then you should return a string stating:
  // "Warning - battery level low: <number-here>%, please charge your device"
  // If the battery level is between 5 and 99% then it should return a string stating:
  // "Battery level: <number-here>%"
  // If the battery level is 100% then it should return a string stating:
  // "Fully charged :)"

  if (batteryLevel == 100) return "Fully charged :)";
  if (batteryLevel <= 5) return `Warning - battery level low: ${batteryLevel}%, please charge your device`;
  return `Battery level: ${batteryLevel}%`;
}

runTest("checkBatteryLevel() should return a message with info about the battery level", function () {
  check(checkBatteryLevel(100)).isEqualTo("Fully charged :)");

  check(checkBatteryLevel(99)).isEqualTo("Battery level: 99%");
  check(checkBatteryLevel(80)).isEqualTo("Battery level: 80%");
  check(checkBatteryLevel(30)).isEqualTo("Battery level: 30%");
  check(checkBatteryLevel(10)).isEqualTo("Battery level: 10%");
  check(checkBatteryLevel(6)).isEqualTo("Battery level: 6%");

  check(checkBatteryLevel(5)).isEqualTo("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel(4)).isEqualTo("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel(3)).isEqualTo("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel(1)).isEqualTo("Warning - battery level low: 1%, please charge your device");
});

//Question 7
function deleteManyPasswords(arr) {
  /*
  This function should take an array of 'user' objects as an argument
  Each user will be an object with a 'name' and 'password' property
  You should return an array of user objects each with the 'password' property removed (retaining the order)
  */

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].password;
    result.push(arr[i]);
  }
  return result;
}

runTest("deleteManyPasswords() deletes the password property for each user", function () {
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

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1).indexOf(str[i]) > -1) return false;
  }
  return true;
}

runTest(
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

//Question 9
function getOrdinalSuffix(num) {
  // This function should take a number as an argument
  // An ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd and "st" is an ordinal suffix as we'd write 1st etc
  // You should return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/

  if (num == 11 || num == 12 || num == 13) return "th";
  if (num % 10 == 1) return "st";
  if (num % 10 == 2) return "nd";
  if (num % 10 == 3) return "rd";
  return "th";
}

runTest("getOrdinalSuffix() should give the correct ordinal suffix for a number", function () {
  check(getOrdinalSuffix(1)).isEqualTo("st");
  check(getOrdinalSuffix(2)).isEqualTo("nd");
  check(getOrdinalSuffix(3)).isEqualTo("rd");
  check(getOrdinalSuffix(4)).isEqualTo("th");
  check(getOrdinalSuffix(5)).isEqualTo("th");
  check(getOrdinalSuffix(10)).isEqualTo("th");
  check(getOrdinalSuffix(11)).isEqualTo("th");
  check(getOrdinalSuffix(12)).isEqualTo("th");
  check(getOrdinalSuffix(13)).isEqualTo("th");
  check(getOrdinalSuffix(14)).isEqualTo("th");
  check(getOrdinalSuffix(15)).isEqualTo("th");
  check(getOrdinalSuffix(16)).isEqualTo("th");
  check(getOrdinalSuffix(17)).isEqualTo("th");
  check(getOrdinalSuffix(18)).isEqualTo("th");
  check(getOrdinalSuffix(19)).isEqualTo("th");
  check(getOrdinalSuffix(20)).isEqualTo("th");
  check(getOrdinalSuffix(21)).isEqualTo("st");
  check(getOrdinalSuffix(22)).isEqualTo("nd");
  check(getOrdinalSuffix(23)).isEqualTo("rd");
  check(getOrdinalSuffix(32)).isEqualTo("nd");
});
