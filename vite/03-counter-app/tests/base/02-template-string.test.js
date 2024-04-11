import { getSaludo } from "../../src/base/02-template-string"

describe('pruebas en 02-string-pruebas', () => { 
    test('getSaludo debe de retornar "Hola Fernando"', () => {
        // 1. Inicializar
        const expectedString = 'Hola Fernando';
        //2. estimulo
        const receivedString = getSaludo('Fernando');
        //3. Observar el comportamiento
        expect(receivedString).toBe(expectedString)
    })
 })