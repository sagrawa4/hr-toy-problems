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

var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  //3 given inputs
  var input = ['R', 'P', 'S'];
  // Possible combination of outputs
  var output = [];

  var innerFunction = function(currentString, roundsLeft) {
    // Base case when we reach leaves or rounds exhausts
    if(roundsLeft === 0) {
      output.push(currentString);
    } else {
      //iterate for each root
      for( var i=0; i< input.length; i++) {
        //concat each root with other combinations
        var newString = currentString.concat(input[i]);
        innerFunction(newString, roundsLeft-1);
      }
    }
  }
  innerFunction("", rounds);
  return output;
};

//invoking the main function
var result = rockPaperScissors(3);
console.log(result);
var result1 = rockPaperScissors(2);
console.log(result1);

