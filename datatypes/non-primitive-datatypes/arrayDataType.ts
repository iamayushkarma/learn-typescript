// - Basic Array Declaration
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Mango"];

// - Alternative Syntax using Generics
let booleans: Array<boolean> = [true, false, true];

// - Type Inference (Not recommended for mixed types)
let inferred = [1, 2, 3]; // inferred as number[]

// - Mixed Type Arrays (use union types)
let mixedArray: (number | string)[] = [1, "two", 3];

// - Array of objects
let users: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// - Multidimensional Arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// - Array Methods
let animals: string[] = ["cat", "dog", "elephant"];

console.log(animals.length); // 3
console.log(animals[0]); // cat
console.log(animals.includes("dog")); // true
console.log(animals.indexOf("elephant")); // 2

// Push, Pop, Shift, Unshift
animals.push("lion"); // adds to end
console.log(animals);
animals.pop(); // removes last
console.log(animals);
animals.shift(); // removes first
console.log(animals);
animals.unshift("tiger"); // adds to beginning
console.log(animals);

// - Looping through arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((fruit) => console.log(fruit));

for (const fruit of fruits) {
  console.log(fruit);
}

// - Array with optional elements
let optionalArray: (number | undefined)[] = [1, undefined, 3];

// - Readonly Arrays
let readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(4); // Error: Cannot modify readonly array

// - Tuples (Fixed-size arrays with known types)
let userTuple: [string, number] = ["Ayush", 22];
console.log(userTuple[0]); // Ayush
console.log(userTuple[1]); // 22

// - Destructuring
let [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// - Spread and Rest
let newNumbers = [...numbers, 6, 7];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7]

let [first, ...rest] = fruits;
console.log(first); // Apple
console.log(rest); // ["Banana", "Mango"]

// - Concat and Slice
let moreNumbers = [6, 7, 8];
let combined = numbers.concat(moreNumbers);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8]

let sliced = combined.slice(2, 5);
console.log(sliced); // [3, 4, 5]

// - Filtering and Mapping
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// - Reduce
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 15

// - Type assertions
let someArray: any = ["hello", 1, true];
let stringOnly = someArray as string[]; // Dangerous if wrong type

// - Array from function return
function getNumbers(): number[] {
  return [10, 20, 30];
}

let nums = getNumbers();
console.log(nums);
