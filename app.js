const heading = document.querySelector(".name");

const glass = document.querySelector(".glass");

const on_btn = document.querySelector(".onBTN");

const off_btn = document.querySelector(".ofBTN");

const body = document.body;

on_btn.addEventListener("click", function turnOnBulb() {
  heading.style.color = "#8f8f00"

  heading.innerText = "Bulb is On"

  heading.style.marginTop = "45px"

  heading.style.fontSize = "70px"

  glass.style.backgroundColor = "yellow";

  body.style.backgroundColor = "rgba(250, 250, 8, 0.486)";

  body.style.transition = "1s"

  glass.style.boxShadow = "10px 5px 39px #8f8f00,-10px -5px 39px #ffff00";
});

off_btn.addEventListener("click", function turnOfBulb() {
    heading.innerText = "Bulb is OFF"
 
    heading.style.marginTop = "45px"

    heading.style.fontSize = "70px"

    heading.style.color = "#fff"

    body.style.backgroundColor = "#000";

    glass.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.397)"

    glass.style.backgroundColor = "white";

  });