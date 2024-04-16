import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Tests on <GifExpertApp />', () => {
    // 1. Inicializar
    const inputValue = 'Saitama';
    
    test('should show the category added in the array of categories', () => {
        
        // 2. estimulo
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        // 3. Observar comportamiento
        const header = screen.getByText('Saitama').innerHTML
        expect(header).toBe(inputValue)
    })

    test('should show only one header title per category', () => {
        
        // 2. estimulo
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        // 3. Observar comportamiento
        const header = screen.getAllByText('Saitama')

        expect(header.length).not.toBeGreaterThan(1)
    }) 
 })