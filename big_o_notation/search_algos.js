// function binarySearch(arr, v) { //binary search
//     let start = 0;
//     let middle = Math.floor(arr.length / 2);
//     let end = arr.length - 1;
//     while (start <= end) {
//         if (v === arr[middle]) return middle;
//         if (v < arr[middle]) end = middle - 1;
//         if (v > arr[middle]) start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return -1;
// }

// console.log(binarySearch([1, 2, 4, 5, 7, 8, 9, 11, 12, 24, 25, 26], 26));

// function subStringSearch(strng, sub) {
//     let subCount = 0;
//     if (typeof strng !== "string" || typeof sub !== "string" || strng.length < sub.length) return subCount;
//     let cont = 0;
//     let pos = null;
//     for (let s = 0; s < strng.length; s++) {
//         for (let i = 0; i < sub.length; i++) {
//             const p = pos !== null ? pos : i;
//             if (strng[s] !== sub[p]) {
//                 cont = 0;
//                 pos = null;
//                 break;
//             }
//             if (strng[s] === sub[p]) {
//                 cont++;
//                 pos = p + 1;
//                 if (cont === sub.length) {
//                     subCount++;
//                     cont = 0;
//                     pos = null;
//                 }
//                 break;
//             }
//         }
//     };
//     return subCount;
// }

// console.log(subStringSearch("ka kaka tu ka ka", "tup"));