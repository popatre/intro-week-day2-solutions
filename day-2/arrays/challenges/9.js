const { check, runTest, skipTest } = require("../../test-api/index.js");

function accessItem(arr, index) {
  /* 
  This function should take two arguments, an array and an index, and return the element at that specified index

  The index provided may be equal to or greater than the length of the given array. In this case, rather than counting past the end of the array where there are no values, the indexing should be considered to "loop back around" and continue from the start of the array

  For examples of this behaviour, look at the second group of tests below
  */
}

runTest("accessItem() can access an item inside in an array with a given index below the array length", function () {
  check(accessItem(["a", "b", "c", "d"], 2)).isEqualTo("c");
  check(accessItem(["a", "b", "c", "d"], 0)).isEqualTo("a");
  check(accessItem(["a", "b", "c", "d"], 3)).isEqualTo("d");
});

skipTest(
  "accessItem() can access an item inside in an array with an index equal to or above the array length",
  function () {
    check(accessItem(["a", "b", "c", "d"], 4)).isEqualTo("a");
    check(accessItem(["a", "b", "c", "d"], 6)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 10)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 11)).isEqualTo("d");
  }
);
