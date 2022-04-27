import { indexPopUp } from "./popUp-texts.js";

// Typeing Effect
let i = 0;
let text = "Meta's closed-loop business logic: mateone users are both consumers and bookkeepers, plus the consensus person who provides liquidity for the token meta, and the home edge station that is the edge computing power provider.";
let textLength = text.length;
const homePage1 = document.getElementById("type-effect-1");
const typingEffectSquare = document.getElementById("typing-effect-square");


console.log(typingEffectSquare.style.display)
const typedEffect = () => {
    if (i < text.length) {
        homePage1.innerHTML += text.charAt(i);
        i++;
        typingEffectSquare.style.display = "inline";
        setTimeout(typedEffect, 18);
    }
    else {
        typingEffectSquare.style.display = "none";
    }
}
window.onload = setTimeout(typedEffect, 100);

// ----- Video Mute/Unmute 
const buttonVolume = document.getElementById("mute-button");
const myVideo = document.getElementById("my-video");
const volumeOff = document.getElementById("volume-Off");
const volumeOn = document.getElementById("volume-On");

volumeOff.style.display = "none";
volumeOn.style.display = "block";
myVideo.muted = true;

const changeVolume = () => {
    myVideo.muted = !myVideo.muted;
    if(volumeOff.style.display === "none" & volumeOn.style.display === "block") {
        volumeOff.style.display = "block";
        volumeOn.style.display = "none";
    }
    else {
        volumeOff.style.display = "none";
        volumeOn.style.display = "block";
    }
}
buttonVolume.addEventListener("click", changeVolume);

// ----- Pop-up Handler -----

const popUpWindow = document.getElementById("pop-up-window");
const closeBtn = document.getElementById("close-btn-id");
const vision_Text = document.getElementById("pop-up-vision");

const vision_1_Button = document.getElementById("vision-1-learn");
const vision_2_Button = document.getElementById("vision-2-learn");


vision_1_Button.myParam = indexPopUp.vision_1;
vision_2_Button.myParam = indexPopUp.vision_2;


const showPopUp = (event) => {
    if (vision_Text != 0) {
        let popUpText = event.currentTarget.myParam;
        vision_Text.innerHTML = popUpText.join("");
        vision_Text.style.display = "flex";
        popUpWindow.style.display = "flex";
    } 
}
const closePopUp = () => {
    popUpWindow.style.display = "none";
    vision_Text.style.display = "none";
}

closeBtn.addEventListener("click", closePopUp)
vision_1_Button.addEventListener("click", showPopUp, false)
vision_2_Button.addEventListener("click", showPopUp, false)




// ----- Initialize Swiper (Slider for Blog)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
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



