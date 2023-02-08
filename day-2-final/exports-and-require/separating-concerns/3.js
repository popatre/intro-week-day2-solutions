const { check, runTest } = require("../../test-api/index.js");
const isRightAngledTriangle = require("./utils/isRightAngledTriangle");
/* 
Complete the function below. It takes an object with contains the length of three sides of a triangle
Using the appropriate util function, return the string 'This is a right angled triangle' or 'This is a normal triangle', as appropriate

Example:
const angles = {sideA: 3, sideB:4, sideC:5}
checkRightAngledTriangle(angles)
return 'This is a right angled triangle'

NOTE: You will need to adjust the util function in this example, by requiring in another function to it

*/

function checkRightAngledTriangle(triangleAngles) {
  // they need to adjust the util function first to get this to work
  const isRightAngled = isRightAngledTriangle(triangleAngles.sideA, triangleAngles.sideB, triangleAngles.sideC);
  return isRightAngled ? "This is a right angled triangle" : "This is a normal triangle";
}

runTest("checkRightAngledTriangle() should return appropriate string message", function () {
  check(checkRightAngledTriangle({ sideA: 3, sideB: 4, sideC: 5 })).isEqualTo("This is a right angled triangle");
  check(checkRightAngledTriangle({ sideA: 6, sideB: 8, sideC: 10 })).isEqualTo("This is a right angled triangle");
  check(checkRightAngledTriangle({ sideA: 1, sideB: 2, sideC: 3 })).isEqualTo("This is a normal triangle");
  check(checkRightAngledTriangle({ sideA: 5, sideB: 5, sideC: 50 })).isEqualTo("This is a normal triangle");
});
