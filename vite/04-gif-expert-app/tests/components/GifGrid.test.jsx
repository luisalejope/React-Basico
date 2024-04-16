import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

// mock customhooks
jest.mock('../../src/hooks/useFetchGifs')

describe('Tests on <GifGrid />', () => {
    const category = 'One Punch'

    test('should show the Loader first', () => {

        // mock the return values
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        const loading = screen.getByRole('paragraph').innerHTML;
        expect(loading).toBe('Loading...');
    })
    
    test('should show the category in the header', () => {
        render(<GifGrid category={category} />);
        const categoryRendered = screen.getByText(category).innerHTML;

        expect(categoryRendered)
    })

    test('should show items when the images are loaded by the useFetchGifs', () => {

    })
})