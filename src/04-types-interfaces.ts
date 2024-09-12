// type User = { name: string; email: string };
interface User {
  name: string;
  email: string;
}

type UserSuccess = readonly ["success", User];
type UserError = readonly ["error", Error];

type UserResponse = UserSuccess | UserError;

//-----------------------------------------//

function getUser(): UserResponse {
  if (Math.random() > 0.5) {
    return ["success", { name: "Testino", email: "testino@mail.com" }];
  } else {
    return ["error", new Error("Something went wrong!")];
  }
}

const result = getUser();

// Interfaces extends
interface Machine {
  serialNumber: string;
  productionDate: Date;
  expirationDate?: Date;
}

interface Laptop extends Machine {
  size: number;
  os: string;
}

const macBook: Laptop = {
  size: 45,
  os: "macOS",
  serialNumber: "asda123",
  productionDate: new Date(),
};

// implements
interface Runner {
  numOfLegs: number;
  walk(): void;
  run(): void;
}

interface Eater {
  eat(): void;
}

class Human implements Runner, Eater {
  numOfLegs = 2;
  energy = 100;
  walk(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
  sleep() {}
}

interface Runner {
  energy: number;
}
