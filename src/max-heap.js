const Node = require("./node");

class MaxHeap {
  constructor() {
	this.root=null;
  this.parentNodes=[];
  this.heapsize=0;
  this.heap=[];
  }

  push(data, priority) {
	let insertedNode=new Node(data,priority);
	this.insertNode(insertedNode);
  this.shiftNodeUp(insertedNode);
  this.heapsize++;
  

  }

  pop() {
    if(!this.heapsize!=0){
      let untiedRoot=this.detachRoot();
      this.restoreRootFromLastInsertedNode(untiedRoot);
      this.shiftNodeDown(this.root);
      this.heapsize--;
return untiedRoot.data;
}
  }

  detachRoot() {
  }

  restoreRootFromLastInsertedNode(detached) {
    
  }

  size() {
    return this.heapsize;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  clear() {
    
		this.root = null;
		this.parentNodes = [];
  }

  insertNode(node) {
	  
  }

  shiftNodeUp(node) {
	
	}


  

  shiftNodeDown(node) {
  }

}
module.exports = MaxHeap;
