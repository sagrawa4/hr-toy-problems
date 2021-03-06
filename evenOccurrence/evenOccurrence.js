/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var obj = {};
  for ( var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
         obj[arr[i]] = obj[arr[i]] + 1;
    }
  }

   for ( var i = 0; i < arr.length; i++) {
       if(obj[arr[i]] %2 === 0) {
           return arr[i];
       }
   }
   return null;
};

var res = evenOccurrence([1, 3, 2, 6, 7, 9, 4]);
console.log(res);