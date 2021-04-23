console.log("hola mundo");

const persona = {
  nombre: "Luis",
  apellido: "Peña",
  edad: "45",
  direccion: {
    ciudad: "Bogotá",
    zip: "1222231",
    lat: "14.53242",
    long: "32.131",
  },
};

// console.table({ persona });

// usar los tres puntos para utilizar los atributos del objeto 1
const persona2 = { ...persona };
persona2.nombre = "Alejandro";

console.log({ persona });
console.log({ persona2 });
