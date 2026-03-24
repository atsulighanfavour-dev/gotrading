const marketData = [
  {
    name: "Mexican Peso Tether",
    symbol: "MT",
    marketCap: "739.46 K",
    fdMarketCap: "756 K",
    price: "0.03780000",
    availableCoins: "19.56 M",
    totalCoins: "20 M",
    tradedVol: "1",
    change: 51.2,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Sahara AI",
    symbol: "SA",
    marketCap: "79.86 M",
    fdMarketCap: "274.5 M",
    price: "0.02745",
    availableCoins: "2.91 B",
    totalCoins: "10 B",
    tradedVol: "131.22 M",
    change: 12.64,
    color: "linear-gradient(135deg, #fff48e 0%, #f1e851 100%)",
  },
  {
    name: "Celo",
    symbol: "C",
    marketCap: "49.99 M",
    fdMarketCap: "83.65 M",
    price: "0.08365279",
    availableCoins: "597.55 M",
    totalCoins: "1 B",
    tradedVol: "5.43 M",
    change: 7.61,
    color: "linear-gradient(135deg, #fff464 0%, #fff000 100%)",
  },
  {
    name: "Resolv",
    symbol: "RS",
    marketCap: "23.63 M",
    fdMarketCap: "63.49 M",
    price: "0.06349",
    availableCoins: "372.21 M",
    totalCoins: "1 B",
    tradedVol: "19.3 M",
    change: 7.57,
    color: "linear-gradient(135deg, #f5e8d7 0%, #6f9fb8 100%)",
  },
  {
    name: "Boundless",
    symbol: "BD",
    marketCap: "23.48 M",
    fdMarketCap: "84.92 M",
    price: "0.08200",
    availableCoins: "286.3 M",
    totalCoins: "1.04 B",
    tradedVol: "7.94 M",
    change: 6.87,
    color: "linear-gradient(135deg, #fbf7f1 0%, #ded7cb 100%)",
  },
  {
    name: "Nexo",
    symbol: "N",
    marketCap: "607.38 M",
    fdMarketCap: "940 M",
    price: "0.94000000",
    availableCoins: "646.15 M",
    totalCoins: "1 B",
    tradedVol: "8.89 M",
    change: 4.44,
    color: "linear-gradient(135deg, #eef2f8 0%, #b9c7df 100%)",
  },
  {
    name: "Newton Protocol",
    symbol: "NP",
    marketCap: "15.39 M",
    fdMarketCap: "71.6 M",
    price: "0.07160",
    availableCoins: "215 M",
    totalCoins: "1 B",
    tradedVol: "19.08 M",
    change: 4.4,
    color: "linear-gradient(135deg, #31363c 0%, #111315 100%)",
    highlighted: true,
  },
  {
    name: "Theta Fuel",
    symbol: "TF",
    marketCap: "96.85 M",
    fdMarketCap: "96.85 M",
    price: "0.01332996",
    availableCoins: "7.27 B",
    totalCoins: "7. 27 B",
    tradedVol: "3.43 M",
    change: 3.8,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Kite",
    symbol: "K",
    marketCap: "360 M",
    fdMarketCap: "2 B",
    price: "0.20000",
    availableCoins: "1.8 B",
    totalCoins: "10 B",
    tradedVol: "168.94 M",
    change: 3.31,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "NYM",
    symbol: "N",
    marketCap: "3.52 M",
    fdMarketCap: "36.8 M",
    price: "0.03680000",
    availableCoins: "829.45 M",
    totalCoins: "1 B",
    tradedVol: "2.12 M",
    change: 3.26,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Stable",
    symbol: "S",
    marketCap: "585.07 M",
    fdMarketCap: "2.79 B",
    price: "0.02786800",
    availableCoins: "20.99 B",
    totalCoins: "100 B",
    tradedVol: "20.66 M",
    change: 2.92,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Dent",
    symbol: "D",
    marketCap: "23.13 M",
    fdMarketCap: "23.13 M",
    price: "0.0002313",
    availableCoins: "100 B",
    totalCoins: "100 B",
    tradedVol: "16.17 M",
    change: 2.89,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "GUNZ",
    symbol: "G",
    marketCap: "27.86 M",
    fdMarketCap: "169.63 M",
    price: "0.01696300",
    availableCoins: "1.64 B",
    totalCoins: "10 B",
    tradedVol: "15.8 M",
    change: 2.67,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Storj",
    symbol: "S",
    marketCap: "43.26 M",
    fdMarketCap: "43.26 M",
    price: "0.1018",
    availableCoins: "425 M",
    totalCoins: "425 M",
    tradedVol: "7.93 M",
    change: 2.52,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "MANTRA",
    symbol: "M",
    marketCap: "67.14 M",
    fdMarketCap: "140.25 M",
    price: "0.014025",
    availableCoins: "4.79 B",
    totalCoins: "10 B",
    tradedVol: "26.54 M",
    change: 1.48,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "StablR Euro",
    symbol: "E",
    marketCap: "13.83 M",
    fdMarketCap: "13.83 M",
    price: "1.16360000",
    availableCoins: "11.88M",
    totalCoins: "11.88M",
    tradedVol: "5.29 M",
    change: 1.47,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Siacoin",
    symbol: "S",
    marketCap: "58.65 M",
    fdMarketCap: "65.13 M",
    price: "0.0010467926",
    availableCoins: "56.03 B",
    totalCoins: "62.22 B",
    tradedVol: "6.91 M",
    change: 1.17,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Fluid",
    symbol: "F",
    marketCap: "180.86 M",
    fdMarketCap: "230.3 M",
    price: "2.303",
    availableCoins: "78.53 M",
    totalCoins: "100 M",
    tradedVol: "4 M",
    change: 1.14,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "UNUS SEd LEO",
    symbol: "Usl",
    marketCap: "8.44 B",
    fdMarketCap: "9.03 B",
    price: "9.16200000",
    availableCoins: "921.09 M",
    totalCoins: "985.24 M",
    tradedVol: "929.35 K",
    change: 1.05,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Maple Finance",
    symbol: "m",
    marketCap: "257.97 M",
    fdMarketCap: "270.56 M",
    price: "0.22248",
    availableCoins: "1.16 B",
    totalCoins: "1.22 B",
    tradedVol: "13.52 M",
    change: 0.98,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Orbs",
    symbol: "D",
    marketCap: "41.99 M",
    fdMarketCap: "96.15 M",
    price: "0.009615",
    availableCoins: "4.37 B",
    totalCoins: "10 B",
    tradedVol: "6.68 M",
    change: 0.84,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Euler",
    symbol: "=",
    marketCap: "22.08 M",
    fdMarketCap: "24.8 M",
    price: "0.912400",
    availableCoins: "24.2 M",
    totalCoins: "27.18 M",
    tradedVol: "5.36 M",
    change: 0.81,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
  {
    name: "Quant",
    symbol: "Q",
    marketCap: "895.37 M",
    fdMarketCap: "1.1 B",
    price: "74.1648009",
    availableCoins: "12.07 M",
    totalCoins: "14.88 M",
    tradedVol: "18.22 M",
    change: 0.79,
    color: "linear-gradient(135deg, #75d1cf 0%, #0f8f9b 100%)",
  },
];

const body = document.getElementById("marketTableBody");
const matchCount = document.getElementById("matchCount");
const sortHeader = document.querySelector('[data-sort="change"]');
const tableWrap = document.getElementById("tableWrap");
const scrollLeftBtn = document.getElementById("scrollLeftBtn");
const scrollRightBtn = document.getElementById("scrollRightBtn");

let sortDirection = "desc";
const scrollAmount = 360;

function renderRows(rows) {
  body.innerHTML = rows
    .map((coin) => {
      const changeClass = coin.change >= 0 ? "change-positive" : "";
      const highlightClass = coin.highlighted ? "is-highlighted" : "";

      return `
        <tr class="${highlightClass}">
          <td>
            <div class="asset">
              <div class="asset__logo" style="background:${coin.color};">${coin.symbol}</div>
              <span class="asset__name">${coin.name}</span>
            </div>
          </td>
          <td>${coin.marketCap}</td>
          <td>${coin.fdMarketCap}</td>
          <td>${coin.price}</td>
          <td>${coin.availableCoins}</td>
          <td>${coin.totalCoins}</td>
          <td>${coin.tradedVol}</td>
          <td class="${changeClass}">${coin.change.toFixed(2)}%</td>
        </tr>
      `;
    })
    .join("");
}

function sortByChange() {
  const sorted = [...marketData].sort((a, b) => {
    return sortDirection === "desc" ? b.change - a.change : a.change - b.change;
  });

  renderRows(sorted);
}

sortHeader.addEventListener("click", () => {
  sortDirection = sortDirection === "desc" ? "asc" : "desc";
  sortHeader.classList.toggle("is-active", true);
  sortHeader.querySelector(".sort-indicator").style.transform =
    sortDirection === "desc"
      ? "translateX(-50%)"
      : "translateX(-50%) rotate(180deg)";
  sortByChange();
});

scrollLeftBtn.addEventListener("click", () => {
  tableWrap.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  tableWrap.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

matchCount.textContent = "223";
sortByChange();
