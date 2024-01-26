const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (event) {
  // CEK APAKAH YANG DI CLICK ADLAH THUMB
  if (event.target.className == "thumb") {
    hero.src = event.target.src;
    hero.classList.add("fade");
    setTimeout(function () {
      hero.classList.remove("fade");
    }, 300);

    thumbs.forEach(function (thumb) {
      if (thumb.classList.contains("active")) {
        thumb.classList.remove("active");
      }
    });
    event.target.classList.add("active");
  }
});
