var makeQueue = function(){
  // create queue instance
  var someInstance = {};
  // create storage for queue instance
  someInstance._storage = {};
  // create enqueueTally for queue instance
  someInstance._enqueueTally = 0;
  // create dequeueTally for queue instance
  someInstance._dequeueTally = 0;
  // extend queue instance with queueMethods
  _.extend(someInstance, queueMethods);
  // return queue
  return someInstance;
};

var queueMethods = {
  // create enqueue method to add new item to top of queue
  'enqueue': function(value) {
    // add value to storage with enqueueTally as key
    this._storage[this._enqueueTally] = value;
    // increment enqueueTally
    this._enqueueTally++;
  },
  // create dequeue method to take out bottom-most item from queue
  'dequeue': function() {
    if ((this._enqueueTally - this._dequeueTally) > 0) {
      // copy item at top of queue to temporary variable
      var copiedTop = this._storage[this._dequeueTally];
      // delete property association to item at key
      delete this._storage[this._dequeueTally];
      // increment dequeueTally
      this._dequeueTally++;
      // return copied item
      return copiedTop;
    }
    return;
  },
  // create size method
  'size': function() {
    return this._enqueueTally - this._dequeueTally;
  }
};
