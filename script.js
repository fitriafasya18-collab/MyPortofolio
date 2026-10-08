/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 5px 30px rgba(18, 40, 75, 0.10)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

}


/* =========================
   PROJECT SLIDER
========================= */

const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(function (slider) {

    const slides = slider.querySelectorAll(".slide");

    const dots = slider.querySelectorAll(".dot");

    const prevButton = slider.querySelector(".prev");

    const nextButton = slider.querySelector(".next");

    let currentSlide = 0;


    function showSlide(index) {

        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        slides[index].classList.add("active");


        if (dots[index]) {

            dots[index].classList.add("active");

        }

    }


    if (nextButton) {

        nextButton.addEventListener("click", function () {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        });

    }


    if (prevButton) {

        prevButton.addEventListener("click", function () {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide = slides.length - 1;

            }

            showSlide(currentSlide);

        });

    }


    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });


    showSlide(currentSlide);

});