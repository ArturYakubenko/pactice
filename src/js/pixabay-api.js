const API_KEY = '45015535-1baf0a26e6ef32c92247ee5f8';
const BASE_URL = 'https://pixabay.com/api/';

export function findIMG(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((resp) => { 
            if(!resp.ok) {
        throw new Error('Failed to fetch images');
            }        
            return resp.json()
    })
}