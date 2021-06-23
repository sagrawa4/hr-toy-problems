/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

//Generate a function.
//Function should generate a seq of throws.
//Thrown by a single player
//Over 3 rounds og game of RPS.

var rockPaperScissors = function () {
  // TODO: your solution here
  //3 given inputs
  var input = ['R', 'P', 'S'];
  // Possible combination of outputs
  var output = [];

  //Generate each combination
  for (var i = 0; i <input.length; i++) {
    for( var j=0; j <input.length; j++) {
      for (var k=0; k <input.length; k++) {
        output.push(input[i] + input[j] + input[k]);
      }
    }
  }

  return output;
};

//invoking the main function
var result = rockPaperScissors();
console.log(result);

