// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             arr = swap(arr, i, i + 1);
//         }
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr = swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 arr = swap(arr, j, i);
//             }
//         }
//     }
//     return arr;
// }

function swap(arr, pos_1, pos_2) {
    const temp1 = [...arr];
    temp1[pos_1] = arr[pos_2];
    temp1[pos_2] = arr[pos_1];
    return temp1;
}

// const newSwap = (arr, pos_1, pos_2) => ([arr[pos_1], arr[pos_2]] = [arr[pos_2], arr[pos_1]]);

// console.log(selectionSort([1, 2, 3, 4, 7, 6, 5, 100, 67, 45, 33, 111]));

// function insertionSort(arr) {
//     let pointer_1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let arr_slice = arr.slice(0, i + 1);
//         pointer_1 = i;
//         for (let j = arr_slice.length - 1; j > -1; j--) {
//             if (arr[pointer_1] < arr_slice[j]) {
//                 arr = swap(arr, pointer_1, j);
//                 arr_slice = arr.slice(0, i + 1);
//                 pointer_1 = j;
//             }
//         }
//     }
//     return arr;
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        for (let j = i - 1; j > -1 && arr[j] > currentVal; j--) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

console.log(insertionSort([5, 23, 100, 67, 45, -10, 33, 111]));
// insertionSort([5, 100, 67, 45, 33, 111]);