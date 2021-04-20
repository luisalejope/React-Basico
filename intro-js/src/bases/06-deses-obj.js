console.log("hola mundo");

// Desestructuración
// Asignacion destructurante

const persona = {
  nombre: "Luis",
  apellido: "Peña",
  edad: "45",
  clave: "ironman",
  direccion: {
    ciudad: "Bogotá",
    zip: "1222231",
    lat: "14.53242",
    long: "32.131",
  },
};

// const {nombre, edad, clave} = persona;
/* console.log(nombre)
console.log(edad)
console.log(clave) */

// Desestructuración a partir de una funcion de flecha. Se hace dentro de los parametros de la funcion
/* const retornaPersona = ({ nombre, edad, rango = "Capitan" }) => {
  console.log(nombre, edad, rango);
}; */

const holaContext = ({ nombre, direccion, clave, edad, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    dir: direccion,
  };
};


const {nombreClave, anios, dir: {ciudad, lat, long}} = holaContext(persona)

console.log(nombreClave, anios, lat, long, ciudad);
