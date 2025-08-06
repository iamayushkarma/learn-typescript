// ✅ Basic Return Type in TypeScript
function add(a: number, b: number): number {
  return a + b; // returns a number
}

console.log(add(2, 3)); // Output: 5

// ✅ Return Type can be string, boolean, etc.
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Ayush")); // Output: Hello, Ayush

// ✅ Function that returns nothing => use 'void'
function logMessage(message: string): void {
  console.log("LOG:", message);
}

// ✅ Function that never returns (throws error or infinite loop) => use 'never'
function throwError(msg: string): never {
  throw new Error(msg);
}

// ✅ Union return type: Can return either a string or number
function getId(id: number | string): number | string {
  return id;
}

console.log(getId(10)); // Output: 10
console.log(getId("abc")); // Output: abc

// ✅ Return type as an object
function getUser(): { name: string; age: number } {
  return {
    name: "Ayush",
    age: 22,
  };
}

console.log(getUser());

// ✅ Return type as an array
function getFruits(): string[] {
  return ["apple", "banana", "mango"];
}

// ✅ Return type using Type or Interface
type User = {
  id: number;
  username: string;
};

function createUser(): User {
  return {
    id: 1,
    username: "ayush_karma",
  };
}

// ✅ Function with optional return (undefined or string)
function findUser(id: number): string | undefined {
  if (id === 1) return "Ayush";
  return undefined;
}

// ✅ Arrow function with return type
const multiply = (x: number, y: number): number => x * y;

// ✅ Callback with return type
function process(callback: () => string): void {
  const result = callback();
  console.log("Processed:", result);
}

process(() => "Done!");

// ✅ Inferred return type (TypeScript figures it out automatically)
function autoInferred(a: number, b: number) {
  return a + b; // TypeScript infers return type as number
}
