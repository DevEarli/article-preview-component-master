const shareButton = document.querySelector(".share-icon");
const shareBox = document.querySelector(".share-box");

shareButton.addEventListener("click", display);

function display() {
  if (!shareBox.classList.contains("active")) {
    shareButton.classList.add("change");
    shareBox.classList.add("active");
    setTimeout(function () {
      shareBox.classList.toggle("opacity");
    }, 100);
  } else {
    shareButton.classList.remove("change");
    shareBox.classList.remove("opacity");
    setTimeout(function () {
      shareBox.classList.remove("active");
    }, 500);
  }
}
