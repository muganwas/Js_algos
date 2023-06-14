class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = new Array();
    }
    swap(arr, pos_1, pos_2) {
        const temp1 = [...arr];
        temp1[pos_1] = arr[pos_2];
        temp1[pos_2] = arr[pos_1];
        return temp1;
    }
    position(arr, index = arr.length - 1) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (arr[parentIndex] && arr[parentIndex].priority > arr[index].priority) return this.position(this.swap(arr, parentIndex, index), parentIndex);
        return arr;
    }
    reversePosition(arr, parentIndex = 0) {
        const leftChildIndex = (parentIndex * 2) + 1;
        const rightChildIndex = (parentIndex * 2) + 2;
        const leftChild = arr[leftChildIndex];
        const rightChild = arr[rightChildIndex];
        const parent = arr[parentIndex];
        if ((leftChild && rightChild) && (leftChild.priority < parent.priority || rightChild.priority < parent.priority))
            arr = this.reversePosition(this.swap(arr, parentIndex, leftChild.priority < rightChild.priority ? leftChildIndex : rightChildIndex));
        else if (leftChild && leftChild.priority < parent.priority)
            arr = this.reversePosition(this.swap(arr, parentIndex, leftChildIndex));
        else if (rightChild && rightChild.priority < parent.priority)
            arr = this.reversePosition(this.swap(arr, parentIndex, rightChildIndex));
        return arr;
    }
    insert(value, priority) {
        if (value == null || value == undefined) return this.values;
        const newVal = new Node(value, priority);
        const newVals = [...this.values, newVal];
        if (!this.values.length) this.values = newVals;
        else this.values = this.position(newVals);
        return this.values;
    }
    extractMin() {
        if (!this.values.length) return null;
        let extracted;
        if (this.values.length === 1) extracted = this.values.pop();
        else {
            const swapped = this.swap(this.values, 0, this.values.length - 1);
            extracted = swapped.pop();
            this.values = this.reversePosition(swapped);
        };
        console.log(this.values);
        return extracted;
    }
}

const myPriorityQueue = new PriorityQueue();
myPriorityQueue.insert("Common cold", 5);
myPriorityQueue.insert("Gunshot wound", 1);
myPriorityQueue.insert("High fever", 3);
myPriorityQueue.insert("Broken arm", 2);
myPriorityQueue.insert("Glass in foot", 6);
// myPriorityQueue.insert(18, 5);
// myPriorityQueue.insert(27, 4);
// myPriorityQueue.insert(12, 2);
// console.log(myPriorityQueue.insert(55, 4));
// myPriorityQueue.insert(1);
console.log(myPriorityQueue.values);
console.log(myPriorityQueue.extractMin());
//console.log(myPriorityQueue.insert(45));

/**
 *       30
 *   10       8
 * 2    1   2   5
 */

/**
 *        45
 *   39        41
 * 18   27  12   33
 */