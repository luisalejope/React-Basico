console.log("hola mundo");

const nombre = "luis";
const apellido = "peña";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} `;

console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
  return "hola " + nombre + " " +apellido;
}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`);
