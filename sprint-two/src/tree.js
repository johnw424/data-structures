var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  // extend treeMethods to newTree
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  // create new tree and point parent to new tree
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var found = false;
  var searchNode = function(node) {
    _.each(node.children, function(childNode) {
      if(childNode.value === target) {
        found = true;
      } else {
        //search child node for target
        searchNode(childNode);
      }
    });
  };

  // check if current node contains target
  if(this.value === target) { return true; }
  searchNode(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


var first = makeTree('adam');
first.addChild('methuselah');
