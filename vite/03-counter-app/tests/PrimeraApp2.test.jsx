import { render, screen } from "@testing-library/react"
import { PrimeraApp } from "../src/PrimeraApp"





describe('Preubas en  <FirstApp />', () => {
    //1. Inicializacion
    const saludo = 'Hola Mundooooo';
    const subtitulo = 'Que mas parce';

    test('Debe hacer match con el snapshot', () => {
        //2. Estimulo
        const {container} = render(<PrimeraApp saludo={saludo}/>);
        //3. Observar Comportamiento
        expect(container).toMatchSnapshot()
    })

    test(`debe de mostrar el mensaje "${saludo}"`, () => {
        //2. Estimulo
        render(<PrimeraApp saludo={saludo}/>);
        //3. Observar Comportamiento
        expect(screen.getByText(saludo)).toBeTruthy()
    })

    test(`debe de mostrar el saludo en un h1"`, () => {
        //2. Estimulo
        render(<PrimeraApp saludo={saludo}/>);
        //3. Observar Comportamiento
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(saludo)
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        //2. Estimulo
        render(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        //3. Observar Comportamiento
        expect(screen.getAllByText(subtitulo).length).toBe(1);
    })
})