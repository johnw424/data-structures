var Stack = function() {
  // give our object storage
  this._storage = {};
  // give our object size
  this._size = 0;
};

// prototype method push into Stack prototype
Stack.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

// prototype method pop into Stack prototype
Stack.prototype.pop = function() {
  if (this._size) {
    this._size--;
    var removedItem = this._storage[this._size];
    delete this._storage[this._size];
    return removedItem;
  }
};

// prototype method size into Stack prototype
Stack.prototype.size = function() {
  return this._size;
};
