import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe("Pruebas en <GifItem/>", () => {
    const id = "1";
    const image = {};
    const title = "Hola";
    const url = "https://pruebas-gian.com/carrasco.jpg";
    const onDeleteImage = () => { };
    const renderObj = <GifItem id={id} image={image} title={title} url={url} onDeleteImage={onDeleteImage} />;

    test("Debe de hacer match con el snapshot", () => {
        const { container } = render(renderObj);
        expect(container).toMatchSnapshot();
    })

    test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
        render(renderObj);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test("Debe mostrar el título en el componente", () => {
        render(renderObj);
        const { innerHTML } = screen.getByTestId('titulo');
        expect(innerHTML).toContain(title);
    })
})