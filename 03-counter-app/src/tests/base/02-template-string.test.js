import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("pruebas en 02-template-string,test,js", () => {
  test("getSaludo debe retornar Hola fernando", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo debe retornar Hola Carlos", () => {

    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});
