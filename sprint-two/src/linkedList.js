var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create new node and pass through value
    var newNode = makeNode(value);
    // skip if linked list is empty (no references to nodes yet)
    if(list.tail !== null) {
      // update current tail to point to new node
      list.tail.next = newNode;
    // the linked list must be empty
    }else{
      // so point head at first node of linked list
      list.head = newNode;
    }
    // update tail to point to new node
    list.tail = newNode;
  };

  list.removeHead = function(){
    // skip if linked list is empty (no references to nodes yet)
    if(list.head !== null) {
      // new var that references to soon-former head's value
      var formerHeadValue = list.head.value;
      // point head to what head's node is pointing to
      list.head = list.head.next;
      // return former head's value
      return formerHeadValue;
    }
  };

  list.contains = function(target){
    // if head doesn't point to null
    if(list.head !== null) {
      // assign starting reference as head
      var reference = list.head;
      // while reference doesn't point to null
      while(reference.next !== null) {
        console.log(list.head, reference.value);
        // if value (at current reference) === target return true
        if(reference.value === target) {
          return true;
        }
        // update reference to next node in linked list
        reference = reference.next;
        if(reference.next === null) {
          if(reference.value === target) {
            return true;
          }
        }
      }
    }
    // otherwise return false
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
