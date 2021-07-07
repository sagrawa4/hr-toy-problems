/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


 var allAnagrams = function(string) {
   if(string.length < 2) {
     return string;
   }
  var result=[];

  for( var i=0; i< string.length; i++) {
    var myChar = string[i];

    if(string.indexOf(myChar) != i) {
      continue;
    }

    var leftOutString = string.slice(0, i) + string.slice(i + 1, string.length);

    for(var k of allAnagrams(leftOutString)) {
      result.push(myChar + k);
    }
  }

  return result;
};

var res = allAnagrams('rat');
console.log(res);
