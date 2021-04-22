import { heroes } from "./data/heroes";

// Find solo funciona con 1 solo elemento
const getHeroeById = (i) => {
  return heroes.find((element) => element.id === i);
};
console.log(getHeroeById(2));

// Filter busca todos los elementos que estan dentro de la condicion
const getHeroeByOwner = (owner) => {
  return heroes.filter((element) => element.owner === owner);
};

console.log(getHeroeByOwner("DC"));
