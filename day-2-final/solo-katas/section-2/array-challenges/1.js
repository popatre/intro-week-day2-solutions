const { check, runTest } = require("../../test-api/index.js");

function getLastNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the last n items of the given array
}

runTest("getLastNItems() returns the last n items in an array", function () {
  check(getLastNItems(["a", "b", "c", "d"], 2)).isEqualTo(["c", "d"]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo(["banana", "pear", "kiwi"]);
});
