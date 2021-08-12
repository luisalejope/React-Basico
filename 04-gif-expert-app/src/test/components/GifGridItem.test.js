import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas con <GifGridItem/>", () => {
  const title = "Prueba titulo";
  const url = "http://localhot/algo.jpg";
  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test("debe de mostrar <GifGridItem/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    const titulo = wrapper.find("p").text().trim();
    expect(titulo).toBe(title);
  });

  test("debe de obtener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img").props();
    expect(img.src).toBe(url);
    expect(img.alt).toBe(title);
  });

  test("debe de tener dentro del className animate__backInLeft", () => {
    const div = wrapper.find("div").props();
    const className = div.className;
    expect(className.includes("animate__backInLeft")).toBe(true);
  });
});
