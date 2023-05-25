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

// function power(b, e) {
//     if (e === 0) return 1;
//     if (e === 1) return b;
//     return b * power(b, e - 1);
// }

// console.log(power(2, 4));

// function factorial(num) {
//     if (num === 0) return 1;
//     return num * factorial(num - 1);
// }
// console.log(factorial(4))

// function productOfArray(arr) {
//     if (arr.length === 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1));
// }

// console.log(productOfArray([1, 2, 3, 10]));

// function recursiveRange(n) {
//     if (n === 0) return 0;
//     return n + recursiveRange(n - 1);
// }
// console.log(recursiveRange(10));

// function fib(n) {
//     let arr = [1, 1];
//     if (n <= 2) return arr[n - 1];
//     function fillArray(n) {
//         if (arr.length === n) return;
//         arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//         return fillArray(n);
//     };
//     fillArray(n);
//     return arr[n - 1];
// }

// console.log(fib(35));

// function reverse(s) {
//     if (typeof s !== "string") return null;
//     let str_len = s.length;
//     let reversed = "";
//     (function ir(s) {
//         if (reversed.length === str_len) return;
//         reversed = reversed + s[s.length - 1];
//         return ir(s.substring(0, s.length - 1));
//     })(s);
//     return reversed;
// }

// console.log(reverse("awsome"));

// function isPalindrome(s) {
//     if (typeof s !== "string") return null;
//     let str_len = s.length;
//     let reversed = "";
//     (function ir(s) {
//         if (reversed.length === str_len) return;
//         reversed = reversed + s[s.length - 1];
//         return ir(s.substring(0, s.length - 1));
//     })(s);
//     return reversed === s;
// }

// console.log(isPalindrome("amanaplanacanalpandemonium"));

// const isOdd = val => val % 2 !== 0;

// function someRecursive(arr, callback) {
//     if (arr.length === 0) return false;
//     if (callback(arr[0])) return true;
//     return someRecursive(arr.slice(1), callback);
// }

// console.log(someRecursive([1, 2, 4, 4, 6], isOdd));

// function flatten(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return [];
//     const flattened = [];
//     (function fltn(r) {
//         if (r.length === 0) return;
//         if (Array.isArray(r[0]))
//             return fltn(r.concat(r[0]).slice(1));
//         flattened.push(r[0]);
//         return fltn(r.slice(1));
//     })(arr);
//     return flattened;
// }

// console.log(flatten([1, 2, 3, [4, 5, 6, [0, [1, 3, 5, 6, 777, 88]]]]));

// function capitalizeFirst(arr) {
//     let capitalized = [];
//     (function cp(arr) {
//         if (arr.length === 0) return capitalized;
//         capitalized.push(arr[0][0].toUpperCase() + arr[0].slice(1));
//         return cp(arr.slice(1));
//     })(arr);
//     return capitalized;
// }
// console.log(capitalizeFirst(["fork", "tin", "can"]));

// function nestedEvenSum(obj) {
//     const evenNums = [];
//     (function nev(obj) {
//         if (Object.keys(obj).length === 0) return;
//         const first = Object.values(obj)[0];
//         const firstKey = Object.keys(obj)[0];
//         if (typeof first === "object") {
//             delete obj[firstKey];
//             return nev(Object.assign(obj, first));
//         }
//         if (typeof first === "number" && first % 2 === 0) evenNums.push(first);
//         delete obj[firstKey];
//         return nev(obj);
//     })(obj);
//     return evenNums.reduce((st, n) => st + n, 0);
// }


// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// }

// var obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: 'car' }
// };

// console.log(nestedEvenSum(obj1));
// console.log(nestedEvenSum(obj2));

// function capitalizedWords(w) {
//     if (!Array.isArray(w)) return null;
//     const capitalized = [];
//     if (w.length) {
//         return capitalized.concat([w[0].toUpperCase()]).concat(capitalizedWords(w.slice(1)));
//     }
//     return capitalized;
// }

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//         if (typeof obj[key] === 'number') {
//             newObj[key] = obj[key].toString();
//         } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }


// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

//  console.log(stringifyNumbers(obj));

// function collectStrings(obj) {
//     const strArry = [];
//     if (Object.keys(obj).length) {
//         const first = Object.values(obj)[0];
//         const firstKey = Object.keys(obj)[0];
//         delete obj[firstKey];
//         if (typeof first === "string") return strArry.concat([first]).concat(collectStrings(obj));
//         if (typeof first === "object") return collectStrings(Object.assign(obj, first));
//         return collectStrings(obj);
//     }
//     return strArry;
// }

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(collectStrings(obj)) // ["foo", "bar", "baz"])