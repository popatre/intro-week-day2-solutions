const { check, runTest } = require("../../test-api/index.js");
/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which are named with letters from a to m.

The colours used by the printer are recorded in a string. 

For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used colour 'a' three times , colour 'b' four times , colour 'h' one time  then one time colour a...

Sometimes there are problems and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

Write a function named countPrinterErrors which given a string will return the error rate of the printer.

You should return a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 

Example:
const control = "aaabbbbhaijjjm"
printer_error(control) should return "0/14"

const control = "aaaxbbbbyyhwawiwjjjwwm"
printer_error(control) should return "8/22"

 */

function countPrinterErrors(controlStr) {
  let count = 0;
  for (var i = 0; i < controlStr.length; i++) {
    if (controlStr[i] > "m") {
      count++;
    }
  }
  return `${count}/${controlStr.length}`;
}

runTest("countPrinterErrors() should return a string", function () {
  check(typeof countPrinterErrors("")).isEqualTo("string");
});
runTest("countPrinterErrors() should return zero for an empty control string", function () {
  check(countPrinterErrors("")).isEqualTo("0/0");
});
runTest("countPrinterErrors() should return correct control string length", function () {
  check(countPrinterErrors("aaa")).isEqualTo("0/3");
});
runTest("countPrinterErrors() should correctly count errors in control string", function () {
  check(countPrinterErrors("aaz")).isEqualTo("1/3");
  check(countPrinterErrors("aaaxbbbbyyhwawiwjjjwwm")).isEqualTo("8/22");
});
