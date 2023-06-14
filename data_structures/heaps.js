class BinaryHeap {
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
        if (arr[parentIndex] && arr[parentIndex] < arr[index]) return this.position(this.swap(arr, parentIndex, index), parentIndex);
        return arr;
    }
    reversePosition(arr, parentIndex = 0) {
        const leftChildIndex = (parentIndex * 2) + 1;
        const rightChildIndex = (parentIndex * 2) + 2;
        const leftChild = arr[leftChildIndex];
        const rightChild = arr[rightChildIndex];
        const parent = arr[parentIndex];
        if ((leftChild && rightChild) && (leftChild > parent || rightChild > parent))
            arr = this.reversePosition(this.swap(arr, parentIndex, leftChild > rightChild ? leftChildIndex : rightChildIndex));
        else if (leftChild && leftChild > parent)
            arr = this.reversePosition(this.swap(arr, parentIndex, leftChildIndex));
        else if (rightChild && rightChild > parent)
            arr = this.reversePosition(this.swap(arr, parentIndex, rightChildIndex));
        return arr;
    }
    insert(value) {
        if (value == null || value == undefined) return this.values;
        const newVals = [...this.values, value];
        if (!this.values.length) this.values = newVals;
        else this.values = this.position(newVals);
        return this.values;
    }
    extractMax() {
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

const myBinaryHeap = new BinaryHeap();
myBinaryHeap.insert(41);
myBinaryHeap.insert(39);
myBinaryHeap.insert(33);
myBinaryHeap.insert(18);
myBinaryHeap.insert(27);
myBinaryHeap.insert(12);
myBinaryHeap.insert(55);
myBinaryHeap.insert(1);
// console.log(myBinaryHeap.insert(45));
console.log(myBinaryHeap.extractMax());
//console.log(myBinaryHeap.insert(45));

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