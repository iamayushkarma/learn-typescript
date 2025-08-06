/**
 * TypeScript: `never` Data Type Explained
 * ----------------------------------------
 * The `never` type represents values that never occur.
 * A function that never returns (throws error or has infinite loop) is `never`.
 *
 * It is used for unreachable code, exhaustive checks, and safety in functions.
 */

// 🔹 Example 1: Function that always throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// Usage:
// throwError("Something went wrong!");

// 🔹 Example 2: Function with infinite loop (never returns)
function infiniteLoop(): never {
  while (true) {
    console.log("Looping forever...");
  }
}

// Usage (Don't actually run this or it will hang your app):
// infiniteLoop();

// 🔹 Example 3: Exhaustiveness checking in switch-case
// Let's define a union type:
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * 5 * 5;
    case "square":
      return 5 * 5;
    case "triangle":
      return 0.5 * 5 * 5;
    default:
      const _exhaustiveCheck: never = shape; // ✅ Ensures all cases are handled
      return _exhaustiveCheck; // Compilation error if any case is missed
  }
}

// 🔸 Difference Between `void` and `never`
// void  => function returns nothing (but still exits)
// never => function NEVER returns (crashes or loops forever)

function voidExample(): void {
  console.log("I return nothing, but I do end.");
}

function neverExample(): never {
  throw new Error("I crash and never return");
}

// 🔹 Useful Tip:
// You don't manually assign `never` to a variable.
// It is mostly used by the compiler for unreachable code and safety.

// 🔹 Example: Unreachable code check
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value);
  } else if (typeof value === "number") {
    console.log("Number:", value);
  } else {
    // This should never happen
    const unexpected: never = value; // Error if any new type is added to the union
  }
}

// 🔹 Summary:
/**
 * - Use `never` for functions that never return.
 * - Use it for exhaustive checks to ensure type safety.
 * - You typically don't assign `never` manually; TypeScript infers it.
 */
