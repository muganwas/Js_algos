function numberOfUniqueValues(arr) {
    // If arg is not an array or is an array but has no entries return 0
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    // create an object and insert a value, any duplicates will be replaced
    const uniqueVals = {};
    arr.forEach(v => uniqueVals[v] = v);
    // return length of object
    return Object.keys(uniqueVals).length;
}

function countUniqueValues(newArr) {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    let p = 0;
    let p2 = 0;
    while (p2 < arr.length) {
        if (newArr[p2] > newArr[p]) {
            newArr[p + 1] = newArr[p2];
            p++;
        }
        p2++;
    }
    return p + 1;
}

function largestSum(arr, n) {
    if (!n || !Array.isArray(arr) || arr.length < n) return null;
    let maxSum = arr.slice(0, n).reduce((sum, n) => sum + n, 0);
    let temp = 0;
    if (arr.length === n) return maxSum;
    temp = maxSum;
    for (let l = n; l < arr.length; l++) {
        temp = maxSum - arr[l - n] + arr[l];
        maxSum = Math.max(maxSum, temp);
    }
    return maxSum;
}

const l = [4, 1, 6, 8, 9, 3, 4, 2];
console.log(largestSum(l, 3));
// console.log(numberOfUniqueValues(l));
// console.log(countUniqueValues(l));