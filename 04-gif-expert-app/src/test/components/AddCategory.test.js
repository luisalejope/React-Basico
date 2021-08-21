import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //testear un cambio en el input
  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });

  test("No debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola dos";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    //Revisa si se llamo la funcion
    expect(setCategories).toHaveBeenCalled();
    //Revisa cuantas veces se ejecuto la funcion
    expect(setCategories).toHaveBeenCalledTimes(1);
    //Revisa que se haya llamado una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
