import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { PropTypes } from 'prop-types';


export const GifGrid = ({ category, onDeleteCategory }) => {
    const { images, setImages, isLoading } = useFetchGifs(category);
    const onDeleteImage = image => {
        const index = images.indexOf(image);
        console.log(index);
        if (index !== -1)
            setImages(images.filter(evt => evt !== image));
    }

    return (
        <>
            <h3>{category} <a onClick={evt => onDeleteCategory(category)}>X</a></h3>
            {
                isLoading && <h2>Cargando ...</h2>
            }

            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem key={image.id} image={image}
                            {...image}
                            onDeleteImage={onDeleteImage} />)
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    onDeleteCategory: PropTypes.func.isRequired
}