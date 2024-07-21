import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

let simplelightbox = null

export function createLi(arr) {
    return arr.map(({webformatURL, largeImageURL }) => {
        return `<li>
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="">
        </a>
        </li>`
    }).join('')
   
}

export function rendering() {
   if (!simplelightbox) {
        simplelightbox = new SimpleLightbox('.gallery a');
    } else {
        simplelightbox.refresh();
    }
}

