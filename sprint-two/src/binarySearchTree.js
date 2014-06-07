var makeBinarySearchTree = function(value){
  // create prototypal instance
  var someTree = Object.create(bstMethods);
  // imbue someTree with relevant properties
  someTree.left = undefined; // lesser
  someTree.right = undefined; // greater
  someTree.value = value;

  return someTree;
};

// create prototype of methods
var bstMethods = {

  // creates new node
  'insert': function(value) {
    // create recursion function
    var findHome = function(node) {
      // compare current node value to new value to determine descension direction
      if (node.value > value) {
        // check if left points to anything
        if (!node.left) {
          // assign parent's left to point to soon-new node
          node.left = makeBinarySearchTree(value);
        // else (if not empty)
        } else {
          // recurse findHome on node at left
          findHome(node.left);
        }
      // else check on right
      } else {
        if (!node.right) {
          node.right = makeBinarySearchTree(value);
        } else {
          findHome(node.right);
        }
      }
    };
    // call recursion function
    findHome(this);
  },

  'contains': function(value) {
    // create recursive search function
    var findValue = function(node) {
      // check if current node value is equal to search value
      if(node.value === value) {return true;}
      // check if current node value is greater than search value
      if(node.value > value) {
        // check if node.left exists
        if(node.left) {
          // recurse search on node
          return findValue(node.left);
        }
      // else check right
      }else{
        if(node.right) {
          return findValue(node.right);
        }
      }
      return false;
    };
    // return recursive search function on start node
    return findValue(this);
  },

  'depthFirstLog': function(callback) {
    // create array to return
    var bstArray = [];
    // recursively go down all left and then up one at
    // a time to each right and then left down again etc.
    function depthFirst(node) {
      // perform callback and store value on current node
      bstArray.push(callback(node.value));
      // check if left node exists
      if(node.left) {
        // call depthFirst on left child node
        depthFirst(node.left);
      }
      // check if right node exists
      if(node.right) {
        // call depthFirst on right child node
        depthFirst(node.right);
      }
    };
    // kick off recursive function;
    depthFirst(this);
    return bstArray;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
