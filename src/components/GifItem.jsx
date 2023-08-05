import PropTypes from 'prop-types';

export const GifItem = ({ image, id, title, url, onDeleteImage }) => {
    return (
        <div className="card">
            <div></div>
            <img src={url} alt={title} />
            <p key={id} data-testid="titulo">{title}<a onClick={evt => onDeleteImage(image)}>X</a></p>
        </div>
    )
}

GifItem.propTypes = {
    image: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onDeleteImage: PropTypes.func.isRequired
}