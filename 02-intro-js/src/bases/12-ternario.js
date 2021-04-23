const activo = true;

/* let mensaje = ''

 if(activo){
   mensaje = 'activo'
 }else{
   mensaje = 'inactivo'
 } */
// condicional 1
// const mensaje = (activo) ? 'Activo': 'Inactivo';
// condicional 2
// const mensaje = (activo) ? 'Activo': null;
// condicional 3
const mensaje = activo && "activo";

console.log(mensaje);
