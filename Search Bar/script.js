const inputBox=document.querySelector(".input-box")
const searchIcon=document.querySelector(".search-icon")
const closeIcon=document.querySelector(".close-icon")

searchIcon.addEventListener("click",()=>inputBox.classList.add("open"))
closeIcon.addEventListener("click",()=>inputBox.classList.remove("open"))