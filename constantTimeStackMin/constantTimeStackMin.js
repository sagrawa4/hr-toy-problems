// Using prototype Pattern
var Stack = function() {

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;

  someInstance.minimum = Number.MAX_VALUE;

  return someInstance;
  };

var stackMethods = {};

    stackMethods.push = function(value) {
        this.key += 1;
        this.storage[this.key]=value;
        console.log(this.storage)
        if(value<this.minimum) {
            this.minimum = value;
        }
    };

 // remove an item from the top of the stack
    stackMethods.pop = function() {
        delete this.storage[this.key];
        this.key -= 1;
    };

  // return the number of items in the stack
    stackMethods.size = function() {
        var length =0;
        for( var i in this.storage) {
            length++;
        }
        return length;
    };

  // return the minimum value in the stack
    stackMethods.min = function() {
        //console.log(this.minimum);
        return this.minimum;
    };

//var example = Stack();
//example.push(4)
//example.push(3)
//console.log(example.min() === 3);
//example.push(3)
//example.push(2)
//example.push(2)
//example.min() === 2