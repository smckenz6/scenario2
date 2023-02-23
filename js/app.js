let init = () => {
  let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    current = 1,
    time = 6000;

  //add animation class to slide
  slides[0].classList.add("jumbo-slider__slide--active");
  links[current - 1].classList.add("jumbo-slider__link--active");
  circles[current - 1].classList.add("jumbo-slider__circle--filled");

  //update ellipsis and links
  let updateNav = (current) => {
    for (let index = 0; index < slides.length; index++) {
      links[index].classList.remove("jumbo-slider__link--active");
      circles[index].classList.remove("jumbo-slider__circle--filled");
    }
    links[current - 1].classList.add("jumbo-slider__link--active");
    circles[current - 1].classList.add("jumbo-slider__circle--filled");
  };

  let startSliding = () => {
    setInterval(() => {
      //Remove from active from first and add it to the second slide so it can become the first slide with the class activated
      slides[1].classList.add("jumbo-slider__slide--active");
      slides[0].classList.remove("jumbo-slider__slide--active");

      //Clone the first slide and place it on the last space.
      container.appendChild(slides[0].cloneNode([true]));

      //Then remove the first slide after it has been cloned
      container.removeChild(slides[0]);

      if (current < slides.length) {
        current++;
        updateNav(current);
      } else {
        current = 1;
        updateNav(current);
      }
    }, time);
  };
  startSliding();
};

init();
