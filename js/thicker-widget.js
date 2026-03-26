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
