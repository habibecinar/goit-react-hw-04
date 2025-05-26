import Modal from "react-modal";

const ImageModal = ({ isOpen, image, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false} // (test ortamı dışında App root'u belirt)
    >
      <img src={image} alt="Büyük görsel" className="modal-image" />
    </Modal>
  );
};
export default ImageModal;