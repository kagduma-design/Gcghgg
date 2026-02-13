const openBtn = document.getElementById("openBtn");
const flowerContainer = document.getElementById("flowerContainer");
const picturesContainer = document.getElementById("picturesContainer");
const bgMusic = document.getElementById("bgMusic");
const finalVideo = document.getElementById("finalVideo");

openBtn.addEventListener("click", () => {
  // Start music
  bgMusic.play();

  // Hide button and title
  openBtn.style.display = "none";
  document.querySelector(".title").style.display = "none";

  // Show flower animation
  flowerContainer.style.display = "block";

  // After 3 seconds, hide flower and show pictures
  setTimeout(() => {
    flowerContainer.style.display = "none";
    picturesContainer.style.display = "flex";

    const imgs = picturesContainer.querySelectorAll("img");
    let index = 0;

    function showNextImage() {
      if (index < imgs.length) {
        const img = imgs[index];
        img.style.animation = "slideUp 0.5s forwards";
        index++;
        setTimeout(showNextImage, 100); // stagger each image
      } else {
        // After last image, wait a bit then show video
        setTimeout(() => {
          picturesContainer.style.display = "none";
          finalVideo.style.display = "block";
          finalVideo.play();
        }, 1000);
      }
    }

    showNextImage();

  }, 3000); // flower animation duration
});
