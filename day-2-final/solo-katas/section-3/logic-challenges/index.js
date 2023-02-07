const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function isBiggerThan10(num) {
  // This function should take a number as an argument, and return an appropriate message based on that number's relationship to the number 10
}

runTest("isBiggerThan10() returns a message indicating if a number is bigger than 10", function () {
  check(isBiggerThan10(3)).isEqualTo("Number 3 is less than 10");
  check(isBiggerThan10(4)).isEqualTo("Number 4 is less than 10");
  check(isBiggerThan10(5)).isEqualTo("Number 5 is less than 10");
  check(isBiggerThan10(10)).isEqualTo("Number 10 is equal to 10");
  check(isBiggerThan10(11)).isEqualTo("Number 11 is more than 10");
  check(isBiggerThan10(100)).isEqualTo("Number 100 is more than 10");
});

function readTrafficLight(lightColour) {
  // This function should take a string representing a traffic light colour as an argument
  // It will be one of "red", "green" or "amber" in either uppercase or lowercase
  // You should return a corresponding message
}

skipTest("readTrafficLight() should print a message according to the different colour passed in", function () {
  check(readTrafficLight("green")).isEqualTo("GO!");
  check(readTrafficLight("GREEN")).isEqualTo("GO!");

  check(readTrafficLight("amber")).isEqualTo("GET READY...");
  check(readTrafficLight("AMBER")).isEqualTo("GET READY...");

  check(readTrafficLight("red")).isEqualTo("STOP!");
  check(readTrafficLight("RED")).isEqualTo("STOP!");
});

function checkInfinitive(word) {
  // This function should take a string representing a French word as an argument, and return true if it is an infinitive verb, and false otherwise
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"
}

skipTest("checkInfinitive() checks if a french word is an infinitive", function () {
  check(checkInfinitive("manger")).isEqualTo(true);
  check(checkInfinitive("faire")).isEqualTo(true);
  check(checkInfinitive("aller")).isEqualTo(true);
  check(checkInfinitive("finir")).isEqualTo(true);
  check(checkInfinitive("rendre")).isEqualTo(true);
  check(checkInfinitive("savoir")).isEqualTo(true);

  check(checkInfinitive("suis")).isEqualTo(false);
  check(checkInfinitive("ai")).isEqualTo(false);
  check(checkInfinitive("ete")).isEqualTo(false);
  check(checkInfinitive("sais")).isEqualTo(false);
  check(checkInfinitive("allons")).isEqualTo(false);
});

function checkGame(diceRoll, coinToss) {
  // This function should take a number representing a dice roll and a string repesenting a coin toss as its arguments
  // A dice roll will be a number between 1 and 6
  // A coin toss will be "H" or "T" representing heads or tails
  // The game is considered to be won if the dice roll is 3 or higher AND the coin toss is "H"
  // You should return true if the game has been won, and false otherwise
}

skipTest("checkGame() should check if a user was won the game", function () {
  check(checkGame(3, "H")).isEqualTo(true);
  check(checkGame(4, "H")).isEqualTo(true);
  check(checkGame(5, "H")).isEqualTo(true);
  check(checkGame(6, "H")).isEqualTo(true);
  check(checkGame(6, "T")).isEqualTo(false);
});
