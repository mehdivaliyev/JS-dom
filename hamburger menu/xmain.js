const hamb = document.querySelector(".hamburger");
const menCont = document.querySelector(".menu-container");
const topelement = document.querySelector(".menu-top");
const center = document.querySelector(".center");
const bottom = document.querySelector(".menu-bottom");

var say = 0;

hamb.addEventListener("click", () => {
  if (say === 0) {
    menCont.setAttribute("style", "left: 0%");
    topelement.setAttribute("style", "transform: rotate(-45deg); margin-top: 24px");
    center.setAttribute("style", "transform: rotate(45deg); margin-top: -7px");
    bottom.setAttribute("style", "opacity: 0");
    say++;
  } else {
    menCont.setAttribute("style", "left: -100%");
    topelement.setAttribute("style", "transform: rotate(0); margin-top: 0px");
    center.setAttribute("style", "transform: rotate(0); margin-top: 7px");
    bottom.setAttribute("style", "opacity: 1");
    say--;
  }

  console.log(say);
});
