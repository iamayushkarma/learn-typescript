//> 1. Basic Object Type Declaration
let person: { name: string; age: number } = {
  name: "Ayush",
  age: 25,
};
console.log(person);

//> 2. Optional Properties
let user: { name: string; email?: string } = {
  name: "Karma",
};
console.log(user);

//> 3. Nested Objects
let employee: {
  id: number;
  name: string;
  department: {
    title: string;
    floor: number;
  };
} = {
  id: 101,
  name: "Dev",
  department: {
    title: "Engineering",
    floor: 5,
  },
};
console.log(employee.department.title);

//> 4. Using Type Alias for Reusability
type Car = {
  brand: string;
  model: string;
  year: number;
};

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(myCar);

//> 5. Index Signatures (Dynamic Keys)
type Scores = {
  [subject: string]: number;
};

let marks: Scores = {
  math: 95,
  english: 88,
  science: 76,
};
console.log(marks);

//> 6. Readonly Properties
type Config = {
  readonly version: string;
  setting: boolean;
};

let config: Config = {
  version: "1.0.0",
  setting: true,
};
// config.version = "2.0.0"; ❌ Error: Cannot assign to 'version' because it is a read-only property

//> 7. Object Destructuring with Type Annotations
const product: { name: string; price: number } = {
  name: "Laptop",
  price: 50000,
};

const { name, price }: { name: string; price: number } = product;
console.log(`Product: ${name}, Price: ₹${price}`);

//> 8. Using Interfaces (Alternative to Type Alias)
interface Book {
  title: string;
  author: string;
  pages?: number; // optional
}

let myBook: Book = {
  title: "TypeScript Basics",
  author: "Jane Doe",
};
console.log(myBook);

//> 9. Object as Function Parameters
function printUserInfo(user: { username: string; age: number }) {
  console.log(`${user.username} is ${user.age} years old.`);
}

printUserInfo({ username: "AyushKarma", age: 23 });

//> 10. Combining Types (Intersection)
type Engine = {
  horsepower: number;
};

type Vehicle = {
  wheels: number;
};

type SportsCar = Engine & Vehicle;

const ferrari: SportsCar = {
  horsepower: 650,
  wheels: 4,
};
console.log(ferrari);
