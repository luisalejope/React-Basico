import { getUser, getUsuarioActivo } from "../../src/base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        //1. Inicializar
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //2. estimulo
        const user = getUser();
        //3. Observar comportamiento

        expect(user).toEqual(testUser);
    })

    test('getUsuarioActivo debe de retornar un objeto con el nombre "Arturo"', () => {
        // 1. Inicializar
        const nombre = 'Arturo'
        const testUser = {
            uid: 'ABC567',
            username: nombre
        }
        //2. estimulo
        const user = getUsuarioActivo(nombre)

        //3. Observar comportamiento
        expect(user).toEqual(testUser)
    })
})