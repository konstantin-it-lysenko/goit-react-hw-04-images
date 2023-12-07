import { useEffect } from 'react';
import { ModalItem, Overlay } from './Modal.styled';

const Modal = ({ largeImg, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', escapeHandler);
    return () => {
      document.removeEventListener('keydown', escapeHandler);
    };
  });

  const escapeHandler = e => {
    e.code === 'Escape' && onClose();
  };

  return (
    <Overlay className="overlay" onClick={onClose}>
      <ModalItem className="modal">
        <img src={largeImg} alt="info" />
      </ModalItem>
    </Overlay>
  );
};

export default Modal;
