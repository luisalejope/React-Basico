console.log("hola mundo");

// funciones en JS

// funcion normal
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

// funciones de flecha sin simplificar
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// funciones de flecha
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

// Funcion de flecha devolviendo un objeto con return
const getUser = () => {
  return {
    uid: "AS23DA",
    username: "luisalejope",
  };
};

// Funcion de flecha devolviendo un objeto sin return
const getUser2 = () => ({
  uid: "BS23DB",
  username: "luispemu",
});

console.log(saludar("Luis"));
console.log(saludar2("alejandro"));
console.log(saludar3("Peña"));
console.log(saludar4());
console.log(getUser());
console.log(getUser2());


// Tarea
const getUsuarioActivo = (nombre) => ({
    uid: "CD131C",
    username: nombre
})

const usuarioActivo = getUsuarioActivo("moritashitzu2")

console.log(usuarioActivo)
