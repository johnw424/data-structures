// Implementing prototypal stack without explicit
// storage object in someInstance. This is less code,
// but may be less explicit for a developer viewing
// this code

var makeStack = function() {
  // Create object with stackMethods as prototype
  var someInstance = Object.create(stackMethods);
  // Size counter
  someInstance._size = 0;
  // Return object
  return someInstance;
};

// The stack prototype
var stackMethods = {
  // Method for push
  'push': function(value) {
    this[this._size] = value;
    this._size++;
  },
  // Method for pop
  'pop': function() {
    if(this._size > 0) {
      this._size--;
      var topItem = this[this._size];
      delete this[this._size];
      return topItem;
    }
    return;
  },
  // Method for size
  'size': function() {
    return this._size;
  }
};
