function echo<T>(value: T) {
  return value;
}
let val1 = echo(1);
let val2 = echo("Codeable");
let val3 = echo(true);
let val4 = echo([1, 2, 3]);

function getFirstElement<T>(array: T[]): T {
  return array[0];
}
const testNumber = getFirstElement([1, 2, 3, 4]);
console.log(testNumber);
const testString = getFirstElement(["a", "b", "c"]);
console.log(testString);
const testObject = getFirstElement([
  { id: 1, name: "Jota" },
  { id: 2, name: "Harold" },
]);
// console.log(testObject);

function mergeObjects<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const mergedObj = mergeObjects({ name: "John", age: 45 }, { age: 30 });
console.log(mergedObj);

class DataHolder<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getValue(): T {
    return this.data;
  }

  setValue(value: T): void {
    this.data = value;
  }
}
const stringHolder = new DataHolder("Hola mundo!");
console.log(stringHolder.getValue());
stringHolder.setValue("Feliz fin de semana");

const numberHolder = new DataHolder(13);
numberHolder.setValue(99);
