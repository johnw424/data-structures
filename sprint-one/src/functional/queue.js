var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueueTally = 0;
  var dequeueTally = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    // Store item into storage with key as enqueueTally
    storage[enqueueTally] = value;
    // Increment tally
    enqueueTally++;
  };

  someInstance.dequeue = function(){
    // Copy item to be removed
    if((enqueueTally - dequeueTally) > 0) {
      var bottom = storage[dequeueTally];
      // Delete connection between storage and item
      delete storage[dequeueTally];
      // Increment tally
      dequeueTally++;
      return bottom;
    }
    return 0;
  };

  someInstance.size = function(){
    // The top and bottom are always moving independently
    // and you can't infer the top or bottom from the size
    // and the bottom never decrements in our model
    return enqueueTally - dequeueTally;
  };

  return someInstance;
};
