const navToggle = document.querySelector(".nav");

const navWrapper = document.querySelector(".nav-wrapper");
const closeBtn = document.querySelector(".close");

//Click Event - Open
navToggle.addEventListener("click", e => {
  navWrapper.classList.remove("hide");
  navWrapper.classList.add("scale-in-hor-left");
  navWrapper.classList.add("show");
});
//Click Event - Close
closeBtn.addEventListener("click", e => {
  navWrapper.classList.remove("scale-in-hor-left");
  navWrapper.classList.remove("show");
  navWrapper.classList.add("hide");
});
