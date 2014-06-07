var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // assign i to hash of k
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check if storage at i (from k) is empty
  if (this._storage.get(i)) {
    // retrieve and temp store (in intermediate array) item [k, v] at i
    var tempArray = this._storage.get(i);
    // push new [k, v] into temp store item
    tempArray.push([k, v]);
    // set storage at i to temp store item
    this._storage.set(i, tempArray);
  } else {
    // call set function to store i and value in storage
    this._storage.set(i, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // assign to temp the Bucket (item) at index of hashed key
  var tempBucket = this._storage.get(i);
  // make sure temp bucket is not null
  if (tempBucket) {
    // iterate over temp bucket
    for (var j = 0; j < tempBucket.length; j++) {
      // check for matching keys within temp Bucket at index 0
        // assign to temp the return value at index 1 of that array
      if (k === tempBucket[j][0]) { return tempBucket[j][1]; }
    }
    return null;
  }
  return null;
};

HashTable.prototype.remove = function(k){
  // store index based on key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // assign to temp the Bucket (item) at index of hashed key
  var tempBucket = this._storage.get(i);
  // make sure temp Bucket is not null
  if (tempBucket) {
    // iterate over temp Bucket
    for (var j = 0; j < tempBucket.length; j++) {
      // check for matching keys within temp Bucket at index 0
      if (k === tempBucket[j][0]) {
        // assign temp Bucket to array of pre & post index slices
        var removed = tempBucket.splice(j,1);
        // check if temp Bucket is empty now
        if (tempBucket.length === 0) {
          // set temp Bucket to null
          tempBucket = null;
        }
        // set storage at item to temp Bucket
        this._storage.set(i, tempBucket);
      }
      return removed[0];
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




















