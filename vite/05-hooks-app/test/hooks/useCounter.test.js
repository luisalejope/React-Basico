import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useCounter', () => {

    const initialValue = 100;


    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter())

        const { counter, decrease, increase, reset } = result.current

        expect(counter).toBe(10);
        expect(decrease).toEqual(expect.any(Function));
        expect(increase).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('debe de generar el counter con el valor inicial de 100', () => {
        const { result } = renderHook(() => useCounter(initialValue))

        const { counter } = result.current

        expect(counter).toBe(initialValue);
    })

    test('debe incrementar el counter cuando se use el increase function', async () => {
        const number = 2

        const { result } = renderHook(() => useCounter(initialValue))

        const { increase } = result.current

        act(() => {
            increase();
            increase(number);
        })

        // se usa result.current.counter y no el valor desestructurado de counter 
        // ya que estamos trabajando con valores primitivos
        // por lo que su valor guardado en el counter va a ser el mismo que el inicial
        expect(result.current.counter).toBe(initialValue + number + 1)
    })

    test('debe disminuir el counter cuando se use el decrease function', async () => {
        const number = 2

        const { result } = renderHook(() => useCounter(initialValue))

        const { decrease } = result.current

        act(() => {
            decrease();
            decrease(number);
        })

        // se usa result.current.counter y no el valor desestructurado de counter 
        // ya que estamos trabajando con valores primitivos
        // por lo que su valor guardado en el counter va a ser el mismo que el inicial
        expect(result.current.counter).toBe(initialValue - number - 1)
    })

    test('No debe disminuir el counter cuando el contador este en 0 y se use el decrease function', async () => {
        const number = 2

        const { result } = renderHook(() => useCounter(0))

        const { decrease } = result.current

        act(() => {
            decrease();
            decrease(number);
        })

        // se usa result.current.counter y no el valor desestructurado de counter 
        // ya que estamos trabajando con valores primitivos
        // por lo que su valor guardado en el counter va a ser el mismo que el inicial
        expect(result.current.counter).toBe(0)
    })

    test('debe de resetear el valor inicial cuando se use el reset function', async () => {

        const { result } = renderHook(() => useCounter(initialValue))

        const { reset, increase, decrease } = result.current

        act(() => {
            decrease(3);
            decrease(6);
            increase(10);
            increase(100);
            reset();
        })

        // se usa result.current.counter y no el valor desestructurado de counter 
        // ya que estamos trabajando con valores primitivos
        // por lo que su valor guardado en el counter va a ser el mismo que el inicial
        expect(result.current.counter).toBe(initialValue)
    })
})