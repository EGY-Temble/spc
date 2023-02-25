let sign = document.querySelector(".sign");
let btn = document.querySelector(".sps");
let inp = document.querySelectorAll(".inp");


btn.addEventListener("click", () => {
    sign.style.display = "block";
});

// 

let btnClose = document.querySelector(".son");

btnClose.addEventListener("click", () => {
    sign.style.display = "none";
})
