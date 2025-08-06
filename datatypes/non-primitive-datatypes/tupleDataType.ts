// TUPLES IN TYPESCRIPT

//> What is a Tuple?
// A tuple is a fixed-length array with specific types in a specific order.

//> Basic Tuple
let person: [string, number] = ["Ayush", 22];
console.log("Name:", person[0]); //> Ayush
console.log("Age:", person[1]); //> 22

//> Tuple with more elements
let userInfo: [string, number, boolean] = ["Rehan", 30, true];
console.log(userInfo); //> ["Rehan", 30, true]

//> Accessing tuple values
let name = userInfo[0]; //> string
let age = userInfo[1]; //> number
let isActive = userInfo[2]; //> boolean

//> Tuple with optional elements
let optionalTuple: [string, number?] = ["John"];
console.log(optionalTuple); //> ["John"]

//> Named Tuples (for better readability)
let employee: [name: string, salary: number] = ["Alice", 50000];
console.log(`Employee ${employee[0]} earns ₹${employee[1]}`);

//> Tuple as return type from a function
function getCoordinates(): [number, number] {
  return [25.5, 78.2];
}
let [x, y] = getCoordinates();
console.log(`X: ${x}, Y: ${y}`); //> X: 25.5, Y: 78.2

//> Using tuple with push (not recommended if strict)
let data: [string, number] = ["Item", 5];
data.push(10); // Technically allowed but goes against tuple safety
console.log(data); //> ["Item", 5, 10]

//> Tuple in array form (array of tuples)
let coordinates: [number, number][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(coordinates);

//> Destructuring tuple
let rgb: [number, number, number] = [255, 0, 127];
let [r, g, b] = rgb;
console.log(`Red: ${r}, Green: ${g}, Blue: ${b}`); //> Red: 255, Green: 0, Blue: 127
