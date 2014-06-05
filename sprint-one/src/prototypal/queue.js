var makeQueue = function() {
  // Create object that delegates to queueMethods prototype
  var someInstance = Object.create(queueMethods);
  // Create an enqueue counter for our instance
  someInstance._enqueueTally = 0;
  // Create an dequeue counter for our instance
  someInstance._dequeueTally = 0;
  // Create storage object for our instance (for clarity)
  someInstance._storage = {};
  // Return our instance
  return someInstance;
};

var queueMethods = {
  // Define enqueue method
  'enqueue': function(value) {
    // Store value into storage
    this._storage[this._enqueueTally] = value;
    // Increment enqueueTally
    this._enqueueTally++;
  },
  // Define dequeue method
  'dequeue': function() {
    // Check if storage is empty
    if (this.size() > 0) {
      // Copy item at dequeueTally
      var bottomItem = this._storage[this._dequeueTally];
      // Delete key relationship to object
      delete this._storage[this._dequeueTally];
      // Increment dequeueTally
      this._dequeueTally++;
      // Return copied item
      return bottomItem;
    }
    // Return nothing (since storage is empty)
    return;
  },
  // Define size method
  'size': function() {
    return this._enqueueTally - this._dequeueTally;
  }
};
