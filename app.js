
function capitalize(str) {
    if (typeof str !== 'string') {
        return 'Input must be a string';
    }
    str = str.toLowerCase();
    var firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.slice(1);
}

function add7(num) {
    return num + 7;
}

function multiply(num) {
    return num * num;
}

function lastLetter(str) {
    return str.split('').pop();
}