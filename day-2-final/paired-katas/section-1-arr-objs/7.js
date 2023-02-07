const { check, runTest } = require("../../test-api/index.js");

function updatePosition(coords, direction) {
  /*
  This function should take an array representing coordinates - an x position and a y position - and a string representing a direction, and it should return a new pair of coordinates, with the coords array updated by moving either x or y 1 unit in a particular direction

  If direction is "up" it should move 1 unit up (+ 1 in the y direction)
  If the direction is "down" it should move 1 unit down (- 1 in the y direction)
  If the direction is "right" it should move 1 unit right (+ 1 in the x direction)
  If the direction is "left" it should move 1 unit left (- 1 in the x direction)
  */
}

runTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition([10, 10], "up")).isEqualTo([10, 11]);
  check(updatePosition([0, 0], "down")).isEqualTo([0, -1]);
  check(updatePosition([3, 3], "left")).isEqualTo([2, 3]);
  check(updatePosition([7, 50], "right")).isEqualTo([8, 50]);
});