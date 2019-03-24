const Node = require("./node");

class MaxHeap {
  constructor() {
	this.root=null;
  this.parentNodes=[];
  this.length=0;
  }

  push(data, priority) {
	let insertedNode=new Node(data,priority);
	this.insertNode(insertedNode);
  this.shiftNodeUp(insertedNode);
  
  

  }

  pop() {
    if(!this.root){
      return;
    }
      let untiedRoot=this.detachRoot();
      this.restoreRootFromLastInsertedNode(untiedRoot);
      this.shiftNodeDown(this.root);
      
return untiedRoot.data;

  }

  detachRoot() {
    this.length--;
    let detachedRoot=this.root;
    if (this.parentNodes[0]===detachedRoot){
      this.parentNodes.shift();
    }
    this.root=null;
    return detachedRoot;
  }

  restoreRootFromLastInsertedNode(detached) {
    let lastNode=this.parentNodes.pop();
    if (detached==null){
      return;
    }
    if (lastNode!=null){
      let parent=lastNode.parent;
      this.root=lastNode;
      if (parent!= null){
        lastNode.remove();
        if (parent.right==null &&
          parent.left!=null &&
          parent!==detached){
            this.parentNodes.unshift(parent);
          }
      }
      if (detached.left!=null){
        lastNode.appendChild(detached.left);
      } else if (detached.right!=null){
        lastNode.appendChild(detached.right);
        return;
      }
      this.parentNodes.unshift(lastNode);
    }
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    
		this.root = null;
    this.parentNodes = [];
    this.length=0;
  }

  insertNode(node) {
    this.length++;
    if (this.root==null){
      this.root=node;
      this.parentNodes.push(node);
      return;
    }

    if(this.parentNodes[0].left===null){
      this.parentNodes.appendChild(node);
      this.parentNodes.push(node);
    } else {
      this.parentNodes[0].appendChild(node);
      this.parentNodes.push(node);
      this.parentNodes.shift();
    }
  }

  shiftNodeUp(node) {
  let parent=node.parent;
  if(parent !=null &&
    parent.priority <node.priority){
      if (parent===this.root){
        this.root=node;
      }
      let nodeI=this.parentNodes.indexOf(node);
      let parentI=this.parentNodes.indexOf(parent);
      if(parentI===-1){
        this.parentNodes[nodeI]=parent;
      } else {
        this.parentNodes[parentI]=node;
        this.parentNodes[nodeI]=parent;
      }
      node.swapWithParent();
      this.shiftNodeUp(node);
    }
	}


  

  shiftNodeDown(node) {
    if (node === null || node.left === null) {
			return;
		}

		if (node.left) {
			let childToShift = node.left;
			if (node.right && childToShift.priority <= node.right.priority) { // check if node has right child and if its priority greater than left's child
				childToShift = node.right; // if so we will move right, to ensure greater priority to be higher
			}
			if (childToShift.priority > node.priority) {
				const childToShiftIndex = this.parentNodes.indexOf(childToShift);
				const nodeIndex = this.parentNodes.indexOf(node);
				if (node === this.root) {
					this.root = childToShift;
				}
				if (nodeIndex === -1) {
					this.parentNodes[childToShiftIndex] = node;
				} else {
					this.parentNodes[nodeIndex] = childToShift;
					this.parentNodes[childToShiftIndex] = node;
				}
				childToShift.swapWithParent();
				this.shiftNodeDown(node);
			}
		}
  }

}
module.exports = MaxHeap;
