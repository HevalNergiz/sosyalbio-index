let currentScrollPosition = 0;
    let scrollAmount = 100;
if(window.innerWidth < 768) scrollAmount = 100; else scrollAmount = 100;

    const sCont = document.querySelector(".card-container");
    const hScroll = document.querySelector(".horizontal-scroll");
    const btnScrollLeft = document.getElementById("btn-scroll-left");
    const btnScrollRight = document.getElementById("btn-scroll-right");
document.addEventListener('DOMContentLoaded', () => {
    // i prefer adding event listeners in javascript.
    btnScrollLeft.addEventListener('click', function(e) {
      e.preventDefault();
      scrollHorizontally(1);
    });
    btnScrollRight.addEventListener('click', function(e) {
      e.preventDefault();
      scrollHorizontally(-1);
    });
});

function scrollHorizontally(val) {
      let c_width = hScroll.offsetWidth,
          box_width = sCont.offsetWidth,
          amount = val * scrollAmount,
          diff = c_width - box_width;
      // to calculate the difference, we only need to subtract width of the div containing the cards.
      currentScrollPosition = currentScrollPosition + amount;

      if (currentScrollPosition > 0) {
        // cap start
        currentScrollPosition = 0;
        btnScrollLeft.style.opacity = "";
      } else if (currentScrollPosition < diff) {
        // cap end
        currentScrollPosition = diff;
        btnScrollRight.style.opacity = "";
      } else {
        btnScrollLeft.style.opacity = "1";
        btnScrollRight.style.opacity = "1";
      }
      sCont.style.left = currentScrollPosition + "px";
    }
