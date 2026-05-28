window.addEventListener("scroll", () => {
  const bar = document.getElementById("bottom-bar");

  if (window.scrollY > 100) {
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.zIndex = "1000"
  } else {
    bar.style.position = "relative";
  }
});

const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const nav = document.getElementById("nav-bar");

openBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active")
});
