const myimage = document.querySelector(".myimage");
function flipping() {
  myimage.classList.toggle("flip");
}
function flippingouy() {
    myimage.classList.toggle("flip");
  }

myimage.addEventListener("mouseenter", flipping);
myimage.addEventListener("mouseout", flippingouy);