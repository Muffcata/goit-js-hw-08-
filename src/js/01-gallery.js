import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items'; //gallery
// Change code below this line

const photos = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const innerBox = document.createElement('a');
  innerBox.classList.add('gallery__item');
  innerBox.href = item.original;
  photos.append(innerBox);

  const imageBox = document.createElement('img');
  imageBox.textContent = item;
  imageBox.src = item.preview;
  imageBox.alt = item.description;
  imageBox.classList.add('gallery__image');
  innerBox.append(imageBox);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: '250',
});
