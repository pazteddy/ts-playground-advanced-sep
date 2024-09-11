// const book = { title: "Hamlet", author: "Shakespeare" };

// Anotación de tipo para 'book'
let book: { title: string; author: string };
book = { author: "Shakespeare", title: "Hamlet" };

// Objeto estudiante
// const estudiante = {
//   nota: 10,
//   materia: "Algebra",
//   nombre: "Brandon"
// };
// Anotación de tipo estudiante
// const estudiante: {
//   nota: number;
//   materia: string;
//   nombre: string;
// } = {
//   nota: 10,
//   materia: "Matematicas",
//   nombre: "Brnadon",
// };

let estudiante: {
  nota: number;
  materia: string;
  nombre: string;
};

estudiante = {
  nota: 10,
  materia: "Matematicas",
  nombre: "Brandon",
};

// Función sea con nota opcional y ademas por defecto comience con cero
function imprimirEstudiante({
  nota = 0,
  materia,
  nombre,
}: {
  nota?: number;
  materia: string;
  nombre: string;
}) {
  console.log(materia);
  console.log(nombre);
  console.log(nota);
}
imprimirEstudiante({ materia: "TypeScript", nombre: "Camilo" });
imprimirEstudiante({ materia: "TypeScript", nombre: "Kelly", nota: 70 });

// Firma de los indices
const diccionario: {
  nombre: string;
  [k: string]: string | number | boolean;
} = { nombre: "test" };

diccionario["programador"] = "hace código";
diccionario["algoritmo"] = "una secuencia de pasos a seguir";
diccionario["bug"] = "un error";
diccionario["añosDesarrollador"] = 23;
console.log(diccionario);
// console.log(diccionario["otro"].toUpperCase());

const countries = ["PE", "MX", "CO", "CL"];
const numbers: number[] = [1, 2, 3, 4];
const fruits: string[] = [];
const users: {
  id: number;
  nombre: string;
}[] = [
  { id: 1, nombre: "Alexander" },
  { id: 2, nombre: "Italo" },
];

// Arreglo mixto
// const student = ["Testino", 25, true];
// student[0] = true;
// student[1] = "Probino";
// student.push("Javascript");
// student.pop();

// Tupla Mixta
const student: readonly [string, number, boolean] = ["Testino", 25, true];

// readonly en propiedades de los Objetos
const usuario: {
  readonly id: number;
  nombre: string;
  correo: string;
} = { id: 1, nombre: "Probino", correo: "probino@mail.com" };

usuario.correo = "probin@mail.com";
// usuario.id = 9;
