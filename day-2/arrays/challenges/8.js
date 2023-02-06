const { check, runTest } = require("../../test-api/index.js");

function addCoins(collection, coin) {
  /*
  In this function, a "coin collection" is represented by an array containing 4 other nested arrays, each representing a slot in the collection in the following way:
   1p   2p   5p   10p
  [[],  [],  [],  []] <-- coinCollection

  This should take two arguments, a coin collection array and a string representing a coin, and return an updated version of the given array with the coin added at the appropriate position
  */
}

runTest("addCoins() will update the coins in a given slot", function () {
  check(addCoins([[], [], [], []], "1p")).isEqualTo([["1p"], [], [], []]);
  check(addCoins([[], [], [], []], "2p")).isEqualTo([[], ["2p"], [], []]);
  check(addCoins([[], ["2p"], [], []], "2p")).isEqualTo([[], ["2p", "2p"], [], []]);
  check(addCoins([[], [], [], []], "5p")).isEqualTo([[], [], ["5p"], []]);
  check(addCoins([["1p"], [], [], ["10p", "10p"]], "2p")).isEqualTo([["1p"], ["2p"], [], ["10p", "10p"]]);
  check(addCoins([[], [], ["5p", "5p"], []], "5p")).isEqualTo([[], [], ["5p", "5p", "5p"], []]);
});
