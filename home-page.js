let i = 0;
let text = "MetaPhone is accelerating the world's transition to software driven cities with cloud phones, data management and performance SaaS integrated platform."
const homePage1 = document.getElementById("type-effect-1");

const typedEffect = () => {
    if (i < text.length) {
        homePage1.innerHTML += text.charAt(i);
        i++;
        setTimeout(typedEffect, 5);
        console.log(homePage1.innerHTML);
    }
}

window.onload = typedEffect();