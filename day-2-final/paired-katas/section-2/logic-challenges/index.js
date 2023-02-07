const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions
For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function isFalsy(value) {
  // This function should take any value as an argument, and return true if it is falsy, and false otherwise
}

skipTest("isFalsy() returns true if a value is falsy and false if it is truthy", function () {
  check(isFalsy(false)).isEqualTo(true);
  check(isFalsy("")).isEqualTo(true);
  check(isFalsy(0)).isEqualTo(true);
  check(isFalsy(NaN)).isEqualTo(true);
  check(isFalsy(undefined)).isEqualTo(true);
  check(isFalsy(null)).isEqualTo(true);
  check(isFalsy(true)).isEqualTo(false);
});

function isMultipleOf6(num) {
  // This function should take a number as an argument, and return true if it is a multiple of 6, and false otherwise
}

skipTest("isMultipleOf6() should check if a number is divisible by 6", function () {
  check(isMultipleOf6(6)).isEqualTo(true);
  check(isMultipleOf6(10)).isEqualTo(false);
  check(isMultipleOf6(15)).isEqualTo(false);
  check(isMultipleOf6(36)).isEqualTo(true);
  check(isMultipleOf6(60)).isEqualTo(true);
  check(isMultipleOf6(61)).isEqualTo(false);
});

function checkBatteryLevel(batteryLevel) {
  // This function should take a number representing a battery level as a percentage
  // If the battery level is less than or equal to 5%, then you should return a string stating:
  // "Warning - battery level low: <number-here>%, please charge your device"
  // If the battery level is between 5 and 99% then it should return a string stating:
  // "Battery level: <number-here>%"
  // If the battery level is 100% then it should return a string stating:
  // "Fully charged :)"
}

skipTest("checkBatteryLevel() should return a message with info about the battery level", function () {
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

function getOrdinalSuffix(num) {
  // This function should take a number as an argument
  // An ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd and "st" is an ordinal suffix as we'd write 1st etc
  // You should return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
}

skipTest("getOrdinalSuffix() should give the correct ordinal suffix for a number", function () {
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
