function getDigit(nmbr, position) {
    let strNmbr = nmbr.toString().split(".")[0].split(""); //split(".") gets rid of decimal places
    return Number(strNmbr.reverse()[position] || 0);
}

function digitCount(nmbr) {
    return nmbr.toString().split(".")[0].length;
}

function mostDigits(arr) {
    //Number of digits in the largest number
    if (!Array.isArray(arr)) return 0;
    let num = 0;
    arr.forEach(i => {
        num = Math.max(i, num);
    });
    return digitCount(num);
}

function radixSort(arr, pos = 0) {
    let sortingArr = Array.from({ length: 10 }, () => []);
    let digits = mostDigits(arr);
    if (pos === digits) return arr;
    arr.forEach(i => {
        let numInPos = getDigit(i, pos);
        sortingArr[numInPos].push(i);
    });
    arr = sortingArr.flat(1);
    return radixSort(arr, pos + 1);
}

console.log(radixSort([12, 455, 75664, 34, 78]));
//console.log(mostDigits([1, 23, 123, 4567]));
//console.log(digitCount(0));
//console.log(getDigit(234595, 1));