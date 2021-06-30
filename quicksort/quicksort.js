/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


 var quicksort = function(array) {
  if(array.length === 0) return [];

  var outterFunction = function(array, start, end) {
      var pivot = Array[Math.floor((start+end)/2)];
        while(start <= end) {
            while(array[start] < pivot) {
                start++;
            };
            while(array[end] > pivot) {
                end++;
            };
            if(start <= end) {
                var temp = array[start];
                array[start] = array[end];
                array[end] = temp;
                start++;
                end--;
            }
        }
        return start;
  }

     var innerFunction = function(array, start, end) {
     var index;
     if(array.length > 1){
        index = outterFunction(array, start, end)
        }
     if(start < index - 1) {
         innerFunction(array, start, index - 1);
     };
     if(index < end) {
         innerFunction(array, index, end)
     }
     console.log(array)
     return array;
     }

     var result = innerFunction(array, 0, array.length-1);
     return result;
 };

 var res = quicksort([4,3,2]);
 console.log(res);