import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests in hook useFetchGifs', () => {
    // 1. inicializar
    const category = 'One Punch'

    test('should return the initial state', () => {
        // 2. estimulo
        const { result } = renderHook(() => useFetchGifs(category));
        const { gifs, isLoading } = result.current;

        // 3. Observar comportamiento
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of gifs and the isLoading in false', async() => {
        // 2. estimulo
        const { result } = renderHook(() => useFetchGifs(category));

        // Usar el waitfor con un callback y cuando termine ese callback hacer las aserciones
        // la funcion dice que espere a que el gifs tenga 1 elemento para poder hacer la acersion
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )
        
        const { gifs, isLoading } = result.current;

        // 3. Observar comportamiento
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

})