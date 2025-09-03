
// Type, variable, and functions
const myVar: string = "Hello World!";

const add = (num1: number, num2: number): number => {
    return num1 + num2;
}

const result = add(1, 2);

// Arrays, Aliases, Union Types, and Literal Types
const addMulti = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const multiDimensionalArray: number[][] = [[1, 2, 3], [4, 5, 6]];

type FirstName = string;

const myFirstName: FirstName = "Mike";

type Department = 'Computer Science' | 'Mathematics' | 'English';

const myDepartment: Department = 'Computer Science';

// Object Types and Interfaces
// type Faculty = {
//     firstName: string, 
//     lastName: string, 
//     department: Department, 
//     isAdjunct: boolean, 
//     yearsEmployed: number
// };    

// type FacultyWithClasses = Faculty & {
//     classes: Class[]
// };

// type Class = {
//     name: string,
//     code: string,
//     semester: 'Fall' | 'Spring' | 'Summer'
// };

// const me: FacultyWithClasses = {
//     firstName: "Mike", 
//     lastName: "Weinberg", 
//     department: "Computer Science", 
//     isAdjunct: true, 
//     yearsEmployed: 4,
//     classes: [
//         {
//             name: 'Web Development with Advanced Typescript',
//             code: 'CS 4011',
//             semester: 'Spring'
//         }
//     ]
// };

interface Faculty {
    firstName: string, 
    lastName: string, 
    department: Department, 
    isAdjunct: boolean, 
    yearsEmployed: number
};

interface FacultyWithClasses extends Faculty {
    classes: Class[]
};

interface Class {
    name: string,
    code: string,
    semester: 'Fall' | 'Spring' | 'Summer'
};

// Enums

enum Semester {
    Fall = 'Fall', 
    Spring = 'Spring', 
    Summer = 'Summer'
}

// Generics