import { indexPopUp } from "./popUp-texts.js";


// ----- Pop-up Handler -----

const popUpWindow = document.getElementById("pop-up-window");
const closeBtn = document.getElementById("close-btn-id");
const tech_Text = document.getElementById("pop-up-tech");

const tech_1_Button = document.getElementById("tech-1-learn");
const tech_2_Button = document.getElementById("tech-2-learn");
const tech_3_Button = document.getElementById("tech-3-learn");
const tech_4_Button = document.getElementById("tech-4-learn");
const tech_5POW_Button = document.getElementById("tech-5-POW");
const tech_5POS_Button = document.getElementById("tech-5-POS");
const tech_6_Button = document.getElementById("tech-6-learn");

tech_1_Button.myParam = indexPopUp.tech_1;
tech_2_Button.myParam = indexPopUp.tech_2;
tech_3_Button.myParam = indexPopUp.tech_3;
tech_4_Button.myParam = indexPopUp.tech_4;
tech_5POW_Button.myParam = indexPopUp.tech_5POW;
tech_5POS_Button.myParam = indexPopUp.tech_5POS;
tech_6_Button.myParam = indexPopUp.tech_6;

const showPopUp = (event) => {
    if (tech_Text != 0) {
        let popUpText = event.currentTarget.myParam;
        tech_Text.innerHTML = popUpText.join("");
        tech_Text.style.display = "flex";
        popUpWindow.style.display = "flex";
    } 
}
const closePopUp = () => {
    popUpWindow.style.display = "none";
    tech_Text.style.display = "none";
}

closeBtn.addEventListener("click", closePopUp)
tech_1_Button.addEventListener("click", showPopUp, false)
tech_2_Button.addEventListener("click", showPopUp, false)
tech_3_Button.addEventListener("click", showPopUp, false)
tech_4_Button.addEventListener("click", showPopUp, false)
tech_5POW_Button.addEventListener("click", showPopUp, false)
tech_5POS_Button.addEventListener("click", showPopUp, false)
tech_6_Button.addEventListener("click", showPopUp, false)