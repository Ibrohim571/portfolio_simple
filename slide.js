const carousel = document.getElementById("certCarousel");
const track = carousel.querySelector(".carousel-track");

let isDown = false;
let startX;
let scrollLeft;
let autoScroll = null;

// Duplicate slides for infinite loop effect
track.innerHTML += track.innerHTML;

function startAutoScroll() {
  if (autoScroll !== null) return; // ⛔ prevent multiple intervals

  autoScroll = setInterval(() => {
    carousel.scrollLeft += 1;

    if (carousel.scrollLeft >= track.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = null;
}

// Start once
startAutoScroll();

// Pause on hover
carousel.addEventListener("mouseenter", stopAutoScroll);
carousel.addEventListener("mouseleave", startAutoScroll);

// Drag with mouse
carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  stopAutoScroll();
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  startAutoScroll();
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  startAutoScroll();
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});
