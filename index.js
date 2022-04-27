import { indexPopUp } from "./popUp-texts.js";

// Typeing Effect
let i = 0;
let text = "MetaPhone is accelerating the world's transition to software driven cities with cloud phones, data management and performance SaaS integrated platform.";
let textLength = text.length;
const homePage1 = document.getElementById("type-effect-1");
const typingEffectSquare = document.getElementById("typing-effect-square");

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


// Video Mute/Unmute 
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

const meta1_0_Text = document.getElementById("pop-up-meta1.0");
const meta1_0_Button = document.getElementById("meta-1.0-Learn");
const meta1_2_Button = document.getElementById("meta-1.2-Learn");
const meta2_0_Button = document.getElementById("meta-2.0-Learn");

meta1_0_Button.myParam = indexPopUp.meta1_0;
meta1_2_Button.myParam = indexPopUp.meta1_2;
meta2_0_Button.myParam = indexPopUp.meta2_0;

const showPopUp = (event) => {
    if (meta1_0_Text != 0) {
        let popUpText = event.currentTarget.myParam;
        meta1_0_Text.innerHTML = popUpText.join("");
        meta1_0_Text.style.display = "flex";
        popUpWindow.style.display = "flex";
    } 
}
const closePopUp = () => {
    popUpWindow.style.display = "none";
}

closeBtn.addEventListener("click", closePopUp)
meta1_0_Button.addEventListener("click", showPopUp, false)
meta1_2_Button.addEventListener("click", showPopUp, false)
meta2_0_Button.addEventListener("click", showPopUp, false)
