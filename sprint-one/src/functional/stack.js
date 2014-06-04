var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    // store item in stack
    storage[size] = value;
    // increment size
    size++;
  };

  someInstance.pop = function(){
    // if size is greater than 0
    if (size > 0) {
      // decrement size
      size--;
      // store a copy of item at top of stack
      var top = storage[size];
      // sever connection between object and its property
      delete storage[size];
      // return that removed item
      return top;
    }

    return 0;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
