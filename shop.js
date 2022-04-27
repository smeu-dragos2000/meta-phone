import { indexPopUp } from "./popUp-texts.js";


// ----- Pop-up Handler -----

const popUpWindow = document.getElementById("pop-up-window");
const closeBtn = document.getElementById("close-btn-id");
const shop_Text = document.getElementById("pop-up-shop");

const shop_1_Button = document.getElementById("shop-1-learn");
const shop_2_Button = document.getElementById("shop-2-learn");
const shop_3_Button = document.getElementById("shop-3-learn");


shop_1_Button.myParam = indexPopUp.shop_1;
shop_2_Button.myParam = indexPopUp.shop_1;
shop_3_Button.myParam = indexPopUp.shop_1;


const showPopUp = (event) => {
    if (shop_Text != 0) {
        let popUpText = event.currentTarget.myParam;
        shop_Text.innerHTML = popUpText.join("");
        shop_Text.style.display = "flex";
        popUpWindow.style.display = "flex";
    } 
}
const closePopUp = () => {
    popUpWindow.style.display = "none";
    shop_Text.style.display = "none";
}


closeBtn.addEventListener("click", closePopUp)
shop_1_Button.addEventListener("click", showPopUp, false)
shop_2_Button.addEventListener("click", showPopUp, false)
shop_3_Button.addEventListener("click", showPopUp, false)

