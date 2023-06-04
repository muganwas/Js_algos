class node {
    constructor(value, next) {
        this.next = next;
        this.value = value;
    }

}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        if (!val) return undefined;
        const newNode = new node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.length) return undefined;
        let prev = null;
        let current = this.head;
        while (current) {
            if (!current.next) {
                this.tail = prev;
                if (!prev) {
                    this.head = null;
                } else {
                    this.tail.next = null;
                }
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }
    shift() {
        if (!this.head) return undefined;
        const prev = this.head;
        const next = this.head.next;
        this.head = next;
        if (!this.head) this.tail = null;
        this.length--;
        return prev;
    }
    unshift(val) {
        if (!val) return undefined;
        const next = this.head;
        const newItem = new node(val, next);
        this.head = newItem;
        if (!next) this.tail = newItem;
        this.length++;
        return newItem;
    }
    get(i) {
        if (typeof i !== "number" || i < 0 || i >= this.length) return undefined;
        let requested = this.head;
        let count = 0;
        while (count < i) {
            requested = requested.next;
            count++;
        }
        return requested;
    }
    set(i, val) {
        const requested = this.get(i);
        if (!requested) return false;
        requested.value = val;
        return true;
    }
    insert(i, val) {
        if (typeof i !== "number" || i < 0 || i > this.length) return false;
        if (i === 0) return !!this.unshift(val);
        if (i === this.length) return !!this.push(val);
        this.length++;
        const current = this.get(i);
        const prev = this.get(i - 1);
        const newItem = new node(val, current);
        prev.next = newItem;
        newItem.next = current;
        return true;
    }
    remove(i) {
        if (typeof i !== "number" || i < 0 || i >= this.length) return false;
        if (i === 0) return !!this.shift();
        if (i === this.length - 1) !!this.pop();
        const prev = this.get(i - 1);
        const removed = this.get(i);
        prev.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        if (!this.head) return false;
        const head = this.head;
        const tail = this.tail;
        let next = head;
        let prev = null;
        let count = 0;
        while (count < this.length) {
            const tempNext = next.next;
            next.next = prev;
            prev = next;
            next = tempNext;
            count++;
        }
        this.tail = head;
        this.head = tail;
        return true;
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
const myList = new singlyLinkedList();
myList.push(30);
myList.push(29);
myList.push(1);
myList.push(13);
// console.log(myList.unshift(5));
// console.log(myList.set(1, 13));
myList.insert(3, 24);
//myList.remove(1);
console.log(myList);
myList.print();
console.log(myList.reverse());
myList.print();
