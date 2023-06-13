// Binary search tree

class bstNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val, prevNode = this.root) {
        const newNode = new bstNode(val);
        if (!prevNode) this.root = newNode;
        else {
            let nextNode = val > prevNode.value ? prevNode.right : prevNode.left;
            if (nextNode) return this.insert(val, nextNode);
            if (val > prevNode.value) prevNode.right = newNode;
            else if (val < prevNode.value) prevNode.left = newNode;
        }
        return this;
    }
    find(val, node = this.root) {
        if (!node) return undefined;
        if (node.value === val) return node;
        if (val > node.value) return this.find(val, node.right);
        if (val < node.value) return this.find(val, node.left);
    }
    breadthFirstSearch(node = this.root, queue = []) {
        let values = [];
        if (node) {
            values.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            if (queue.length) values = values.concat(this.breadthFirstSearch(queue.shift(), queue));
        }
        return values;
    }
    dfsPreOrder(node = this.root) {
        let values = [];
        if (node) {
            values.push(node.value);
            if (node.left) values = values.concat(this.dfsPreOrder(node.left));
            if (node.right) values = values.concat(this.dfsPreOrder(node.right));
        }
        return values;
    }
    dfsPostOrder(node = this.root) {
        let values = [];
        if (node) {
            if (node.left) values = values.concat(this.dfsPostOrder(node.left));
            if (node.right) values = values.concat(this.dfsPostOrder(node.right));
            values.push(node.value);
        }
        return values;
    }
    dfsInOrder(node = this.root) {
        let values = [];
        if (node) {
            if (node.left) values = values.concat(this.dfsInOrder(node.left));
            values.push(node.value);
            if (node.right) values = values.concat(this.dfsInOrder(node.right));
        }
        return values;
    }
}

const myBinaryTree = new BinarySearchTree();
myBinaryTree.insert(10);
myBinaryTree.insert(6);
myBinaryTree.insert(15);
// myBinaryTree.insert(13);
// myBinaryTree.insert(12);
myBinaryTree.insert(3);
myBinaryTree.insert(8);
myBinaryTree.insert(20);
//console.log(myBinaryTree);  
console.log(myBinaryTree.breadthFirstSearch());
console.log(myBinaryTree.dfsInOrder());