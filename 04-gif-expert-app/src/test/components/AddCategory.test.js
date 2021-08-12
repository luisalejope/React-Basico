import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = () => {};
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });
});
