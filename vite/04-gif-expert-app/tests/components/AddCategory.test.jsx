import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Tests on <AddCategory />', () => {
    test('should change the value of the input', () => {

        // 1. Inicializar

        const valueExpected = 'Saitama'
        render(<AddCategory onAddCategory={() => { }} />)
        
        const input = screen.getByRole('textbox');

        // 2. Estimulo

        fireEvent.input(input, { target: { value: valueExpected } })

        // 3. Observar comportamiento

        expect(input.value).toBe(valueExpected)
    })


    test('should call the onAddCategory function if the input have a value', () => {

        // 1. Inicializar
        
        const inputValue = 'Saitama';
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // 2. Estimulo
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        // 3. Observar comportamiento
        // input need to be cleaned
        expect(input.value).toBe('');
        // function have been called
        expect(onAddCategory).toHaveBeenCalled();
        // function have been called only one time
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        // function called with the parameter
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
        // expect(input.value).toBe(valueExpected)
    })

    test('should not call the onAddCategory function if the input have not a value', () => {

        // 1. Inicializar
        
        const inputValue = '';
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // 2. Estimulo
        fireEvent.submit(form);

        // 3. Observar comportamiento
        expect(onAddCategory).toHaveBeenCalledTimes(0);
        
        expect(onAddCategory).not.toHaveBeenCalled();
        // expect(input.value).toBe(valueExpected)
    })
})