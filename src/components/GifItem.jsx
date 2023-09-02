const GifItem = ({ image }) => {

    const { title, url } = image;

    return (
        <div className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}

export default GifItem