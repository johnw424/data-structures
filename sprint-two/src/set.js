var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // store item as both key and value
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  // return whether it has the item via key or hasOwnProperty
  // assumes we continue to only store strings
  return !!(this._storage[item]);
};

setPrototype.remove = function(item){
  // remove item from storage
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
