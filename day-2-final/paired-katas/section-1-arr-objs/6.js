const { check, runTest } = require("../../test-api/index.js");

function howManyArguments() {
  // This function should take any number of arguments and return the number of arguments passed into the function
  // HINT: For this one you should look up 'rest parameters' online - MDN Web Docs and devdocs are excellent sources of JavaScript documentation
}

runTest("howManyArguments() returns the number of items passed on a single call", function () {
  check(howManyArguments("a", "b", "c")).isEqualTo(3);
  check(howManyArguments()).isEqualTo(0);
  check(howManyArguments(1, 2, 3, 4, 5)).isEqualTo(5);
  check(howManyArguments("the", "meaning", "of", "life", "is", 42)).isEqualTo(6);
});
