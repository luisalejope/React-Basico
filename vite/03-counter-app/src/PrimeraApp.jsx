import PropTypes from 'prop-types';
// functional component

export const PrimeraApp = ({ saludo, subtitulo }) => {
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
      <h1 data-testid='test-saludo'>{saludo}</h1>
      {/* <pre> {JSON.stringify(persona, null, 3)} </pre> */}
      <p>{subtitulo}</p>
    </>
  );
};
// Obliga los argumentos y el tipo
PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}
// Define las propiedades por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
