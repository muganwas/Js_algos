class Node {
    constructor(value, next = null, prev = null) {
        this.next = next;
        this.prev = prev;
        this.value = value;
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.head) {
            const prev = this.tail;
            prev.next = newNode
            newNode.prev = prev;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        if (!this.length) return null;
        const popped = this.tail;
        const prev = popped.prev;
        popped.prev = null;
        if (!prev) this.head = null;
        else prev.next = null;
        this.tail = prev;
        this.length--;
        return popped;
    }
    shift() {
        if (!this.length) return null;
        const shifted = this.head;
        if (this.length === 1) this.tail = null;
        this.head = shifted.next;
        this.head.prev = null;
        shifted.next = null;
        this.length--;
        return shifted;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const prevHead = this.head;
            prevHead.prev = newNode;
            newNode.next = prevHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(i) {
        if (typeof i !== "number" || i < 0 || i >= this.length) return null;
        if (i === 0) return this.head;
        if (i === this.length - 1) return this.tail;
        let count = 0;
        const halfway = Math.ceil(this.length / 2);
        let item = null;
        if (i < halfway) {
            item = this.head;
            while (count < i) {
                item = item.next;
                count++;
            }
        } else {
            item = this.tail;
            const pos = (this.length - 1) - i;
            while (count < pos) {
                item = item.prev;
                count++;
            }
        }
        return item;
    }
    set(i, val) {
        const item = this.get(i);
        if (!item) return false;
        item.value = val;
        return true;
    }
    insert(i, val) {
        if (typeof i !== "number" || i < 0 || i > this.length) return false;
        if (i === 0) return !!this.unshift(val);
        if (i === this.length) return !!this.push(val);
        const newNode = new Node(val);
        let item = this.get(i);
        let prev = item.prev;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = item;
        item.prev = newNode;
        this.length++;
        return true;
    }
    remove(i) {
        const item = this.get(i);
        if (!item) return null;
        if (i === 0) return this.shift();
        if (i === (this.length - 1)) return this.pop();

        const prev = item.prev;
        const next = item.next;
        next.prev = prev;
        prev.next = next;

        item.next = null;
        item.prev = null;
        this.length--;
        return item;
    }
    print() {
        let count = 0;
        let current = this.head;
        let str = "";
        while (count < this.length) {
            str = str + current.value + " ";
            current = current.next;
            count++;
        }
        console.log(str);
    }
}

const myList = new DoublyLinkedList();
myList.push("Goodies");
myList.push(12);
// console.log(myList.pop());
// console.log(myList);
myList.push("coke");
myList.push(23);
myList.unshift(56);
myList.push("kinte");
myList.unshift("New beginning");
console.log(myList.get(3));
myList.print();
myList.insert(6, "kilimanjaro");
myList.remove(5);
myList.print();
// myList.set(2, "kyusa!");
// myList.print();
// myList.set(10, "crack!");
// myList.print();
