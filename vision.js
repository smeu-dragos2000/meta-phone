let i = 0;
let text = "MetaPhone is accelerating the world's transition to software driven cities with cloud phones, data management and performance SaaS integrated platform.";
let textLength = text.length;
const homePage1 = document.getElementById("type-effect-1");
const typingEffectSquare = document.getElementById("typing-effect-square");


console.log(typingEffectSquare.style.display)
const typedEffect = () => {
    if (i < text.length) {
        homePage1.innerHTML += text.charAt(i);
        i++;
        typingEffectSquare.style.display = "inline";
        setTimeout(typedEffect, 10);
    }
    else {
        typingEffectSquare.style.display = "none";
    }
}
window.onload = typedEffect();



//  Initialize Swiper (Slider for Blog)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

