const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize) {
    if (!maxSize) {
      this.maxSize = 30;
    } else {
      this.maxSize = maxSize;
    }

    this.heap = new MaxHeap();
  }

  push(data, priority) {
	  if(this.size() === this.maxSize){
		  throw new Error ("queue has max size");
	  } 
		  this.heap.push(data,priority);
    
  }

  shift() {
    if (this.isEmpty()){
      throw  new Error ("queue is empty");
    } else {
      this.heap.pop();
    }
  }

  size() {
    return this.heap.size();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }
}

module.exports = PriorityQueue;
