const { check, runTest } = require("../../test-api/index.js");

function removeItem(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array without the item at index 'n'
}

runTest("removeItem() removes an item at a given index", function () {
  check(removeItem(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b", "d"]);
  check(removeItem(["a", "b", "c", "d"], 0)).isEqualTo(["b", "c", "d"]);
  check(removeItem(["a", "b", "c", "d"], 1)).isEqualTo(["a", "c", "d"]);
});
