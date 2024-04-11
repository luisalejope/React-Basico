import { getImagen } from "../../src/base/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar la url de una imagen', async() => {
        //1. Inicializar

        //2. Estimulo
        const url = await getImagen();
        
        //3. Observar Comportamiento
        expect(typeof url).toBe('string');
    })
})