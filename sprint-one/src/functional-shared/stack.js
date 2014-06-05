var makeStack = function() {
  // create stack instance
  var someInstance = {};
  // pseudo-private storage container
  someInstance._storage = {};
  // pseudo-private size counter
  someInstance._size = 0;
  // references to stackMethods for push, pop, & size
  _.extend(someInstance, stackMethods);
  // return stack instance
  return someInstance;
};

var stackMethods = {
  // method for push
  'push': function(value) {
    // add value into storage with current size as it's key
    this._storage[this._size] = value;
    // increment size
    this._size++;
  },
  // method for pop
  'pop': function() {
    if(this._size > 0) {
      // decrement size
      this._size--;
      // copy item to removed
      var topItem = this._storage[this._size];
      // delete property association
      delete this._storage[this._size];
      // return copied item
      return topItem;
    }
    return;
  },
  // method for size
  'size': function() {
    return this._size;
  }
};
