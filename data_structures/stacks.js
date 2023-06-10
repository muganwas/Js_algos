class Node {
    constructor(val, prev) {
        this.value = val;
        this.prev = prev;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val, this.last);
        this.last = newNode;
        if (!this.size) this.first = newNode;
        this.size++;
        return newNode.value;
    }
    pop() {
        const popped = this.last;
        const prev = popped.prev;
        if (this.size === 1) this.first = null;
        this.last = prev;
        popped.prev = null;
        this.size--;
        return popped.value;
    }
}

const myStack = new Stack();
console.log(myStack.push(24));
console.log(myStack.push("head"));
//myStack.pop();
console.log(myStack);