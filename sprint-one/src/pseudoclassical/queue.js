var Queue = function() {
  // Create storage container
  this._container = {};
  // Create enqueue tally
  this._enqueueTally = 0;
  // Create dequeue tally
  this._dequeueTally = 0;
};

// Method for enqueue item
Queue.prototype.enqueue = function(value) {
  // Create new key in container that points to value
  this._container[this._enqueueTally] = value;
  // Increment enqueue tally
  this._enqueueTally++;
};
// Method for dequeue item
Queue.prototype.dequeue = function() {
  // Check if size > 0
  if (this.size()) {
    // Variable to point to bottom item
    var removedItem = this._container[this._dequeueTally];
    // Delete connection of bottom item from key
    delete this._container[this._dequeueTally];
    // Increment dequeue tally
    this._dequeueTally++;
    // Return item
    return removedItem;
  }
};

// Method for report size
Queue.prototype.size = function() {
  return this._enqueueTally - this._dequeueTally;
};
