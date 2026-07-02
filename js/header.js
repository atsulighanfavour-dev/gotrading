fetch("../services/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const openBtn = document.getElementById("open-nav");
    const closeBtn = document.getElementById("close-nav");
    const nav = document.getElementById("nav-bar");

      openBtn.addEventListener("click", () => {
        nav.classList.add("active");
      });

      closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        console.log("button clicked");
        e.preventDefault();
        toggle.nextElementSibling.classList.toggle("active");
      });
    });

  });

window.addEventListener("scroll", () => {
  const bar = document.getElementById("bottom-bar");

  if (window.scrollY > 100) {
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.zIndex = "1000";
  } else {
    bar.style.position = "relative";
  }
});

