import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inical", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Cristiano Ronaldo")
    );
    const { data, loading } = result.current;
    // se coloca un timeout para evitar errores de timeout en las pruebas
    await waitForNextUpdate({ timeout: 3000 });
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Cristiano Ronaldo")
    );
    // se coloca un timeout para evitar errores de timeout en las pruebas

    await waitForNextUpdate({ timeout: 3000 });
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
