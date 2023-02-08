## exports and require

### exports examples

#### Section 1

1. `somethingFromFile1`: `Vel`
2. `somethingFromFile2`: `{ tutor: 'Vel' }`
3. `somethingFromFile3`: `[Function: printHello]`
4. `somethingFromFile4`: `{ add: [Function: add] }`
5. `somethingFromFile5`: `{ printHello: [Function: printHello], add: [Function: add] }`
6. `somethingFromFile6`: `{}`

#### Section 2

1. `console.log(somethingFromFile2.tutor);`
2. `console.log(somethingFromFile3());`
3. `console.log(somethingFromFile5.printHello());`

#### Section 3

0: `const num = require('./source.js');`
1: `const string = require('./data/source.js');`
2: `const boolean = require('./data/source2.js');`
3: `const string = require('../source.js');`
4:

```js
const string1 = require("./data/source1.js");
const string2 = require("./data/source2.js");
const string3 = require("./data/source3.js");
```

5. `module.exports = num;`
6. `module.exports = numbers;`
   7: `module.exports = {firstNames, companyName};`
   8: `module.exports = {temperatures: temperaturesInCelsius, rainfall:rainfallInMillimeters };`

## Section 4

Solutions are in the files
