import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe("Pruebas en <AddCategory/>", () => {
    const inputValue = 'Gian';
    const inputValueEmpty = '';

    test("Debe cambiar el valor de la caja de texto", () => {
        const onNewCategory = jest.fn();
        const renderObj = <AddCategory onNewCategory={onNewCategory} />;
        render(renderObj);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
    })

    test("Debe llamar onNewCategory si el input tiene un valor", () => {
        const onNewCategory = jest.fn();
        const renderObj = <AddCategory onNewCategory={onNewCategory} />;

        render(renderObj);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test("No debe llamar onNewCategory si el input está vacio", () => {
        const onNewCategory = jest.fn();
        const renderObj = <AddCategory onNewCategory={onNewCategory} />;

        render(renderObj);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValueEmpty } })
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
})