export const GifItem = ({ image, id, title, url, onDeleteImage }) => {
    return (
        <div className="card">
            <div></div>
            <img src={url} alt={title} />
            <p key={id}>{title}<a onClick={evt => onDeleteImage(image)}>X</a></p>
        </div>
    )
}