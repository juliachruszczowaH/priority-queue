class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  appendChild(node) {
    if (this.left != null && this.right != null) {
      return;
    }
    if (this.left == null) {
      this.left = node;
    } else {
      this.right = node;
    }
    node.parent = this;
  }

  removeChild(node) {
    node.parent = null;
    if (this.left == node) {
      this.left = null;
    } else if (this.right == node) {
      this.right = null;
    } else {
      throw "not a child of this node";
    }
  }

  remove() {
    if (this.parent == null) {
      return;
    } else {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {

	//does nothing if node does not have parent
    if (this.parent == null) {
      return;
    } else {

      let ancestorNode = this.parent.parent;
      let parentNode = this.parent;
      let leftChild = this.left;
      let rightChild = this.right;
      let neighbourChild ;

	  // maintains correct state of parent.parent.left and parent.parent.right
      if (ancestorNode != null) {
        if (this.parent === ancestorNode.left) {
          ancestorNode.left = this;
        } else if (this.parent === ancestorNode.right) {
          ancestorNode.right = this;
        }
      }
//updates parent.child.parent
      if (this === parentNode.left) {
		  neighbourChild=this.parent.right;
		  this.right=neighbourChild;
		  this.left=parentNode;
      } else if (this === parentNode.right){
neighbourChild=this.parent.left;
this.left=neighbourChild;
this.right=parentNode;
	  }
this.parent=ancestorNode;

//updates child.parent
if (neighbourChild!=null){
	neighbourChild.parent=this;
}

parentNode=this;
parentNode.left=leftChild;
parentNode.right=rightChild;

if (leftChild!=null){
	leftChild.parent=parentNode;
}
if (rightChild!=null){
	rightChild.parent=parentNode;
}



    }
  }
}

module.exports = Node;
