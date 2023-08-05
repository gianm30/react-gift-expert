import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"
import { useState } from "react";

describe("Pruebas en <GifExpertApp/>", () => {

    test("Debe haber un texto que diga Bienvenido", () => {
        render(<GifExpertApp />);
        expect(screen.getAllByText('Bienvenido').length).toBe(1);
    })

    test("Deben haber dos categorías", async () => {
        render(<GifExpertApp />);
        const { result } = renderHook(() => useState(['Gian', 'Brenda']));
        await waitFor(
            () => { expect(result.current[0].length).toBe(2) },
            { timeout: 1000 }
        );
    })

    test("Debe existir el contenido del componente AddCategory", async () => {
        render(<GifExpertApp />);
        const { result } = renderHook(() => useState(['Gian']));
        await waitFor(
            () => { expect(result.current[0].length).toBe(1) },
            { timeout: 1000 }
        );

        expect(screen.getAllByRole('textbox').length).toBe(1);
    })
})