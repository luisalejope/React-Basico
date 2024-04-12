import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    //1. Inicializar
    const initialValue = 100

    test('Debe hacer match con el snapshot', () => {
        //2. Estimulo
        const {container} = render(<CounterApp value={initialValue}/>);
        //3. Observar Comportamiento
        expect(container).toMatchSnapshot()
    })

    test(`debe de mostrar el valor inicial de "${initialValue}"`, () => {
        //2. Estimulo
        render(<CounterApp value={initialValue}/>);
        //3. Observar Comportamiento
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(initialValue.toString())
    })
})