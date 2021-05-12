var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slide');
  let slides_text = document.getElementsByClassName('slide_text')
  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides_text[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slides_text[slideIndex-1].style.display = "inline-block";
}

function func(){
      document.querySelector('.links_to_sections').classList.toggle('open');
      document.querySelector('.burger_bar').classList.toggle('open');
}
