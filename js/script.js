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


const tickerData = [
  { pair: "BTC/USD", price: "70,393.0", percent: "1.19%", delta: "845.00" },
  { pair: "ETH/USD", price: "2,149.50", percent: "2.45%", delta: "53.90" },
  { pair: "ZEC/USD", price: "237.12", percent: "4.75%", delta: "11.82" },
  { pair: "LTC/USD", price: "55.712", percent: "0.62%", delta: "0.35" },
  {
    pair: "BTG/USD",
    price: "",
    percent: "",
    delta: "",
    badge: "B",
    flagged: true,
  },
  { pair: "XMR/USD", price: "342.400", percent: "1.12%", delta: "3.88" },
  { pair: "SOL/USD", price: "184.30", percent: "0.94%", delta: "1.75" },
  { pair: "DOGE/USD", price: "0.2018", percent: "1.83%", delta: "0.01" },
];

const tickerStrip = document.getElementById("tickerStrip");
const prevButton = document.getElementById("tickerPrev");
const nextButton = document.getElementById("tickerNext");
const quotesButton = document.getElementById("quotesButton");
const scrollStep = 320;

function renderTickerQuotes() {
  tickerStrip.innerHTML = tickerData
    .map((quote) => {
      const hasMove = quote.percent && quote.delta;
      const badge = quote.badge
        ? `<span class="ticker-quote__badge">${quote.badge}</span>`
        : "";
      const flag = quote.flagged
        ? `<span class="ticker-quote__flag">!</span>`
        : "";
      const changeBlock = hasMove
        ? `
          <div class="ticker-quote__change">
            <span class="ticker-quote__arrow" aria-hidden="true"></span>
            <span class="ticker-quote__percent">${quote.percent}</span>
            <span class="ticker-quote__delta">${quote.delta}</span>
          </div>
        `
        : "";

      return `
        <button class="ticker-quote" type="button" data-pair="${quote.pair}">
          <div class="ticker-quote__top">
            <div class="ticker-quote__pair">
              ${badge}
              <span>${quote.pair}</span>
              ${flag}
            </div>
            <div class="ticker-quote__price">${quote.price}</div>
          </div>
          ${changeBlock}
        </button>
      `;
    })
    .join("");
}

function showToast(message) {
  const oldToast = document.querySelector(".ticker-toast");
  if (oldToast) {
    oldToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "ticker-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 1800);
}

prevButton.addEventListener("click", () => {
  tickerStrip.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
  tickerStrip.scrollBy({ left: scrollStep, behavior: "smooth" });
});

quotesButton.addEventListener("click", () => {
  showToast("Quotes button clicked");
});

tickerStrip.addEventListener("click", (event) => {
  const button = event.target.closest(".ticker-quote");
  if (!button) {
    return;
  }

  showToast(`Clicked ${button.dataset.pair}`);
});

renderTickerQuotes();
