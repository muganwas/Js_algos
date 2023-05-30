// function merge_sorted_arrays(arr_1, arr_2) {
//     let res_arr = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr_1.length && j < arr_2.length) {
//         if (arr_1[i] < arr_2[j]) {
//             res_arr.push(arr_1[i]);
//             i++;
//         } else if (arr_2[j] < arr_1[i]) {
//             res_arr.push(arr_2[j]);
//             j++;
//         } else {
//             res_arr.push(arr_2[j]);
//             j++;
//             i++;
//         }

//         if (i === arr_1.length) res_arr = res_arr.concat(arr_2.slice(j));
//         if (j === arr_2.length) res_arr = res_arr.concat(arr_1.slice(i));
//     }
//     return res_arr;
// }

// function merge_sort(arr) {
//     if (arr.length <= 1) return arr;
//     let half = Math.ceil(arr.length / 2);
//     let left = merge_sort(arr.slice(0, half));
//     let right = merge_sort(arr.slice(half));
//     return merge_sorted_arrays(left, right);
// }

// console.log(merge_sort([2, 4, 3, 1, 6, 8, 5]));

function pivot(arr, start = 0) {
    let pos = start;
    let ini = arr[start];
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (e < ini && i > start) {
            pos++;
        }
        if (e > ini && i < start) {
            pos--;
        }
    }
    return pos;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const swap = (arr, a_1, a_2) => [arr[a_1], arr[a_2]] = [arr[a_2], arr[a_1]];
        let pos = pivot(arr, left);
        swap(arr, left, pos);
        // left
        quickSort(arr, left, pos - 1);
        // right
        quickSort(arr, pos + 1, right);
    }
    return arr;
}

console.log(quickSort([3, 4, 6, 13, 1, 4, 7, 8, -1, 0]));
//console.log(pivot([3, 4, 6, 4, 13, 1, -1, 0], 4));