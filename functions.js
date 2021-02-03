// Create a function which accepts a string parameter, and returns a count of the
// number of characters in that string. For example, if the string provided as an input
// is “test 1” then the count returned is 6.
var countChars = function (str) {
    return str.length;
};
console.log(countChars("Testing"));
// Create a function which accepts a string parameter, and returns a count of the
// number of characters in that string, excluding spaces. For example, if the string
// provided as an input is “test 1” then the count returned is 5.
var countCharsExSpace = function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
};
console.log(countCharsExSpace("Testing 123"));
// Create a function which accepts a string parameter, and returns a count of the
// number of characters in that string, excluding spaces. For example, if the string
// provided as an input is “test 1” then the count returned is 5.
var countCharsGeneric = function (str, excludeSpace) {
    if (excludeSpace) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                count++;
            }
        }
        return count;
    }
    else {
        return str.length;
    }
};
console.log(countCharsGeneric("Testing 123", false));
