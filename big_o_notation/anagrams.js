function validAnagram(word_1, word_2) {
    // add whatever parameters you deem necessary - good luck!
    const word_1_occurances = {};
    const word_2_occurances = {};
    let isAnagram = true;

    //if words have different lengths return false
    if (word_1.length !== word_2.length) return false;
    // if words are empty stringtrue immediately
    if (word_1.length === 0 && word_2.length === 0) return isAnagram;
    // if words are exactly the same return false
    if (word_1 === word_2) return false;

    for (let l in word_1) {
        const ll = word_1[l];
        word_1_occurances[ll] = (word_1_occurances[ll] || 0) + 1;
    }
    for (let l in word_2) {
        const ll = word_2[l];
        word_2_occurances[ll] = (word_2_occurances[ll] || 0) + 1;
    }

    Object.keys(word_1_occurances).forEach(e => {
        if (word_1_occurances[e] !== word_2_occurances[e]) {
            isAnagram = false;
            return;
        }
    });
    return isAnagram;
}

const w_1 = "car";
const w_2 = "rac";
console.log(validAnagram(w_1, w_2));