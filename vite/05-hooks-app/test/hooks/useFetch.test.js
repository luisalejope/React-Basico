import { renderHook, waitFor } from "@testing-library/react"
import { useFetch } from "../../src/hooks/useFetch"

describe('Pruebas en useFetch hook', () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/1'

    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useFetch(url));

        const { data, isLoading, hasError } = result.current

        expect(data).toBeFalsy();
        expect(isLoading).toBeTruthy();
        expect(hasError).toBeFalsy();

    })


    test('Debe de retornar la data solicitada por la url', async() => {
        const { result } = renderHook(() => useFetch(url));

        await waitFor(
            ()=> expect(result.current.data).toBeTruthy()
        )

        const {data, isLoading, hasError} = result.current

        expect(data).toBeTruthy();
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeFalsy();
    })


    test('Debe de cambiar el valor de name', async() => {
        const { result } = renderHook(() => useFetch(url));

        await waitFor(
            ()=> expect(result.current.data).toBeTruthy()
        )

        const {data, isLoading, hasError} = result.current

        expect(data).toBeTruthy();
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeFalsy();
    })
})