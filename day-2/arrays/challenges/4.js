const { check, runTest } = require("../../test-api/index.js");

function getSandwichFilling(sandwich) {
  // If an array is like a sandwich, the first and last items are the bread
  // This function should take an array as an argument and return an array containing the filling of the sandwich
}

runTest("getSandwichFilling() returns the inner elements of an array", function () {
  check(getSandwichFilling(["a", "b", "c", "d"])).isEqualTo(["b", "c"]);
  check(getSandwichFilling([10, 20, 30, 40, 50, 60])).isEqualTo([20, 30, 40, 50]);
  check(getSandwichFilling(["northcoders", "are", "the", "best"])).isEqualTo(["are", "the"]);
});
