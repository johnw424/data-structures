var Graph = function(){
  // create pseudoprivate storage for references to nodes
  this._storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // check if storage contains no nodes
  if(Object.keys(this._storage).length === 0) {
    // create the first node
    this._storage[newNode] = {};
  // check if object only has one node stored
  }else if(Object.keys(this._storage).length === 1) {
    // create temporary variable of that key
    var firstNode = Object.keys(this._storage)[0];
    // create key referring to new node object
    this._storage[newNode] = {};
    // create edge between the two nodes
    this.addEdge(firstNode, newNode);
  // check if toNode argument is passed
  }else if(toNode){
    // create key referring to new node object
    this._storage[newNode] = {};
    // add edge between newNode and toNode
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  // return result of search for property called node in storage
  return this._storage.hasOwnProperty(node);

};

Graph.prototype.removeNode = function(node){
  // iterate through keys of node to be removed
  _.each(Object.keys(this._storage[node]), function(value, keyToNode) {
    // remove edges between node to be removed and its connected nodes
    this.removeEdge(node, keyToNode);
  });
  // edge case to cover only one node in storage
  delete this._storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // return result of check if fromNode has a key called toNode
  return this._storage[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // assign toNode as a key in fromNode equal to undefined
  this._storage[fromNode][toNode] = undefined;
  // assign fromNode as a key in toNode equal to undefined
  this._storage[toNode][fromNode] = undefined;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // delete toNode as a key in fromNode
  delete this._storage[fromNode][toNode];
  // if fromNode has no connections
  if(!Object.keys(this._storage[fromNode]).length){
    // remove fromNode
    delete this._storage[fromNode];
  }
  // delete fromNode as a key in toNode
  delete this._storage[toNode][fromNode];
  // if toNode has no connections
  if(!Object.keys(this._storage[toNode]).length){
    // remove toNode
    delete this._storage[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
