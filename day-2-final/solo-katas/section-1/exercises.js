const { check, runTest, skipTest } = require("../../test-api/index.js");
/*
Instructions

For each of these tests replace the variable FILL_ME_IN with a value to make the test pass.
Each of the checks expects the value in the left hand brackets to evaluate to the same as the right hand brackets.

e.g.  check(FILL_ME_IN).isEqualTo(2 + 2) becomes -> check(4).isEqualTo(2 + 2)
*/

// Exercise 1
runTest("checking multiTypeArray", function () {
  const multiTypeArray = ["I am a string", 42, true, [1, 2, 3]];

  check("string").isEqualTo(typeof multiTypeArray[0]);
  check("number").isEqualTo(typeof multiTypeArray[1]);
  check("boolean").isEqualTo(typeof multiTypeArray[2]);
  check("object").isEqualTo(typeof multiTypeArray[3]);
});

// Exercise 2
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("checking alphaSample", function () {
  const alphaSample = ["a", "b", "c"];
  alphaSample.push("d");
  alphaSample.push("g");

  check(["a", "b", "c", "d", "g"]).isEqualTo(alphaSample);

  const lastItem = alphaSample.pop();

  check("g").isEqualTo(lastItem);
  check(["a", "b", "c", "d"]).isEqualTo(alphaSample);
});

// Exercise 3
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("working with nested arrays", function () {
  const rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  check(["a", "b", "c"]).isEqualTo(rows[0]);
  check(["d", "e", "f"]).isEqualTo(rows[1]);
  check(["g", "h", "i"]).isEqualTo(rows[2]);

  const firstRow = rows[0];
  check(firstRow[0]).isEqualTo("a");
  check(firstRow[1]).isEqualTo("b");

  check(rows[1][1]).isEqualTo("e");
  check(rows[2][0]).isEqualTo("g");
  check(rows[0][2]).isEqualTo("c");
});

// Exercise 4
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("get the slice of an array", function () {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

  check(["b", "c", "d"]).isEqualTo(letters.slice(1, 4));
  check(["c"]).isEqualTo(letters.slice(2, 3));
  check(["d", "e"]).isEqualTo(letters.slice(3, 5));
  check(["n"]).isEqualTo(letters.slice(-1));
  check(["m", "n"]).isEqualTo(letters.slice(-2));
  check(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]).isEqualTo(letters.slice(0, -4));
});

// Exercise 5
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 5", function () {
  const myObject = {};

  check("object").isEqualTo(typeof myObject);
});

// Exercise 6
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 6", function () {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };

  check("Michael").isEqualTo(father.firstName);
  check("Bluth").isEqualTo(father.lastName);
  check(undefined).isEqualTo(father.firstname);
  check(33).isEqualTo(father.age);
});

// Exercise 7
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 7", function () {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check("therapist").isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check("actor").isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check(undefined).isEqualTo(brotherInLaw.job);
});

// Exercise 8
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 8", function () {
  const bluthFamily = {
    father: {
      name: "George",
    },
    mother: {
      name: "Lucille",
    },
    sons: [{ name: "GOB" }, { name: "Michael" }, { name: "Buster" }],
    daughters: [{ name: "Lindsay" }],
  };

  check("George").isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo("Lucille");
  check(bluthFamily.daughters[0].name).isEqualTo("Lindsay");
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
