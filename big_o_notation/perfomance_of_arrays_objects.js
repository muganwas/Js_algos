// let tings = {
//     name: "Roger",
//     age: 24,
//     numbers: [1, 2, 3, 4, 5]
// };

// let o = Object.entries(tings);
// const t = "Jangu nkufunire ka baby!!";

// function alphanumeric(s) {
//     let regex = /[a-z0-9]/i;
//     return regex.test(s);
// }
// for (let i in t) {
//     const s = t[i];
//     console.log(s + " is alphanumeric: ", alphanumeric(s));
// }

// console.log(Object.hasOwnProperty(tings))
// console.log(o)

// const a_1 = [2, 3, 4, 5, 6, 3];
// const a_2 = [36, 16, 9, 25, 4, 12];

// function areSquaresOf(o, s) {
//     const original = [...o];
//     const squares = [...s];
//     const st = "ggaagg";
//     for (let l in st) {
//         console.log(l)
//     }
//     if (!Array.isArray(original) || !Array.isArray(squares)) return false;
//     if (original.length !== squares.length) return false;
//     var result = true
//     const original_occurances = {};
//     const square_occurances = {};
//     original.forEach(e => {
//         original_occurances[e] = (original_occurances[e] || 0) + 1;
//     });
//     squares.forEach(e => {
//         square_occurances[e] = (square_occurances[e] || 0) + 1;
//     });
//     original.forEach(e => {
//         if (!squares.find(i => i === e * e))
//             return result = false;
//         if (original_occurances[e] !== square_occurances[e * e])
//             return result = false;
//     });
//     return result;
// }
// console.log("a_2 has squares of a_1", areSquaresOf(a_1, a_2));

// function sameFrequency(i_1, i_2) {
//     if (typeof i_1 !== "number" || typeof i_2 !== "number") return false;
//     let n_1 = String(i_1);
//     let n_2 = String(i_2);
//     if (n_1.length !== n_2.length) return false;
//     let n_1_frequency = {};
//     let n_2_frequency = {};
//     let sf = true;
//     for (let l in n_1) {
//         n_1_frequency[n_1[l]] = (n_1_frequency[n_1[l]] || 0) + 1;
//     }
//     for (let l in n_2) {
//         n_2_frequency[n_2[l]] = (n_2_frequency[n_2[l]] || 0) + 1;
//     }
//     Object.keys(n_2_frequency).forEach(n => {
//         console.log(n)
//         if (n_2_frequency[n] !== n_1_frequency[n]) sf = false;
//     });
//     return sf;
// }

// function averagePair(arr, t_a) {
//     if (!Array.isArray(arr) || arr.length < 1 || typeof t_a !== "number") return false;
//     let fixed = 0;
//     let i = 1;
//     while (fixed < arr.length && i < arr.length) {
//         if ((arr[i] + arr[fixed]) / 2 === t_a) return true;
//         i++;
//         if (i === (arr.length - 1)) {
//             fixed++;
//             i = fixed + 1;
//             if (fixed === arr.length - 1) return false;
//         }
//     }
//     return false;
// }

// console.log(averagePair([1, 2, 3, 6, 8, 10], 7));

// function isSubsequence(str_1, str_2) {
//     if ((typeof str_1 !== "string" || typeof str_2 !== "string") || (str_1.length > str_2.length) || (str_1.length === 0 || str_2.length === 0)) return false;
//     for (let i = 0; i < str_1.length; i++) {
//         let indx = str_2.indexOf(str_1[i]);
//         if (indx === -1) return false;
//         str_2 = str_2.slice(indx + 1, str_2.length);
//     }
//     return true;
// }

// console.log(isSubsequence("mew", "welcome"));

// function maxSubarraySum(arr, len) {
//     if (!Array.isArray(arr) || typeof len !== "number" || !len) return null;
//     let loc = 0;
//     let loc_1 = len;
//     let sum = null;
//     while (loc_1 <= arr.length) {
//         let temp_arr = arr.slice(loc, loc_1);
//         sum = Math.max(temp_arr.reduce((partialSum, a) => partialSum + a, 0), sum);
//         loc++;
//         loc_1++;
//     }
//     return sum;
// }

// console.log(maxSubarraySum([1, 2, 3, -4, 5, 6, 7, -8], 3));

// function minSubArrayLen(arr, n) {
//     let start = 0;
//     let i = 1;
//     let arrOfLengths = [];
//     if (!Array.isArray(arr) || typeof n !== "number" || n < 0 || arr.find(n => n < 0) !== undefined) return 0;
//     while (start < arr.length) {
//         if (arr[i] >= n) return 1;
//         let sliced = arr.slice(start, i + 1);
//         if (sliced.reduce((p, i) => p + i, 0) >= n) arrOfLengths.push(sliced.length);
//         if (i >= arr.length - 1) {
//             start++;
//             i = start + 1;
//         }
//         else
//             i++;
//     }
//     return arrOfLengths.sort()[0] || 0;
// }

// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));

// function findLongestSubstring(str) {
//     // Find longest sub-string with all distinct characters
//     if (typeof str !== 'string' || str.length === 0) return 0;
//     let str_obj = {};
//     let longest = 0;
//     let fxd = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str_obj[str[i]]) {
//             fxd++;
//             i = fxd;
//             str_obj = {};
//         }
//         str_obj[str[i]] = (str_obj[str[i]] || 0) + 1;
//         longest = Math.max(Object.keys(str_obj).length, longest);
//     }
//     return longest;
// }

// console.log(findLongestSubstring("thisisawesome"));