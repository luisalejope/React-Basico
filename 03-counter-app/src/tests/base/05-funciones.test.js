import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const object = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(object);
  });

  // getUsuarioActivo debe retornar un objeto
  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Luis Peña";
    const userReceived = { uid: "ABC567", username: nombre };

    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(userReceived)
  });
});
