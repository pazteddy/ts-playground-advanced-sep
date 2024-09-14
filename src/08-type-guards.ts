let value:
  | Date
  | null
  | undefined
  | "manzana"
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  value;
} else if (typeof value === "string") {
  value;
  // Specific value check
} else if (value === null) {
  value;
  // Truthy/falsy check
} else if (!value) {
  value;
} else if (Array.isArray(value)) {
  value;
  // Property presence check
} else if ("dateRange" in value) {
  value;
} else {
  value;
}

// Type Guards personalizados
interface Student {
  name: string;
  age: number;
}

// La función de comprobación (el Type Guard)
// function isStudent(value: any): value is Student {
//   return (
//     value &&
//     typeof value === "object" &&
//     "name" in value &&
//     typeof value["name"] === "string" &&
//     "age" in value &&
//     typeof value["age"] === "number"
//   );
// }
// if (isStudent(testinoGuard)) {
//   // Si llegamos aquí sabemos que 'testino' cumple con Student
//   testinoGuard;
// }else{
//   throw Error("No es el tipo de dato requerido");
// }

let sebastian: any = { name: "Sebastian", age: 33 };

function assertsIsStudent(value: any): asserts value is Student {
  if (
    !(
      value &&
      typeof value === "object" &&
      "name" in value &&
      typeof value["name"] === "string" &&
      "age" in value &&
      typeof value["age"] === "number"
    )
  ) {
    throw new Error(`Value is not type-equivalent to Student`);
  }
}
assertsIsStudent(sebastian);
console.log(sebastian);
