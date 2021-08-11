import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe mostrar <CounterApp/> correctamente y sus valores por defecto", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const valorDefecto = wrapper.find("h2").text().trim();
    expect(parseInt(valorDefecto)).toEqual(value);
  });

  test("debe incrementar con el boton +1", () => {
    // busca en todos los botones el botton primer boton con el index 0 como si fuera en un arreglo
    wrapper.find("button").at(0).simulate("click");
    const valorDefecto = wrapper.find("h2").text().trim();

    expect(parseInt(valorDefecto)).toEqual(1);
  });

  test("debe disminuir con el boton -1", () => {
    // busca en todos los botones el botton primer boton con el index 0 como si fuera en un arreglo
    wrapper.find("button").at(2).simulate("click");
    const valorDefecto = wrapper.find("h2").text().trim();

    expect(parseInt(valorDefecto)).toEqual(-1);
  });

  test('debe de colocar el valor por defecto con el boton reset', () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const valorDefecto = wrapper.find("h2").text().trim();
    expect(parseInt(valorDefecto)).toEqual(value);
  })
  
});
