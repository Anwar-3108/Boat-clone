var slideIndex = 0;
var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
var sliderControls = document.querySelector(".slider-controls");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  // Remove active class from all control buttons
  var controlButtons = sliderControls.getElementsByTagName("button");
  for (var j = 0; j < controlButtons.length; j++) {
    controlButtons[j].classList.remove("active");
  }

  // Add active class to the current control button
  controlButtons[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Create control buttons
for (var k = 0; k < slides.length; k++) {
  var button = document.createElement("button");
  button.addEventListener("click", function() {
    slideIndex = k;
    showSlide();
  });
  sliderControls.appendChild(button);
}

showSlide();

// Auto move slides every 3 seconds
setInterval(function() {
  nextSlide();
}, 3000);

var slideIndex = 0;
    showSlide1(slideIndex);
    
    function changeSlide(n) {
      showSlide1(slideIndex += n);
    }
    
    function showSlide1(n) {
      var slides = document.getElementsByClassName("slide");
      if (n >= slides.length) {
        slideIndex = 0;
      }
      if (n < 0) {
        slideIndex = slides.length - 1;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slides[slideIndex].classList.add("active");
    }