// bool
let theBoolean: boolean = false;
console.log("Boolean: " + theBoolean + ", ");

let theNumber: number = 7;
console.log("Number: " + theNumber + ", ");

let theString: string = "purple";
console.log("String: " + theString + ", ");

let theArray: number[] = [1,2,3];
for (let i = 0; i < theArray.length; i++) {
    console.log("Array(" + i + "): " + theArray[i] + ", ");
}
console.log("Array: " + theArray + ", ");

let theTuple: [number, string] = [4, "Four"];
console.log("Tuple: " + theTuple + ", ");

enum theEnum {
    lucky = 7,
    middleA = 440,
    ten = 10,
}
console.log("Enum: " + theEnum);

let enumThing: theEnum = theEnum.ten;
console.log("Enum item: " + enumThing);

let notSure: any = "String";
console.log(notSure);