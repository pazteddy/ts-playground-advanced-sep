class Student {
  // Static definitions
  private static nextId = 1;
  private static generateId(): number {
    return this.nextId++;
  }
  static totalStudents: number = 0;

  name: string;
  age: number;
  private _id: number | null;

  protected get id() {
    return this._id;
  }

  constructor(
    { name, age }: { name: string; age: number },
    generateId: boolean = true
  ) {
    this.name = name;
    this.age = age;
    this._id = generateId ? Student.generateId() : null;
    Student.totalStudents++;
  }

  sayHi(): void {
    console.log(`Hi! My name is ${this.name}`);
  }
}

class Graduate extends Student {
  private _graduateId: number;

  constructor({ name, age }: { name: string; age: number }) {
    super({ name, age }, false);
    this._graduateId = Graduate.generateGraduateId();
  }

  private static nextGraduateId = 1;
  private static generateGraduateId(): number {
    return this.nextGraduateId++;
  }

  getGraduateId() {
    return this._graduateId;
  }
}
const testino = new Student({ age: 33, name: "Testino" });
console.log(testino);
// testino.sayHi();
const angel = new Student({ age: 33, name: "Angel" });
console.log(angel);
const dana = new Student({ age: 33, name: "Dana" });
// console.log(Student.totalStudents);
console.log(dana);
const graduateEsteve = new Graduate({ name: "Esteve", age: 34 });
console.log(graduateEsteve);
const probino = new Student({ age: 33, name: "Probino" });
console.log(probino);

// Clase define una interfaz
// const camila: Student = {
//   name: "camila",
//   age: 34,
//   sayHi(): void {
//     console.log("Hola desde Camila");
//   },
// };

// Sobreescritura de metodos
class HumanTest {
  eat(): void {
    console.log("eating...");
  }
  sleep(): void {
    console.log("Human is sleeping");
  }
}

class Baby extends HumanTest {
  // Sobrescribir un método innecesariamente (ya existía)
  override eat(): void {
    console.log("eating baby...");
  }

  // Quise sobrescribir sleep pero tuve un typo
  override sleep(): void {
    console.log("Baby is sleeping");
  }
}
