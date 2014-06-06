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
  }
  // call set function to store i and value in storage
  this._storage.set(i, [[k,v]]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // assign to temp the tuple (item) at index of hashed key
  var tempTuple = this._storage.get(i);
  // temp found variable to track if match was found
  var found = false;
  // make sure temp tuple is not null
  if (tempTuple[0] !== null) {
    // iterate over temp tuple
    for (var j = 0; j < tempTuple.length; j++) {
      // check for matching keys within temp tuple at index 0
      if (k === tempTuple[j][0]) {
        // assign to temp the return value at index 1 of that array
        tempTuple = tempTuple[j][1];
        found = true;
      }
    }
    // // // NOTE FOR WORK: rethink found boolean in retrieve
    // // // NOTE FOR WORK: revisit if remove is then working
    if(!found) {

    }
  }
  // return temp
  return tempTuple;
};

HashTable.prototype.remove = function(k){
  // store index based on key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // assign to temp the tuple (item) at index of hashed key
  var tempTuple = this._storage.get(i);
  // make sure temp tuple is not null
  if (tempTuple[0] !== null) {
    // iterate over temp tuple
    for (var j = 0; j < tempTuple.length; j++) {
      // check for matching keys within temp tuple at index 0
      if (k === tempTuple[j][0]) {
        // assign temp tuple to array of pre & post index slices
        tempTuple = tempTuple.slice(0,j)
                    .concat(tempTuple.slice(j+1,tempTuple.length));
        // check if temp tuple is empty now
        if (tempTuple.length === 0) {
          // set temp tuple to null
          tempTuple = null;
        }
        // set storage at item to temp tuple
        this._storage.set(i, tempTuple);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
