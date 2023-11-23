const submitButton = document.getElementsByClassName("primary-button"); 
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const nameOutput = document.getElementById("username");
const imageSlider = document.getElementById("slider");

submitButton[0].addEventListener("click", function (event) {
  if (nameInput.value.length === 0 || emailInput.value.length === 0) {
    alert("nama atau email tidak boleh kosong");
  } else {
    nameOutput.textContent = nameInput.value;
  }
});



const images = ["assets/danaukaco.jpeg", "assets/danaukerincibig.jpeg", "assets/pancuranrayabig.jpg"];


var i = 0;
function bannerSlide() {
  i += 1;
  if (i == images.length) {
    i = 0;
  }
  imageSlider.src = images[i];
}


setInterval(bannerSlide, 1000);

console.log("cobain pull request");
