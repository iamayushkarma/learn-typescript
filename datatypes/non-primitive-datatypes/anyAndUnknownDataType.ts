//> 1. `any` Type - Accepts Anything (disables type checking)
let anything: any = 5;
anything = "hello";
anything = true;
anything = { key: "value" };

// No compile-time error - can do anything
console.log(anything.toUpperCase()); // ✅ Allowed, but risky if anything is not a string

//> Why `any` is Dangerous?
function risky(input: any) {
  // TypeScript allows this, even if it's not safe
  console.log(input * 2);
}
risky("string"); // Runtime error, no compile error

//> 2. `unknown` Type - Safer Alternative to `any`
let unknownValue: unknown = 10;
unknownValue = "hello";
unknownValue = false;
unknownValue = [1, 2, 3];

// Can't access properties or methods directly
// console.log(unknownValue.toUpperCase()); ❌ Error: Object is of type 'unknown'

//> To use `unknown`, we must check its type first
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // ✅ Safe
}

//> 3. Use Case: Safe JSON Parsing
function safeParse(json: string): unknown {
  return JSON.parse(json);
}

const data: unknown = safeParse('{"name": "Ayush"}');

if (typeof data === "object" && data !== null && "name" in data) {
  console.log((data as { name: string }).name);
}

//> 4. Type Assertions with `unknown`
let val: unknown = "TypeScript";
let strLength: number = (val as string).length;
console.log(strLength);

//> 5. Type Narrowing with `unknown`
function handle(value: unknown) {
  if (typeof value === "number") {
    console.log("Number:", value.toFixed(2));
  } else if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Other type:", value);
  }
}
handle(42);
handle("test");
handle(true);

//> 6. Difference in Assignments
let anyVar: any = "hello";
let unknownVar: unknown = "hello";

// any can be assigned to anything
let str1: string = anyVar; // ✅ OK

// unknown must be type-asserted or checked
// let str2: string = unknownVar; ❌ Error
let str2: string = unknownVar as string; // ✅ OK with assertion

//> 7. unknown in Function Parameters
function processValue(input: unknown) {
  if (typeof input === "boolean") {
    console.log("Boolean value:", input);
  } else {
    console.log("Other value:", input);
  }
}
processValue(true);
processValue("string");

//> 8. `unknown` in Generics (safe default)
function getValue<T = unknown>(val: T): T {
  return val;
}
console.log(getValue("hi"));
console.log(getValue(123));

//> 9. Avoid `any` in real projects
// Use `unknown` if type is not known yet and narrow/check before using

//> Summary:
// `any` = trust me, I know what I'm doing (disables safety).
// `unknown` = be cautious, verify before use (safe & recommended).
