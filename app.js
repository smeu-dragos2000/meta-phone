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
        setTimeout(typedEffect, 12);
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

// Scroll to top button


