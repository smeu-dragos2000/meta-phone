// Typeing Effect
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
myVideo.muted = true;

const changeVolume = () => {
    myVideo.muted = !myVideo.muted;
    console.log(myVideo.muted);
}
buttonVolume.addEventListener("click", changeVolume);



