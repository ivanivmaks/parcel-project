import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
function createGallery() {
  const items = galleryItems.map(item => createGalleryItem(item));
  gallery.append(...items);
}
function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = preview;
  img.alt = description;

  link.appendChild(img);
  galleryItem.appendChild(link);

  return galleryItem;
}

createGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
