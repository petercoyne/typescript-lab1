// Create a function which accepts a string parameter, and returns a count of the
// number of characters in that string. For example, if the string provided as an input
// is “test 1” then the count returned is 6.

let countChars = function (str: string): number {
    return str.length;
};

console.log(countChars("Testing"));

// Create a function which accepts a string parameter, and returns a count of the
// number of characters in that string, excluding spaces. For example, if the string
// provided as an input is “test 1” then the count returned is 5.

let countCharsExSpace = function (str: string): number {
    let count: number = 0;
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

let countCharsGeneric = function (str: string, excludeSpace?: boolean): number {
    if (excludeSpace) {
        let count: number = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                count++;
            }
        }
        return count;
    } else {
        return str.length;
    }
};

console.log(countCharsGeneric("Testing 123", true));