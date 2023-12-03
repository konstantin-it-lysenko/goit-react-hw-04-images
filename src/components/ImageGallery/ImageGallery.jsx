import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImagesList className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          largeImg={largeImageURL}
        />
      ))}
    </ImagesList>
  );
};

export default ImageGallery;
