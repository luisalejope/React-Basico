import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    //1. Inicializar
    const initialValue = 100

    test('Debe hacer match con el snapshot', () => {
        //2. Estimulo
        const { container } = render(<CounterApp value={initialValue} />);
        //3. Observar Comportamiento
        expect(container).toMatchSnapshot()
    })

    test(`debe de mostrar el valor inicial de "${initialValue}"`, () => {
        //2. Estimulo
        render(<CounterApp value={initialValue} />);
        //3. Observar Comportamiento
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString())
    })

    test('debe de incrementar con el boton +1', () => {
        //2. Estimulo
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))

        //3. Observar Comportamiento
        expect(screen.getByText('101')).toBeTruthy()
    })

    test('debe de decrementar con el boton -1', () => {
        //2. Estimulo
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'))

        //3. Observar Comportamiento
        expect(screen.getByText('99')).toBeTruthy()
    })

    test('debe de funcionar el boton de reset', () => {
        //2. Estimulo
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        /* fireEvent.click(screen.getByText('reset')); */
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        //3. Observar Comportamiento
        expect(screen.getByText(initialValue.toString())).toBeTruthy();
    })
})