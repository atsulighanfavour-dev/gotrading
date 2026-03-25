/* Typewriter Effect */
document.addEventListener("DOMContentLoaded", function () {
  const mainText = document.getElementById("main-text");
  const subText = document.getElementById("sub-text");

  const content = [
    {
      title: "We Employ Top-Tier Traders To Enhance Your Trading Experience.",
      subtitle: "We're here to elevate your Experience",
    },
    {
      title:
        "Cosider Investing With A Reputable Company You Have Confidence In.",
      subtitle: "Rest easy Knowing Your Investments Are Secure With Us",
    },
    {
      title: "Very Much Convinent Than Others.",
      subtitle: "Invest with us Today Let your money do the hardwork",
    },
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = content[index];

    const fullTitle = current.title;
    const fullSubtitle = current.subtitle;

    if (!isDeleting) {
      // Typing
      mainText.textContent = fullTitle.substring(0, charIndex + 1);
      subText.textContent = fullSubtitle.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === fullTitle.length) {
        setTimeout(() => (isDeleting = true), 1500);
      }
    } else {
      // Deleting
      mainText.textContent = fullTitle.substring(0, charIndex - 1);
      subText.textContent = fullSubtitle.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % content.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 30 : 50);
  }

  typeEffect();

  /*function changeText() {
    // fade out
    mainText.classList.add("fade-out");
    subText.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % content.length;

      mainText.textContent = content[index].title;
      subText.textContent = content[index].subtitle;

      mainText.classList.remove("fade-out");
      subText.classList.remove("fade-out");
    }, 500);
  }

  setInterval(changeText, 4000);*/
});

/* Counter Animation */
const counters = document.querySelectorAll(".counter");

const ranges = [
  { min: 2000, max: 3000 },
  { min: 24, max: 24 },
  { min: 1000000, max: 3000000 },
];

counters.forEach((counter, index) => {
  const randomNumber =
    Math.floor(Math.random() * (ranges[index].max - ranges[index].min + 1)) +
    ranges[index].min;

  let current = 0;
  const increment = randomNumber / 200;

  function updateCounter() {
    if (current < randomNumber) {
      current += increment;
      counter.innerText = Math.ceil(current).toLocaleString();
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = randomNumber.toLocaleString();
    }
  }

  updateCounter();
});

/*Currency Switching */
document.querySelectorAll(".currency-tabs span").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});



