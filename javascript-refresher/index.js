const { co } = require("co");

console.log('Hello, World!');

// Declaring variables

// Always use cont  to declare variables
const myVar1 = 6;

console.log(myVar1);

const myVar2 = 7;

console.log(myVar2);

// Primtive data types

// Reference data types

// Arrays
const myArray = [1, 2, 3, 4, 5, 'string'];

console.log(myArray.length);
console.log(myArray);

// Jason objects
const myObject = {
  myKey: 'myValue'
};
console.log(myObject.myKey);

// Functions
function myFunc(num1, num2) {
    return num1 + num2;
}

console.log(myFunc('1', 2));

const add = (num1, num2) => num1 + num2;

console.log(add(1, 2));

const superAdd = (addFunc) => {
    const result = addFunc(1, 2);
    return result + 4;
}

console.log(superAdd(add));

// Ternaries

const color = 'red';

// if (color === 'red') {
//     console.log('Color is red');
// } else {
//     console.log('Color is not red');
// }

color === 'red' ? console.log('Color is red') : console.log('Color is not red');

// Spread operator

const myArray1 = [1, 2, 3, 4, 5];

const myArray2 = [0, ...myArray1, 6, 7, 8, 9, 10];

console.log(myArray2);

// forEeach

// const numbers = [1, 2, 3, 4, 5, 26];

// let numbersX2 = [];

// numbers.forEach((number) => numbersX2.push(number * 2));

// console.log(numbersX2);

// map
const numbers = [1, 2, 3, 4, 5, 26];

const numbersX2 = numbers.map((number) => number * 2);

console.log(numbersX2);

const employees = [
    {name: 'Mike', title: 'Professor', salary: 100000, deparment: ['Computer Science']},
    {name: 'Madhuri', title: 'Professor', salary: 200000, deparment: ['Computer Science']},
    {name: 'Cezary', title: 'Chair', salary: 300000, deparment: ['Computer Science', 'Mathematics']}
];

const getDepartment = (employee) => employee.deparment;

const departments = employees.flatMap(getDepartment);

console.log(departments);

// filter

const isChair = (employee) => employee.title === 'Chair';

const chairs = employees.filter(isChair);

console.log(chairs);