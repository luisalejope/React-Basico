import React from "react";
import PropTypes from 'prop-types';
// functional component

const PrimeraApp = ({ saludo, subtitulo }) => {
  /* const persona = {
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
  }; */

  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre> {JSON.stringify(persona, null, 3)} </pre> */}
      <p>{subtitulo}</p>
    </>
  );
};
// Obliga los argumentos y el tipo
PrimeraApp.prototype ={
    saludo: PropTypes.string.isRequired,
}
// Define las propiedades por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
