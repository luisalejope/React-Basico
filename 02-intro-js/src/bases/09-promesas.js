import { getHeroeById } from "../bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Tarea
    const heroe = getHeroeById(2);
    console.log(heroe);
    resolve(heroe);
  }, 2000);
});

promesa.then((heroe) => {
  console.log("heroe", heroe);
})
.catch(err => console.warn(err)) */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      const heroe = getHeroeById(id);
      if (!heroe) {
        reject('No se encontro al heroe');
      } else {
        resolve(heroe);
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.warn);
