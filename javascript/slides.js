function renderSlides() {
    let data = "";
    data += `
        <div class="mySlides fade">
            <img src="images/slide_1.jpg" style="width:100%">
        </div>

        <div class="mySlides fade">
            <img src="images/slide_2.jpg" style="width:100%">
        </div>

        <div class="mySlides fade">
            <img src="images/slide_3.jpg" style="width:100%">
        </div>

        <div class="text">NỘI THẤT ĐẸP</div>

        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>

        <div class="dot-list" style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
`
    document.getElementById("slideshow-container").innerHTML = data
}
renderSlides();

let slideIndex = 1;
showSlides(slideIndex);


function runSlide() {
    slideIndex++;
    showSlides(slideIndex);
    // console.log(slideIndex);
}
setInterval(runSlide, 6000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}