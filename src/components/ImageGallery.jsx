import ImageCard from "./ImageCard";

function ImageGallery({ photo,onImageClick }) {
    if (!photo || photo.length === 0) {
        return null; // Görüntülenecek bir şey yoksa hiçbir şey gösterme
    }
    return (
      <ul className="image-gallery">
        {photo.map((photo) => (
          <li key={photo.id}>
            <ImageCard photo={photo} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    );
}
export default ImageGallery;