const { check, runTest } = require("../../test-api/index.js");

function isEmptyArray(arr) {
  // This function should take an array as an argument and return true if the array is empty, and false otherwise
}

runTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray([])).isEqualTo(true);
  check(isEmptyArray(["a", "b", "c", "d"])).isEqualTo(false);
  check(isEmptyArray(["a"])).isEqualTo(false);
});
