import { render } from "@testing-library/react"
import { PrimeraApp } from "../src/PrimeraApp"





describe('Preubas en  <FirstApp />', () => {

    /* test('Debe hacer match con el snapshot', () => {
        //1. Inicializacion
        const saludo = 'Hola Mundooooo';
        //2. Estimulo
        const {container} = render(<PrimeraApp saludo={saludo}/>);
        //3. Observar Comportamiento
        expect(container).toMatchSnapshot()

    }) */

    test('debe de mostrar el titulo en un h1', () => {
        //1. Inicializacion
        const saludo = 'Hola Mundooooo';
        //2. Estimulo
        const {getByText, getByTestId} = render(<PrimeraApp saludo={saludo}/>);
        //3. Observar Comportamiento
        expect(getByText(saludo)).toBeTruthy()

        // ToContain es como el ToBe pero no le importa si hay espacios en el html
        expect(getByTestId('test-saludo').innerHTML).toContain(saludo)
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        //1. Inicializacion
        const saludo = 'Hola TGermab';
        const subtitulo = 'Que mas parce'
        //2. Estimulo

        // getAllByText devuelve un arreglo y revisa que existan mas de uno pero el getByText solo valida uno
        const {getAllByText} = render(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        //3. Observar Comportamiento
        expect(getAllByText(subtitulo)).toBeTruthy();
        expect(getAllByText(subtitulo).length).toBe(1);
    })
})