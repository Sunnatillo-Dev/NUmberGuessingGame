let guessButton = document.querySelector("#guessButton");
let guessInput = document.querySelector("#guessInput");
let result = document.querySelector("#result");
let addmoney = document.querySelectorAll(".full-balance");
let modal = document.querySelector("#myModal");
let closeModal = document.querySelector("#closeModal");
let addMoneyButton = document.querySelector("#addMoneyButton");
let balanceElement = document.querySelector("#summa");
let balance = +localStorage.getItem("balance") || 0;
let modalContent = document.querySelector(".modal-content");
let burgerMenu = document.querySelector(".burger");
let burgermenu2 = document.querySelector(".burger-menu");
let burgermenu = document.querySelector(".burger-overlay");
let body = document.body;
let header = document.querySelector(".header");
let box = document.querySelector(".content-box");
let texts = document.querySelectorAll(
    "h1,h2,h3,h4,h5,h6,p,i,button,div,a,input"
);
let cardSlot = document.querySelector(".card-slot");
let cardNumber = document.querySelector("#cardNumber");
let cardHolder = document.querySelector("#cardHolder");
let expirationDate = document.querySelector("#expirationDate");
let cvv = document.querySelector("#cvv");
let darkmode2 = document.querySelector(".darkmode2")
// let wins = 0;
// let loses = 0;
let modes = true;
let dark = document.querySelector(".darkmode");
balanceElement.innerHTML = balance;

guessButton.addEventListener("click", () => {
    let guessInput = +document.querySelector("#guessInput").value;
    let random = Math.floor(Math.random() * 10);
    if (guessInput < 0 || guessInput > 9) {
        result.innerHTML = `0 dan kichkina va 9 dan katta son kiritish mumkin emas `;
    } else {
        if (random == +guessInput) {
            result.innerHTML = `Siz ${guessInput} tanladingiz komputer esa ${random} <br /> SIZ YUTTINGIZ`;

            balance += 10;
        } else {
            if (balance <= 0) {
                balance = 0;
                alert("balansingiz tugadi");
            } else {
                balance -= 1;
                result.innerHTML = `Siz ${guessInput} tanladingiz komputer esa ${random} <br /> SIZ YUTQAZDIZ`;
            }
        }
    }
    balanceElement.innerHTML = balance;
    localStorage.setItem("balance", balance);
});

addMoneyButton.addEventListener("click", () => {
    let moneyInput = +document.querySelector("#moneyInput").value;
    const cardNumberInput = document.querySelector("#cardNumber").value;
    const cardHolderInput = document.querySelector("#cardHolder").value;
    const expirationDateInput = document.querySelector("#expirationDate").value;
    const cvvInput = document.querySelector("#cvv").value;
    if (
        cardHolderInput != "" &&
        cardNumberInput != "" &&
        expirationDateInput != "" &&
        cvvInput != ""
    ) {
        if (moneyInput < 0) {
            burger - menu;
            alert("Summani Tog'irlab Yozing");
        } else {
            if (moneyInput <= 100) {
                balance += moneyInput;
                balanceElement.innerHTML = balance;
            } else {
                alert("100 dollordan katta summa kiritish mumkin emas");
            }
        }

        localStorage.setItem("balance", balance);

        modal.style.display = "none";
    } else {
        alert("Hammasini toldirish kerak");
    }
});

addmoney[0].addEventListener("click", () => {
    modal.style.display = "block";
});
addmoney[1].addEventListener("click", () => {
    modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        console.log(e.target);
    }
});
burgerMenu.addEventListener("click", () => {
    burgermenu.style.display = "block";
    burgermenu2.style.right = "0";
});
window.addEventListener("click", (e) => {
    if (e.target == burgermenu) {
        burgermenu.style.display = "none";
    }
});

const switchInput = document.getElementById("switch");

switchInput.addEventListener("change", () => {
    modes = switchInput.checked ? true : false;
    if (modes == true) {
        dark.innerHTML = "Dark";
    } else {
        dark.innerHTML = "Light";
    }
    if (modes == true) {
        //dark
        body.style.background = "#2d2d2d";
        header.style.background = "#333";
        box.style.background = "#333";
        guessInput.style.background = "#444";
        guessButton.style.background = "#007bff";
        texts.forEach((tag) => {
            tag.style.color = "#ccc";
        });
        moneyInput.style.background = "#444";
        modal.style.background = "rgba(0, 0, 0, 0.842)";
        modalContent.style.background = "#00000062";
        burgermenu2.style.background = "#333";
        cardSlot.style.background = "#444";
        cardNumber.style.background = "#444";
        cardHolder.style.background = "#444";
        cvv.style.background = "#444";
        expirationDate.style.background = "#444";
    } else {
        //light
        body.style.background = "#e8e8e8";
        header.style.background = "#e8e8e8";
        box.style.background = "#e8e8e8";
        guessInput.style.background = "white";
        guessButton.style.background = "green";
        guessInput.style.border = "";
        texts.forEach((tag) => {
            tag.style.color = "#2d2d2d";
        });
        moneyInput.style.background = "white";
        modal.style.background = "rgb(172 172 172 / 84%)";
        modalContent.style.background = "#ffffff62";
        burgermenu2.style.background = "#e8e8e8";
        cardSlot.style.background = "white";
        cardNumber.style.background = "white";
        cardHolder.style.background = "white";
        cvv.style.background = "white";
        expirationDate.style.background = "white";
    }
});
const switchInput2 = document.getElementById("switch2");

switchInput2.addEventListener("change", () => {
    modes = switchInput2.checked ? true : false;
    if (modes == true) {
        dark.innerHTML = "Dark";
    } else {
        dark.innerHTML = "Light";
    }
    if (modes == true) {
        // Dark mode
        body.style.background = "#2d2d2d";
        header.style.background = "#333";
        box.style.background = "#333";
        guessInput.style.background = "#444";
        guessButton.style.background = "#007bff";
        texts.forEach((tag) => {
            tag.style.color = "#ccc";
        });
        moneyInput.style.background = "#444";
        modal.style.background = "rgba(0, 0, 0, 0.842)";
        modalContent.style.background = "#00000062";
        burgermenu2.style.background = "#333";
        cardSlot.style.background = "#444";
        cardNumber.style.background = "#444";
        cardHolder.style.background = "#444";
        cvv.style.background = "#444";
        expirationDate.style.background = "#444";
        darkmode2.innerHTML = "Dark"

    } else {
        // Light mode
        body.style.background = "#e8e8e8";
        header.style.background = "#e8e8e8";
        box.style.background = "#e8e8e8";
        guessInput.style.background = "white";
        guessButton.style.background = "green";
        guessInput.style.border = "";
        texts.forEach((tag) => {
            tag.style.color = "#2d2d2d";
        });
        moneyInput.style.background = "white";
        modal.style.background = "rgb(172 172 172 / 84%)";
        modalContent.style.background = "#ffffff62";
        burgermenu2.style.background = "#e8e8e8";
        cardSlot.style.background = "white";
        cardNumber.style.background = "white";
        cardHolder.style.background = "white";
        cvv.style.background = "white";
        expirationDate.style.background = "white";
        darkmode2.innerHTML = "Light"
    }
});

// Initialize the state of the toggle switch based on 'modes'
