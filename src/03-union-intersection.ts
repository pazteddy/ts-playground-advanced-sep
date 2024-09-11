type impares = 1 | 3 | 5 | 7 | 9;
type hastaCinco = 1 | 2 | 3 | 4 | 5;

let numero: impares | hastaCinco;

numero = 4;

let numeroInterseccion: impares & hastaCinco;
numeroInterseccion = 3;

function getUser() {
  const success = [
    "success",
    { name: "Testino", email: "testino@mail.com" },
  ] as const;

  const error = ["error", new Error("Something went wrong!")] as const;

  if (Math.random() > 0.5) {
    return success;
  } else {
    return error;
  }
}

const [message, data] = getUser();
if (data instanceof Error) {
  data;
} else {
  data;
}
