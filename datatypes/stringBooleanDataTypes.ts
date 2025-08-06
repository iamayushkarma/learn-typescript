// --------------------------------------
// NULL & UNDEFINED in TypeScript
// --------------------------------------

// =========================
// What is Null Data Type?
// =========================
//> "null" represents an intentional absence of any object value.
//> You manually assign null to a variable to say: "this should be empty."

let userData: null = null;
console.log(userData); //> null

// =========================
// How to Use Null
// =========================
//> Assign it to a variable to clear or reset its value
let selectedProduct: string | null = "Book";
selectedProduct = null; // Resetting to no selection

//> Use in conditional checks
if (selectedProduct === null) {
  console.log("No product selected");
}

// =========================
// What is Undefined Data Type?
// =========================
//> "undefined" means a variable has been declared but has not yet been assigned a value.

let myVar: undefined;
console.log(myVar); //> undefined

//> It’s also the default return value of a function that doesn’t explicitly return anything

function doNothing(): void {
  console.log("Hello");
}
let result = doNothing(); //> undefined

// =========================
// How to Use Undefined
// =========================
//> Checking if variable is initialized
let email: string | undefined;
if (email === undefined) {
  console.log("Email is not provided");
}

//> Optional properties in objects
type User = {
  name: string;
  age?: number; // 'age' can be undefined
};

const user1: User = { name: "Ayush" };
console.log(user1.age); //> undefined

// =========================
// Possible Values
// =========================
// Only `null` and `undefined` are valid values for these types.

let a: null = null;
// let b: null = undefined; // ❌ Error
let c: undefined = undefined;
// let d: undefined = null; // ❌ Error

// =========================
// Practical Use-cases
// =========================
//> null is set intentionally; undefined often comes from missing assignments

// - null: Resetting a field, clearing a selection
// - undefined: Uninitialized variables, missing function arguments or object properties

// =========================
// Difference Summary
// =========================
console.log(null == undefined); // true  (loose equality)
console.log(null === undefined); // false (strict equality)

// =========================
// typeof Operator
// =========================
console.log(typeof null); //> "object" (JavaScript quirk)
console.log(typeof undefined); //> "undefined"

// =========================
// Tips
// =========================
//> Prefer using strict equality (===) to avoid bugs.
//> Use union types (`string | null | undefined`) for optional values.
//> Don't confuse "null" (intentional) with "undefined" (missing or not yet defined).
