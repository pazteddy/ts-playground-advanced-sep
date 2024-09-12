const pikachu = {
  nombre: "Pickachu",
  tipo: "Electrico",
  nivel: 1,
};

type Pokemon = typeof pikachu;

type PokemonKeys = keyof Pokemon;

function getPropiedadPokemon(pokemon: Pokemon, propiedad: PokemonKeys) {
  return pokemon[propiedad];
}

const bulbasaur: Pokemon = {
  nombre: "Bulbasaur",
  tipo: "Planta",
  nivel: 1,
};

console.log(getPropiedadPokemon(bulbasaur, "tipo"));
//
type UserTest = {
  id: number;
  name: string;
  role: "user" | "admin";
  phone: { code: string; number: string };
};
type Phone = UserTest["phone"];
type Role = UserTest["role"];
