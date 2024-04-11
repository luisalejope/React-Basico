import { getHeroeById, getHeroesByOwner } from "../../src/base/08-imp-exp";

describe('pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        //1. Inicializar
        const id = 1;
        //2. estimulo
        const hero =getHeroeById(id)
        //3. Observar Comportamiento
        expect(hero.id).toBe(id);
    })

    test('getHeroeById debe de retornar undefined si no existe un heroe con el ID', () => {
        //1. Inicializar
        const id = 20;
        //2. estimulo
        const hero =getHeroeById(id)
        //3. Observar Comportamiento
        expect(hero).toBeFalsy();
    })

    test('getHeroeByOwner debe de retornar un Arreglo con 3 Heroes de DC', () => {
        //1. Inicializar
        const owner = 'DC';
        const heroesExpected = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]
        //2. estimulo
        const heroes =getHeroesByOwner(owner)
        //3. Observar Comportamiento
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroesExpected);
    })

    test('getHeroeByOwner debe de retornar un Arreglo con 2 Heroes de Marvel', () => {
        //1. Inicializar
        const owner = 'Marvel';
        const heroesExpected = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]
        //2. estimulo
        const heroes =getHeroesByOwner(owner)
        //3. Observar Comportamiento
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroesExpected);
    })
})