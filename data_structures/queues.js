class Node {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.fist;
        this.last;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        const prev = this.last;
        if (!this.size) this.first = newNode;
        if (prev) prev.next = newNode;
        this.last = newNode;
        this.size++;
        return newNode;
    }
    dequeue() {
        if (!this.size) return null;
        const dequeued = this.first;
        if (!this.size === 1) this.last = null;
        this.first = dequeued.next;
        dequeued.next = null;
        this.size--;
        return dequeued.value;
    }
}

const myQue = new Queue();
myQue.enqueue(10);
console.log(myQue.enqueue(12));
console.log(myQue.dequeue());