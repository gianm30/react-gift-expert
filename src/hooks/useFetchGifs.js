import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images,
        setImages,
        isLoading //Se puede omitir los 2 puntos si la variable se llama igual que el campo
    };
}