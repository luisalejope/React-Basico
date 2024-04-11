import { getHeroeByIdAsync } from "../../src/base/09-promesas"

describe('pruebas en 09-promesas', () => {
    // Usar el done cuando se hace asyncronismo porque jest es sincrono
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        //1. Inicializar
        const id = 1
        const expectedHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
        //2. estimulo y observar comportamiento
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toEqual(expectedHero);
                done();
            })
    })

    test('getHeroeByIdAsync debe de retornar un error si el heroe no se encuentra', (done) => {
        //1. Inicializar
        const id = 200
        const expectedError = 'No se pudo encontrar el héroe';
        //2. estimulo y observar comportamiento
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error=>{
                expect(error).toBe(expectedError);
                done();
            })
    })
})