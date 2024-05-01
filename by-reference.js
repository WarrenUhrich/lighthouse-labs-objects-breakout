// Primitives are handled by-value
// Objects (more complex data-structures) are handled by-reference

let myString = 'Hello, World!';
myString = 'Goodbye, World!';

let myString2 = myString; // myString2 = 'Goodbye, World!'
myString2 = 'Lighthouse Labs';

console.log(
    `
    Are these the same?
    
    myString  = ${myString}
    myString2 = ${myString2}
    `
);

 // "Pointer"
const myObj = {
    name: 'JavaScript',
    dob: 1995,
    standard: 'ECMA'
};

myObj.type = 'interpreted';

console.log('myObj', myObj);

const mySecondObj = myObj;
mySecondObj.clRuntime = 'NodeJS';

console.log();
console.log('Are these the same?');
console.log('myObj:', myObj);
console.log('mySecondObject:', mySecondObj);
