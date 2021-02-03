// bool
var theBoolean = false;
console.log("Boolean: " + theBoolean + ", ");
var theNumber = 7;
console.log("Number: " + theNumber + ", ");
var theString = "purple";
console.log("String: " + theString + ", ");
var theArray = [1, 2, 3];
for (var i = 0; i < theArray.length; i++) {
    console.log("Array(" + i + "): " + theArray[i] + ", ");
}
console.log("Array: " + theArray + ", ");
var theTuple = [4, "Four"];
console.log("Tuple: " + theTuple + ", ");
var theEnum;
(function (theEnum) {
    theEnum[theEnum["lucky"] = 7] = "lucky";
    theEnum[theEnum["middleA"] = 440] = "middleA";
    theEnum[theEnum["ten"] = 10] = "ten";
})(theEnum || (theEnum = {}));
console.log("Enum: " + theEnum);
var enumThing = theEnum.ten;
console.log("Enum item: " + enumThing);
var notSure = "String";
console.log(notSure);
