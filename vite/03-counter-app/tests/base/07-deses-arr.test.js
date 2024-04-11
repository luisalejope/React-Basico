import { retornaArreglo } from "../../src/base/07-deses-arr"

describe('pruebas en 07-deses-obj', () => {
    test('retornaArreglo debe de retornar un string y un numero', () => {
        //1. Inicializar

        //2. Estimulo
        const [str, num] = retornaArreglo(); 
        //3. Observar el comportamiento
        expect(typeof str).toBe('string');
        expect(typeof num).toBe('number');
    })
})