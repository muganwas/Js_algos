class HashMap {
    constructor(len = 53) {
        this.hash = new Array(len);
    }
    generateHash(key) {
        let valLength = key.length;
        let hashTotal = 0;
        let hashKey = 93;
        for (let i = 0; i < Math.min(valLength, 100); i++) {
            const char = key[i];
            const val = char.charCodeAt(0) - 96;
            hashTotal = hashTotal * hashKey + val;
        }
        return hashTotal % this.hash.length;
    }
    set(key, value) {
        const hashKey = this.generateHash(key);
        if (!this.hash[hashKey]) this.hash[hashKey] = [];
        this.hash[hashKey].push([key, value]);
        return hashKey;
    }
    get(key) {
        const hashKey = this.generateHash(key);
        const hashArr = this.hash[hashKey];
        if (!hashArr || !hashArr.length) return undefined;
        if (hashArr.length === 1) return hashArr[0][1];
        const targetArr = hashArr.find(a => a[0] === key);
        return targetArr[1];
    }
    keys() {
        const newArray = this.hash.flat();
        const keys = [];
        newArray.forEach(e => keys.push(e[0]));
        return keys.filter((val, i, arr) => arr.indexOf(val) === i);
    }
    values() {
        const newArray = this.hash.flat();
        const vals = [];
        newArray.forEach(e => vals.push(e[1]));
        return [...new Set(vals)];
    }
}

const newHashmap = new HashMap();
newHashmap.set("white", "#fffff");
newHashmap.set("white", "#fefff");
newHashmap.set("black", "#00000");
newHashmap.set("red", "#fff00");
newHashmap.set("rad", "#fde00");
newHashmap.get("black");
console.log(newHashmap.keys());
console.log(newHashmap.values());