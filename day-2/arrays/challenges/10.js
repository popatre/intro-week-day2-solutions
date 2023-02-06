const { check, runTest } = require("../../test-api/index.js");

function findDayOfTheWeek(num) {
  // This function should take a number from 1 to 7 inclusive, and return a string of the corresponding day of the week
}

runTest("findDayOfTheWeek() returns the day of the week given a passed number", function () {
  check(findDayOfTheWeek(2)).isEqualTo("Tuesday");
  check(findDayOfTheWeek(3)).isEqualTo("Wednesday");
  check(findDayOfTheWeek(1)).isEqualTo("Monday");
  check(findDayOfTheWeek(6)).isEqualTo("Saturday");
  check(findDayOfTheWeek(7)).isEqualTo("Sunday");
});
