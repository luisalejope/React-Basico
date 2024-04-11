import { usContext } from "../../src/base/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objeto con los datos proporcionados', () => {
        //1. Inicializar
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const expectedObj = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        //2. estimulo
        const usContextResponse = usContext(persona)
        //3. Observar el comportamiento
        expect(usContextResponse).toEqual(expectedObj);
    })
})