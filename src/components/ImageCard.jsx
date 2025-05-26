function ImageCard({ photo,onImageClick }) {
    return (
        <div className="image-card">
            <img src={photo.urls.small} alt={photo.alt_description}
                onClick={() => onImageClick(photo.urls.regular)} // Modal için büyük görseli gönder}
                style={{ cursor: "pointer" }} // Kullanıcı tıklanabilir olduğunu anlasın
            />
        </div>
    );
}
export default ImageCard;
