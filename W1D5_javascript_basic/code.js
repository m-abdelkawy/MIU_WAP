function max(x, y) {
    if (x > y) return x;
    return y;
}

function maxOfThree(x, y, z) {
    return max(x, max(y, z));
}

function isVowel(char) {
    vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(char.toLowerCase()))
        return true;
    return false;
}

function sum(array) {
    return array.reduce((total, cur) => {
        return total + cur;
    }, 0)
}

function multiply(array) {
    return array.reduce((total, cur) => {
        return total * cur;
    }, 1)
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function findLongestWordLength(words) {
    return words.map(word => word.length).reduce((prev, cur) => max(prev, cur), 0);
}

function findLongWords(words, len){
return words.filter(word=>word.length > len).toString();
}