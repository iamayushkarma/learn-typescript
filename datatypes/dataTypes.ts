//- ✅ Primitive Types

//> string
let name: string = "Ayush";

//> number
let age: number = 25;

//> boolean
let isActive: boolean = true;

//> null
let nothing: null = null;

//> undefined
let notAssigned: undefined = undefined;

//> bigint
let bigIntNum: bigint = 9007199254740991n;

//> symbol
let uniqueSymbol: symbol = Symbol("id");

//- ✅ Object Types

//> object
let person: { name: string; age: number } = { name: "Ayush", age: 25 };

//> array (number[])
let arr1: number[] = [1, 2, 3];

//> array (Array<string>)
let arr2: Array<string> = ["a", "b"];

//> tuple
let tupleData: [string, number] = ["hello", 1];

//> Map
let mapData: Map<string, number> = new Map();

//> Set
let setData: Set<number> = new Set();

//> Date
let date: Date = new Date();

//> RegExp
let regex: RegExp = /abc/;

//- ✅ Function Types

//> function declaration
function add(x: number, y: number): number {
  return x + y;
}

//> function expression
const greet: (name: string) => string = (name) => `Hello ${name}`;

//- ✅ Special Types

//> any
let anything: any = "can be anything";

//> unknown
let notKnown: unknown = 42;

//> never
function neverReturns(): never {
  throw new Error("This will never return");
}

//> void
function noReturn(): void {
  console.log("No return");
}

//> undefined
let u: undefined = undefined;

//> null
let n: null = null;

//- ✅ Union and Intersection Types

//> union
let unionType: string | number = "hello";

//> intersection
type A = { name: string };
type B = { age: number };
let intersectionType: A & B = { name: "Ayush", age: 25 };

// ✅ Literal Types

//> string literal
let direction: "left" | "right" = "left";

//> boolean literal
let yesOrNo: true | false = true;

//- ✅ Enum Types

//> enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Green;

//- ✅ Custom Types (Type Aliases & Interfaces)

//> type alias
type User = { username: string; id: number };

//> interface
interface Product {
  name: string;
  price: number;
}

let user: User = { username: "ayush", id: 1 };
let product: Product = { name: "Laptop", price: 50000 };

//- ✅ Class Types

//> class
class Car {
  constructor(public brand: string) {}
}
let myCar: Car = new Car("Toyota");

//- ✅ Generic Types

//> generic function
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<number>(123);

//> generic array
let arrGeneric: Array<string> = ["one", "two"];
