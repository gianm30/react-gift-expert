import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas en <GifGrid />()", () => {
    const category = "Gian";

    test("Debe mostrar el loading al inicio", async () => {
        const onDeleteCategory = () => {};
        useFetchGifs.mockReturnValue({ images: [], isLoading: true });

        render(<GifGrid category={category} onDeleteCategory={onDeleteCategory} />);
        expect(screen.getByText('Cargando ...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test("Debe mostrar items cuando se cargan las ímñagenes de usetFetchGifs", async () => {
        const gifs = [
            { id: 'ABC', title: 'Gian', url: 'https://localhost/gian.jpg' },
            { id: '123', title: 'Brenda', url: 'https://localhost/brenda.jpg' }
        ];

        useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });
        const onDeleteCategory = () => {};
        render(<GifGrid category={category} onDeleteCategory={onDeleteCategory} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });
})