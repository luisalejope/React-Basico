console.log("hola mundo");

const personajes = ["goku", "vegeta", "trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);



// Tarea


const state = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}]
}

const [nombre, setNombre] = state('Goku');

console.log(nombre)
setNombre();