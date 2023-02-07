const { runTest, skipTest, check } = require("../../test-api");

// For each of these tests replace the variable FILL_ME_IN with a value to make the test pass.

runTest("Task 1", function () {
  const myObject = {};

  check(FILL_ME_IN).isEqualTo(typeof myObject);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 2", function () {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };

  check(FILL_ME_IN).isEqualTo(father.firstName);
  check(FILL_ME_IN).isEqualTo(father.lastName);
  check(FILL_ME_IN).isEqualTo(father.firstname);
  check(FILL_ME_IN).isEqualTo(father.age);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 3", function () {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
skipTest("Task 4", function () {
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

  check(FILL_ME_IN).isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo(FILL_ME_IN);
  check(bluthFamily.daughters[FILL_ME_IN].FILL_ME_IN).isEqualTo("Lindsay");
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
