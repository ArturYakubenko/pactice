import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

let simplelightbox = null

export function createLi(arr) {
    return arr.map(({webformatURL, largeImageURL, tags, views, comments, downloads, likes }) => {
        return `<li class="item">
        <div class="item_img">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
        </a>
        </div>
        <ul class="description">
            <li><p>views</p><p>${views}</p></li>
            <li><p>comments</p><p>${comments}</p></li>
            <li><p>downloads</p><p>${downloads}</p></li>
            <li><p>likes</p><p>${likes}</p></li>
        </ul>
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

