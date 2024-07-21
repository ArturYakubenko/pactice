
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { findIMG } from "./js/pixabay-api";
import { createLi } from "./js/render-functions";
import { rendering } from "./js/render-functions";

const form = document.querySelector('.form')
form.addEventListener("input", hendlerInput)
let input = ""
form.addEventListener("submit", hendlerSubmit)
const gallery = document.querySelector(".gallery")


function hendlerInput(evt) {
    input = evt.target.value.trim()
    
}

function hendlerSubmit(evt) {
    evt.preventDefault()
    evt.target.elements[0].value = ""
    gallery.innerHTML = ""
    showSpinner()
    findIMG(input).then((data) => {
        if (data.hits.length === 0) {
            iziToast.error({
            title: 'No results',
            message: 'Sorry, there are no images matching your search query. Please try again!',})
          
        }
        else {
            const markLi = createLi(data.hits)
            gallery.insertAdjacentHTML("beforeend", markLi)
            rendering()
           
        }
    }).catch((err) => {
        iziToast.error({
        title: 'Error',
        message: "error"
      })
    })
    .finally(() => {hideSpinner()})
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none'
}
function showSpinner() {
    document.querySelector('.spinner').style.display = 'block'
}


