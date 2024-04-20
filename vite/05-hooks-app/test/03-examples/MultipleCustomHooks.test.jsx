import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {


    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increase: mockIncrement,
        decrease: jest.fn(),
    })

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        })
        
        render(<MultipleCustomHook />)
        expect(screen.getByText('Loading')).toBeTruthy()
        expect(screen.getByRole('heading', { level: 3 }).innerHTML).toBe('')

    })


    test('debe de mostrar imagenes de pokemones', () => {
        useFetch.mockReturnValue({
            data: {
                name: 'bulbasur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png'
                }
            },
            isLoading: false,
            hasError: false
        })

        render(<MultipleCustomHook />)

        expect(screen.getByText('bulbasur')).toBeTruthy();

        const img = screen.getAllByRole('img')
        expect(img.length).toBe(4)
    })

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: {
                name: 'bulbasur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png'
                }
            },
            isLoading: false,
            hasError: false
        })


        render(<MultipleCustomHook />)

        const nextButton = screen.getByRole('button', { name: 'Siguiente' })
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled();

    })

})