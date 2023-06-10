class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
        return this;
    }
    reverse() {
        if (this.length <= 1) return this;
        let count = 0;
        let item = this.head;
        while (count < this.length) {
            const prev = item.prev;
            const next = item.next;
            item.prev = next;
            item.next = prev;
            item = next;
            count++;
        }
        const tail = this.tail;
        const head = this.head;
        this.head = tail;
        this.tail = head;
        return this;
    }
    print() {
        let count = 0;
        let current = this.head;
        let str = "";
        while (count < this.length) {
            console.log({ current, count });
            str = str + current.val + " ";
            current = current.next;
            count++;
        }
        console.log(str);
    }
}

let myList = new DoublyLinkedList();
myList.push(4);
myList.push(56);
myList.push(44);
//myList.print();
console.log(myList.reverse());
//myList.print();