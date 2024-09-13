// Funciones
type SumFunc = (a: number, b: number) => number;
interface SumFuncInter {
  (a: number, b: number): number;
}

// Function Declaration no podemos tipar
// function sum1:SumFunc(a: number, b: number): number {
//   return a + b;
// }

// Anonymous Function Expression
const sum2: SumFunc = function (a: number, b: number): number {
  return a + b;
};

// Arrow Function Expression
const sum3: SumFuncInter = (a: number, b: number): number => a + b;

type MathOperation = (a: number, b: number) => number;

type MathFuncs = {
  sum: MathOperation;
  res: MathOperation;
};

const math3: MathFuncs = {
  sum: (a: number, b: number) => a + b,
  res: (a: number, b: number) => a - b,
};
// Retornando void
function addOne(list: any[], item: any): void {
  list.push(item);
}

const addOne2 = (list: any[], item: any): void => {
  list.push(item);
};
