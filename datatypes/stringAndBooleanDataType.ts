// let var-name: data-type = assigned value
let firstName: string = "Ayush";
let lastName: string = "Karma";

//> Don’t have to explicitly define the type every time. If we assign a string value at the time of declaration, TypeScript infers it.
let fullName = firstName + " " + lastName;
console.log(fullName); //> Output: Ayush Karma

//> Template literals (backticks ``) allow multi-line strings and embedded expressions
let age: number = 22;
let intro: string = `My name is ${fullName} and I am ${age} years old.`;
console.log(intro);

//> String concatenation
let greeting: string = "Hello" + ", " + firstName + "!";
console.log(greeting); //> Hello, Ayush!

//- Common String Methods

let message: string = "TypeScript is powerful";

//> Length of string
console.log(message.length); //> 22

//> Convert to uppercase
console.log(message.toUpperCase()); //> TYPESCRIPT IS POWERFUL

//> Convert to lowercase
console.log(message.toLowerCase()); //> typescript is powerful

//> Check if string includes a substring
console.log(message.includes("power")); //> true

//> Find index of a substring
console.log(message.indexOf("Script")); //> 4

//> Slice part of string
console.log(message.slice(0, 10)); //> TypeScript

//> Replace part of string
console.log(message.replace("powerful", "awesome")); //> TypeScript is awesome

//> Split string into array
let words: string[] = message.split(" ");
console.log(words); //> [ 'TypeScript', 'is', 'powerful' ]

//> Trim whitespace
let spaced: string = "  Hello World  ";
console.log(spaced.trim()); //> Hello World

//> Access individual characters
console.log(message[0]); //> T
console.log(message.charAt(5)); //> c

//> Repeat string
let stars: string = "*".repeat(10);
console.log(stars); //> **********

//- Converting other types to string

//> Using String()
let num: number = 123;
let strNum: string = String(num);
console.log(strNum); //> "123"

//> Using toString()
let bool: boolean = true;
let strBool: string = bool.toString();
console.log(strBool); //> "true"

//> Template literals
let value: number = 3.14;
let strValue: string = `${value}`;
console.log(strValue); //> "3.14"

//> null and undefined
let nullVal: null = null;
console.log(String(nullVal)); //> "null"

let undefVal: undefined = undefined;
console.log(String(undefVal)); //> "undefined"

//> Edge Case: non-string toString()
let arr = [1, 2, 3];
console.log(arr.toString()); //> "1,2,3"

// --------------------------------------
// BOOLEAN Data Type
// --------------------------------------

// let var-name: boolean = true/false
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn); //> true
console.log(isAdmin); //> false

//> Type inference (TS automatically assigns type boolean)
let hasAccess = true;

//> Boolean conditions
if (isLoggedIn) {
  console.log("User is logged in.");
} else {
  console.log("User is not logged in.");
}

//> Using comparison operators
let ageLimit: number = 18;
let isAdult: boolean = age >= ageLimit;
console.log(isAdult); //> true

//> Boolean from expressions
let hasName: boolean = fullName.length > 0;
console.log(hasName); //> true

//- Converting other types to boolean

//> Using Boolean()
console.log(Boolean(1)); //> true
console.log(Boolean(0)); //> false
console.log(Boolean("hello")); //> true
console.log(Boolean("")); //> false
console.log(Boolean(undefined)); //> false
console.log(Boolean(null)); //> false
console.log(Boolean([])); //> true
console.log(Boolean({})); //> true

//> Double NOT (!!) shorthand
// console.log(!!"non-empty"); //> true
// console.log(!!""); //> false
