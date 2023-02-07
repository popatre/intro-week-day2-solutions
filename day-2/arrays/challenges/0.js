const { check, runTest } = require("../../test-api/index.js");

function getLastItem(arr) {
  //Write your function here...
}

runTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem(["a", "b", "c", "d"])).isEqualTo("d");
  check(getLastItem(["apple", "banana", "pear", "kiwi"])).isEqualTo("kiwi");
});
