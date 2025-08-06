// bigint_and_symbol.ts

// -------------------------------
// 📘 BigInt Data Type in TypeScript
// -------------------------------

/**
 * What is BigInt?
 * - BigInt is a special numeric type that can represent integers with arbitrary precision.
 * - Useful when dealing with large integers beyond Number.MAX_SAFE_INTEGER (2^53 - 1).
 */

let regularNumber: number = 9007199254740991; // Max safe integer
let bigIntNumber: bigint = 9007199254740995n; // BigInt literal with 'n'

console.log("Regular Number:", regularNumber);
console.log("BigInt Number:", bigIntNumber);

// Adding two BigInts
let bigSum: bigint = 1000n + 2000n;
console.log("BigInt Sum:", bigSum);

// ❌ Can't mix bigint and number directly
// let invalid = bigIntNumber + regularNumber; // Error

// ✅ Need to convert number to BigInt first
let validSum = bigIntNumber + BigInt(regularNumber);
console.log("Valid Mixed Sum:", validSum);

// -------------------------------
// 📘 Symbol Data Type in TypeScript
// -------------------------------

/**
 * What is Symbol?
 * - Symbol is a primitive data type introduced in ES6.
 * - Used to create unique identifiers.
 * - Every Symbol is completely unique.
 */

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("Are symbols equal:", sym1 === sym2); // false

// Using Symbol as object keys
let user = {
  [sym1]: "Ayush",
  age: 25,
};

console.log("User with symbol key:", user[sym1]);
console.log("User object:", user);

// Symbols are not enumerable in for...in or JSON.stringify
for (let key in user) {
  console.log("Key:", key); // Only "age"
}

console.log("Stringified User:", JSON.stringify(user)); // {"age":25}

// -------------------------------
// ✅ Summary
// -------------------------------
// BigInt: For very large integers.
// Symbol: For creating unique, non-enumerable object keys.
