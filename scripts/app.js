//select movie poster original image
let moviePoster = document.querySelector(".movie-poster");

//select model window
let modal = document.querySelector("#myModal");

//selct closeBtn
let closeBtn=document.querySelector(".closeBtn");

//image
let modalImage = document.querySelector(".movie-poster-modal");

moviePoster.addEventListener("click", ()=> {
    console.log("image");
    modal.style.display = "block";
    modalImage.src=moviePoster.src
});

closeBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
});

window.addEventListener("click", (event)=>{
    if(event.target === modal){
    modal.style.display = "none"};
});
const slides = document.getElementsByClassName("karusell__item");
const slidesTotal = slides.length;
const nextBtn = document.querySelector("#karusell__next");
const prevBtn = document.querySelector("#karusell__previouse");

let slidePosition = 0;

nextBtn.addEventListener("click", () => {

    for(let slide of slides){
        slide.classList.remove("karusell__item--visible");
    }

    if(slidePosition === slidesTotal-1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("karusell__item--visible")

})

prevBtn.addEventListener("click", () => {

    for(let slide of slides){
        slide.classList.remove("karusell__item--visible");
    }

    if(slidePosition === 0){
        slidePosition = slidesTotal-1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("karusell__item--visible")



})