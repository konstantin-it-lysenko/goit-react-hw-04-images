import { Component } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { smallImg, largeImg } = this.props;
    const { isModalOpen } = this.state;
    return (
      <ImageItem className="gallery-item">
        <Image src={smallImg} alt="image" onClick={this.toggleModal} />
        {isModalOpen && (
          <Modal largeImg={largeImg} onClose={this.toggleModal} />
        )}
      </ImageItem>
    );
  }
}

export default ImageGalleryItem;
