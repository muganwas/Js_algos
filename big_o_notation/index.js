function addUpTo(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total
}

function addUpTo_2(n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000); // O(n)
let t2 = performance.now();
console.log(`Time Elapsed func 1: ${(t2 - t1) / 1000} seconds.`);

let t1_1 = performance.now();
addUpTo_2(1000000000);
let t2_1 = performance.now();
console.log(`Time Elapsed func 2: ${(t2_1 - t1_1) / 1000} seconds.`);


