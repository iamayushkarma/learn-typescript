// let var-name: data-type = assigned value
let numOne: number = 10;
let numTwo: number = 20;

//> don’t have to explicitly define the type every time. If we assign a value to a variable at the time of declaration, TypeScript will automatically figure out the type.

//> Example of Type Inference
let total = numOne + numTwo;
// TypeScript sees you're adding two numbers (number + number)
// So, it infers that total is also a number
console.log(total); //> output 30

//- Types of numbers
//> Integer
let count: number = 100;

//> Floating-point
let pi: number = 3.14;

//> Negative number
let temperature: number = -5;

//> Exponential
let bigNum: number = 1.5e6; // 1.5 × 10^6 = 1500000

//> Hexadecimal (base 16)
// Hex format (prefix: 0x)
let hex: number = 0xff; // 255

//> Binary (base 2)
// Binary format (prefix: 0b)
let binary: number = 0b1010; // 10

// Octal format (prefix: 0o)
//> Octal (base 8)
let octal: number = 0o744; // 484

//- Conversion to number in TypeScript

//> Using Number()
let str1: string = "123";
let num1: number = Number(str1); // 123
console.log(num1);

//> Using Unary +
let str2: string = "456";
let num2: number = +str2; // 456
console.log(num2);

//> Using parseInt()
let str3: string = "789";
let num3: number = parseInt(str3); // 789
console.log(num3);

//> Using parseFloat()
let str4: string = "3.14";
let num4: number = parseFloat(str4); // 3.14
console.log(num4);

//> From boolean
let boolTrue: boolean = true;
let boolFalse: boolean = false;
let num5: number = Number(boolTrue); // 1
let num6: number = Number(boolFalse); // 0
console.log(num5, num6);

//> From null
let nullValue: null = null;
let num7: number = Number(nullValue); // 0
console.log(num7);

//> From undefined
let undefinedValue: undefined = undefined;
let num8: number = Number(undefinedValue); // NaN
console.log(num8);

//> Invalid conversion (string that is not a number)
let invalidStr: string = "hello";
let num9: number = Number(invalidStr); // NaN
console.log(num9);
