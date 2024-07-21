import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="45015535-1baf0a26e6ef32c92247ee5f8",h="https://pixabay.com/api/";function y(i){return fetch(`${h}?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()})}let l=null;function g(i){return i.map(({webformatURL:r,largeImageURL:n,tags:s,views:e,comments:t,downloads:o,likes:p})=>`<li class="item">
        <div class="item_img">
        <a href="${n}">
        <img src="${r}" alt="${s}">
        </a>
        </div>
        <ul class="description">
            <li><p>views</p><p>${e}</p></li>
            <li><p>comments</p><p>${t}</p></li>
            <li><p>downloads</p><p>${o}</p></li>
            <li><p>likes</p><p>${p}</p></li>
        </ul>
        </li>`).join("")}function L(){l?l.refresh():l=new d(".gallery a")}const u=document.querySelector(".form");u.addEventListener("input",S);let f="";u.addEventListener("submit",b);const a=document.querySelector(".gallery");function S(i){f=i.target.value.trim()}function b(i){i.preventDefault(),i.target.elements[0].value="",a.innerHTML="",v(),y(f).then(r=>{if(r.hits.length===0)c.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const n=g(r.hits);a.insertAdjacentHTML("beforeend",n),L()}}).catch(r=>{c.error({title:"Error",message:"error"})}).finally(()=>{$()})}function $(){document.querySelector(".spinner").style.display="none"}function v(){document.querySelector(".spinner").style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
