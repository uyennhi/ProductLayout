// slice show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//e-product
var slideIndexProduct = 1;
showSlidesProduct(slideIndexProduct);

function plusSlidesProduct(n) {
  showSlidesProduct(slideIndexProduct += n);
}

function showSlidesProduct(n) {
  var i;
  var slidesProduct = document.getElementsByClassName("e-products");
  if (n > slidesProduct.length) {slideIndexProduct = 1}
  if (n < 1) {slideIndexProduct = slidesProduct.length}
  for (i = 0; i < slidesProduct.length; i++) {
    slidesProduct[i].style.display = "none";
  }
  
  slidesProduct[slideIndexProduct-1].style.display = "flex";
}