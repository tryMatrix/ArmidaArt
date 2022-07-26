const slideContainer = document.querySelector(".slider")
const sliderText = document.querySelector(".slider--text")
const btnLeft = document.querySelector(".slider__btn-left")
const btnRight = document.querySelector(".slider__btn-right")
const btnMiddle = document.querySelector(".slider--btn")

const sliderImages = [
  {
    src: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    text: "Photography",
    button: " Started",
  },
  {
    src: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    text: "Paintings",
    button: "START", URL:"www.google.com",
  },
  {
    src: "https://images.pexels.com/photos/16516/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    text: "Sketches",
    button: "TRY IT",
  },
]

let slideCounter = 0
let url1 = new URL('https://javascript.info/profile/admin');

const startSlider = () => {
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[0].src})`
    sliderText.innerHTML = sliderImages[0].text
    btnMiddle.innerHTML = sliderImages[0].button
}

btnRight.addEventListener("click", function() {
    if (slideCounter === sliderImages.length - 1) {
      slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[0].src})`
      sliderText.innerHTML = sliderImages[0].text
      btnMiddle.innerHTML = sliderImages[0].button
      slideCounter = -1
  
      slideContainer.classList.add("fadeIn")
      setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
      }, 1000)
    }
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ),url(${sliderImages[slideCounter + 1].src})`
    sliderText.innerHTML = sliderImages[slideCounter + 1].text
    btnMiddle.innerHTML = sliderImages[slideCounter + 1].button
    slideCounter++
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
})
btnLeft.addEventListener("click", function() {
    if (slideCounter === 0) {
      slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[sliderImages.length - 1].src})`
      sliderText.innerHTML = sliderImages[sliderImages.length - 1].text
      btnMiddle.innerHTML = sliderImages[sliderImages.length - 1].button
      slideCounter = sliderImages.length
      slideContainer.classList.add("fadeIn")
      setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
      }, 1000)
    }
  
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter - 1].src})`
    sliderText.innerHTML = sliderImages[slideCounter - 1].text
    btnMiddle.innerHTML = sliderImages[slideCounter - 1].button
    slideCounter--
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
  })

  btnMiddle.addEventListener("click", function gotoUrl() {
    if(slideCounter === 0){
        window.location.assign("https://armidaart.me/photography/photos-page-1.html")
    }
    
    else if (slideCounter === sliderImages.length - 1){
        window.location.assign("https://armidaart.me/sketches/sketches-page-1.html")
    }

    else{
        window.location.assign("https://armidaart.me/paintings/page-1.html")
    }
})
  
  startSlider()
