const track = document.getElementById("certTrack");
const nextBtn = document.getElementById("certNext");
const prevBtn = document.getElementById("certPrev");

let index = 0;
const slideWidth = 284; // card width + gap

nextBtn.addEventListener("click", () => {
  const maxIndex = track.children.length - 1;
  if (index < maxIndex) {
    index++;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});
