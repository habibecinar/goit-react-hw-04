function ImageCard({ photo }) {
    return (
        <div className="image-card">
            <img src={photo.urls.small} alt={photo.alt_description} />
        </div>
    );
}
export default ImageCard;
