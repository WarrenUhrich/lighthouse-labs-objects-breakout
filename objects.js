// In JS we can create an object using {}
// Objects consist of key-value pairs!

// Object
const student = {
    // Object Property
    // key: value
    'name': 'Ivan',
    'school': 'Lighthouse Labs',
    student_no: 3,
    is_school_admin: false
};

console.log('student', student);

const greeting = `Hello, ${student.name}!`;
console.log('greeting', greeting);

// I want to add a new property...
// I want it to be called year, and to store 2024.

student.year = 2024;
console.log('student after .year example', student);

// I want to access a property, but I have a variable representing
// the key... I don't have the string itself.

const keyName = 'school';
const studentSchool = student[keyName];
console.log('studentSchool', studentSchool);

// I want to print to the terminal every key-value pair in our object.
// We use for...in to loop through objects!
// This type of loop gives us the KEY for each pair!
for(const key in student) {
    const value = student[key];

    console.log(`${key} => ${value}`);
}
