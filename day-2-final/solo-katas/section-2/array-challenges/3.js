const { check, runTest } = require("../../../test-api/index.js");

function mergeArrays(arr1, arr2) {
  // This function should take two arrays as arguments and return a new array containing all of arr1 and arr2's elements (in that order)
}

runTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays(["a", "b"], ["c", "d"])).isEqualTo(["a", "b", "c", "d"]);
  check(mergeArrays([1], [3, 5, 7])).isEqualTo([1, 3, 5, 7]);
  check(mergeArrays(["x", "y", "z"], [1, 2, 3, 4])).isEqualTo(["x", "y", "z", 1, 2, 3, 4]);
});
